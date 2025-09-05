import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Image from "@/models/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

// Initialize S3 client for DigitalOcean Spaces
const s3Client = new S3Client({
  endpoint: process.env.DO_SPACE_END_POINT,
  forcePathStyle: false,
  region: process.env.DO_SPACE_REGION,
  credentials: {
    accessKeyId: process.env.DO_SPACE_ACCESS_KEY!,
    secretAccessKey: process.env.DO_SPACE_SECRET_KEY!,
  },
});

const bucketName = process.env.DO_SPACE_BUCKET_NAME!;

// GET /api/images/[id] - Get single image (public)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connect();
    const { id: imageId } = await params;
    const image = await Image.findById(imageId);

    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ image }, { status: 200 });
  } catch (error) {
    console.error("Error fetching image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/images/[id] - Update image (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: imageId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const { title, description, url, alt, category, isActive } = await request.json();

    const image = await Image.findById(imageId);

    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    // Update fields
    if (title !== undefined) image.title = title;
    if (description !== undefined) image.description = description;
    if (url !== undefined) image.url = url;
    if (alt !== undefined) image.alt = alt;
    if (category !== undefined) image.category = category;
    if (isActive !== undefined) image.isActive = isActive;

    await image.save();

    return NextResponse.json(
      { message: "Image updated successfully", image },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/images/[id] - Delete image (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: imageId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const image = await Image.findById(imageId);

    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    // Extract file path from URL
    const cdnUrl = process.env.NEXT_PUBLIC_DO_SPACE_CDN_URL!;
    const filePath = image.url.replace(`${cdnUrl}/`, '');

    // Delete from S3
    try {
      const deleteCommand = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: filePath,
      });
      await s3Client.send(deleteCommand);
    } catch (s3Error) {
      console.error("Error deleting from S3:", s3Error);
      // Continue with DB deletion even if S3 deletion fails
    }

    // Delete from database
    await Image.findByIdAndDelete(imageId);

    return NextResponse.json(
      { message: "Image deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}