import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Review from "@/models/review";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

// GET /api/reviews/[id] - Get single review (public)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connect();
    const { id: reviewId } = await params;
    const review = await Review.findById(reviewId);

    if (!review) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ review }, { status: 200 });
  } catch (error) {
    console.error("Error fetching review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/reviews/[id] - Update review (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: reviewId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const { founderName, review: reviewContent, companyName, companyLogoUrl, founderImageUrl, isActive } = await request.json();

    const review = await Review.findById(reviewId);

    if (!review) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    // Update fields
    if (founderName !== undefined) review.founderName = founderName;
    if (reviewContent !== undefined) review.review = reviewContent;
    if (companyName !== undefined) review.companyName = companyName;
    if (companyLogoUrl !== undefined) review.companyLogoUrl = companyLogoUrl;
    if (founderImageUrl !== undefined) review.founderImageUrl = founderImageUrl;
    if (isActive !== undefined) review.isActive = isActive;

    await review.save();

    return NextResponse.json(
      { message: "Review updated successfully", review },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/reviews/[id] - Delete review (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: reviewId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connect();

    const review = await Review.findByIdAndDelete(reviewId);

    if (!review) {
      return NextResponse.json(
        { error: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Review deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}