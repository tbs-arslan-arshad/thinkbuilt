import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters").max(300, "Excerpt too long"),
  author: z.string().min(1, "Author is required").max(100, "Author name too long"),
  tags: z.array(z.string().max(50, "Tag too long")).max(10, "Too many tags").optional(),
  featuredImage: z.string().url("Invalid image URL").optional().or(z.literal("")),
  isPublished: z.boolean().optional(),
});

export const updateBlogSchema = createBlogSchema.partial().extend({
  publishedAt: z.date().optional(),
});

export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;