import { z } from "zod";

export const createReviewSchema = z.object({
  founderName: z.string().min(1, "Founder name is required").max(100, "Founder name is too long"),
  review: z.string().min(10, "Review must be at least 10 characters").max(1000, "Review is too long"),
  companyName: z.string().min(1, "Company name is required").max(100, "Company name is too long"),
  companyLogoUrl: z.string().url("Invalid company logo URL").optional().or(z.literal("")),
  founderImageUrl: z.string().url("Invalid founder image URL").optional().or(z.literal("")),
});

export const updateReviewSchema = createReviewSchema.partial().extend({
  isActive: z.boolean().optional(),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>;