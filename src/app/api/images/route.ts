import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Image from "@/models/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

// GET /api/images - Get all images (public)
export async function GET(request: NextRequest) {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const searchTerm = searchParams.get('search') || '';
    const category = searchParams.get("category");
    const statsOnly = searchParams.get('stats-only') === 'true';

    if (statsOnly) {
      const total = await Image.countDocuments({ isActive: true });
      return NextResponse.json({ total }, { status: 200 });
    }

    interface ImageQuery {
      isActive: boolean;
      category?: string;
      $or?: { [key: string]: { $regex: string; $options: string } }[];
    }

    const query: ImageQuery = { isActive: true };
    if (category) {
      query.category = category;
    }
    if (searchTerm) {
      query.$or = [
        { title: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
        { alt: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    const images = await Image.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Image.countDocuments(query);

    return NextResponse.json({ images, total }, { status: 200 });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/images - Create new image (admin only)
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

    const { title, description, url, alt, category } = await request.json();

    if (!title || !url || !alt || !category) {
      return NextResponse.json(
        { error: "Title, URL, alt text, and category are required" },
        { status: 400 }
      );
    }

    const image = new Image({
      title,
      description,
      url,
      alt,
      category,
    });

    await image.save();

    return NextResponse.json(
      { message: "Image created successfully", image },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}