import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Review from "@/models/review";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { createReviewSchema } from "@/schemas/review";

// GET /api/reviews - Get all reviews (public)
export async function GET(request: NextRequest) {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const searchTerm = searchParams.get('search') || '';
    const statsOnly = searchParams.get('stats-only') === 'true';

    if (statsOnly) {
      const total = await Review.countDocuments({ isActive: true });
      return NextResponse.json({ total }, { status: 200 });
    }

    interface ReviewQuery {
      isActive: boolean;
      $or?: { [key: string]: { $regex: string; $options: string } }[];
    }

    const query: ReviewQuery = { isActive: true };
    if (searchTerm) {
      query.$or = [
        { founderName: { $regex: searchTerm, $options: 'i' } },
        { companyName: { $regex: searchTerm, $options: 'i' } },
        { review: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    const reviews = await Review.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
      
    const total = await Review.countDocuments(query);

    return NextResponse.json({ reviews, total }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/reviews - Create new review (admin only)
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

    const body = await request.json();
    const validationResult = createReviewSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { founderName, review: reviewContent, companyName, companyLogoUrl, founderImageUrl } = validationResult.data;

    const review = new Review({
      founderName,
      review: reviewContent,
      companyName,
      companyLogoUrl,
      founderImageUrl,
    });

    await review.save();

    return NextResponse.json(
      { message: "Review created successfully", review },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}