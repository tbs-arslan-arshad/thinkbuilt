import { apiSlice } from "./apiSlice";

interface Review {
  _id: string;
  founderName: string;
  review: string;
  companyName: string;
  companyLogoUrl?: string;
  founderImageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<{ reviews: Review[], total: number }, { page?: number; limit?: number; search?: string }>({
      query: ({ page = 1, limit = 10, search = '' } = {}) => `/reviews?page=${page}&limit=${limit}&search=${search}`,
      providesTags: ["Reviews"],
    }),
    getAllReviews: builder.query<{ reviews: Review[], total: number }, void>({
      query: () => `/reviews`,
    }),
    getReview: builder.query<{ review: Review }, string>({
      query: (id) => `/reviews/${id}`,
    }),
    createReview: builder.mutation<{ message: string; review: Review }, Partial<Review>>({
      query: (review) => ({
        url: "/reviews",
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["Reviews"],
    }),
    updateReview: builder.mutation<{ message: string; review: Review }, { id: string; review: Partial<Review> }>({
      query: ({ id, review }) => ({
        url: `/reviews/${id}`,
        method: "PUT",
        body: review,
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReview: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} = reviewsApi;