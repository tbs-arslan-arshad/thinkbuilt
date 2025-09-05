import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Blog from "@/models/blog";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

// GET /api/blogs - Get all published blogs (public)
export async function GET(request: NextRequest) {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const searchTerm = searchParams.get('search') || '';
    const published = searchParams.get("published");
    const statsOnly = searchParams.get('stats-only') === 'true';

    if (statsOnly) {
      const total = await Blog.countDocuments({ isPublished: true });
      return NextResponse.json({ total }, { status: 200 });
    }

    interface BlogQuery {
      isPublished?: boolean;
      $or?: { [key: string]: { $regex: string; $options: string } }[];
    }

    const query: BlogQuery = {};
    if (published === "true") {
      query.isPublished = true;
    }
    
    if (searchTerm) {
      query.$or = [
        { title: { $regex: searchTerm, $options: 'i' } },
        { content: { $regex: searchTerm, $options: 'i' } },
        { author: { $regex: searchTerm, $options: 'i' } },
        { tags: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Blog.countDocuments(query);

    return NextResponse.json({ blogs, total }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create new blog (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const { title, content, excerpt, author, tags, featuredImage, isPublished } = await request.json();

    if (!title || !content || !excerpt || !author) {
      return NextResponse.json(
        { error: "Title, content, excerpt, and author are required" },
        { status: 400 }
      );
    }

    const blog = new Blog({
      title,
      content,
      excerpt,
      author,
      tags: tags || [],
      featuredImage,
      isPublished: isPublished || false,
    });

    await blog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}