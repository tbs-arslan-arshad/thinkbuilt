import mongoose, { Document, Schema } from "mongoose";

export interface IImage extends Document {
  title: string;
  description?: string;
  url: string;
  alt: string;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const imageSchema = new Schema<IImage>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
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

const Image = mongoose.models.Image || mongoose.model<IImage>("Image", imageSchema);

export default Image;