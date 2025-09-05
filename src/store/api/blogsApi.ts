import { apiSlice } from "./apiSlice";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  featuredImage?: string;
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<{ blogs: Blog[], total: number }, { page?: number; limit?: number; search?: string, published?: boolean }>({
      query: ({ page = 1, limit = 10, search = '', published } = {}) => {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            search,
        });
        if (published !== undefined) {
            params.set('published', published.toString());
        }
        return `/blogs?${params.toString()}`;
    },
      providesTags: ["Blogs"],
    }),
    getAllBlogs: builder.query<{ blogs: Blog[], total: number }, void>({
      query: () => `/blogs`,
    }),
    getBlog: builder.query<{ blog: Blog }, string>({
      query: (id) => `/blogs/${id}`,
    }),
    createBlog: builder.mutation<{ message: string; blog: Blog }, Partial<Blog>>({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["Blogs"],
    }),
    updateBlog: builder.mutation<{ message: string; blog: Blog }, { id: string; blog: Partial<Blog> }>({
      query: ({ id, blog }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: blog,
      }),
      invalidatesTags: ["Blogs"],
    }),
    deleteBlog: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} = blogsApi;