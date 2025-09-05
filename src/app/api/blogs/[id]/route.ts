import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Blog from "@/models/blog";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

// GET /api/blogs/[id] - Get single blog (public if published)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connect();
    const { id: blogId } = await params;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    // Only return published blogs for public access
    if (!blog.isPublished) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - Update blog (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: blogId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const { title, content, excerpt, author, tags, featuredImage, isPublished } = await request.json();

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    // Update fields
    if (title !== undefined) blog.title = title;
    if (content !== undefined) blog.content = content;
    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (author !== undefined) blog.author = author;
    if (tags !== undefined) blog.tags = tags;
    if (featuredImage !== undefined) blog.featuredImage = featuredImage;
    if (isPublished !== undefined) {
      blog.isPublished = isPublished;
      if (isPublished && !blog.publishedAt) {
        blog.publishedAt = new Date();
      }
    }

    await blog.save();

    return NextResponse.json(
      { message: "Blog updated successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - Delete blog (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: blogId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const blog = await Blog.findByIdAndDelete(blogId);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}