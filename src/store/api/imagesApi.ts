import { apiSlice } from "./apiSlice";

interface Image {
  _id: string;
  title: string;
  description?: string;
  url: string;
  alt: string;
  category: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const imagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImages: builder.query<{ images: Image[], total: number }, { page?: number; limit?: number; search?: string, category?: string }>({
      query: ({ page = 1, limit = 10, search = '', category = '' } = {}) => {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            search,
            category,
        });
        return `/images?${params.toString()}`;
    },
      providesTags: ["Images"],
    }),
    getAllImages: builder.query<{ images: Image[], total: number }, void>({
      query: () => `/images`,
    }),
    getImage: builder.query<{ image: Image }, string>({
      query: (id) => `/images/${id}`,
    }),
    createImage: builder.mutation<{ message: string; image: Image }, Partial<Image>>({
      query: (image) => ({
        url: "/images",
        method: "POST",
        body: image,
      }),
      invalidatesTags: ["Images"],
    }),
    updateImage: builder.mutation<{ message: string; image: Image }, { id: string; image: Partial<Image> }>({
      query: ({ id, image }) => ({
        url: `/images/${id}`,
        method: "PUT",
        body: image,
      }),
      invalidatesTags: ["Images"],
    }),
    deleteImage: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/images/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Images"],
    }),
  }),
});

export const {
  useGetImagesQuery,
  useGetImageQuery,
  useCreateImageMutation,
  useUpdateImageMutation,
  useDeleteImageMutation,
  useGetAllImagesQuery,
} = imagesApi;