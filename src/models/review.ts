import mongoose, { Document, Schema } from "mongoose";

export interface IReview extends Document {
  founderName: string;
  review: string;
  companyName: string;
  companyLogoUrl?: string;
  founderImageUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    founderName: {
      type: String,
      required: true,
      trim: true,
    },
    review: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyLogoUrl: {
      type: String,
      trim: true,
    },
    founderImageUrl: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;