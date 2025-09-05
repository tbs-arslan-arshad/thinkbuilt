import { z } from "zod";

export const createImageSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  description: z.string().max(500, "Description too long").optional(),
  url: z.string().url("Invalid image URL"),
  alt: z.string().min(1, "Alt text is required").max(200, "Alt text too long"),
  category: z.string().min(1, "Category is required").max(50, "Category too long"),
});

export const updateImageSchema = createImageSchema.partial().extend({
  isActive: z.boolean().optional(),
});

export type CreateImageInput = z.infer<typeof createImageSchema>;
export type UpdateImageInput = z.infer<typeof updateImageSchema>;