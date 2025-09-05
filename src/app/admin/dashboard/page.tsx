"use client";

import { useGetAllReviewsQuery } from "@/store/api/reviewsApi";
import { useGetAllImagesQuery } from "@/store/api/imagesApi";
import { useGetAllBlogsQuery } from "@/store/api/blogsApi";

export default function AdminDashboard() {
  const { data: reviewsData, isLoading: reviewsLoading } = useGetAllReviewsQuery();
  const { data: imagesData, isLoading: imagesLoading } = useGetAllImagesQuery();
  const { data: blogsData, isLoading: blogsLoading } = useGetAllBlogsQuery();

  const reviews = reviewsData?.reviews || [];
  const images = imagesData?.images || [];
  const blogs = blogsData?.blogs || [];

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to the admin panel</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">R</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Reviews
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {reviewsLoading ? "..." : reviews.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">I</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Images
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {imagesLoading ? "..." : images.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">B</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Blogs
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {blogsLoading ? "..." : blogs.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <p>Manage your content from the navigation menu above.</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Go to Reviews to add, edit, or delete customer reviews</li>
                <li>Go to Images to manage gallery images and categories</li>
                <li>Go to Blogs to create and publish blog posts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}