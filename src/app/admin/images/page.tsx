/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  useGetImagesQuery,
  useCreateImageMutation,
  useUpdateImageMutation,
  useDeleteImageMutation,
} from "@/store/api/imagesApi";
import Image from "next/image";
import { uploadFileUsingAxios } from "@/lib/uploadFile";
import PopupModal from "@/app/components/ui/PopupModal";
import Table from "@/app/components/ui/Table";

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

export default function AdminImages() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: imagesData,
    isLoading,
    refetch,
  } = useGetImagesQuery({ page, limit, search: searchTerm });
  const [createImage] = useCreateImageMutation();
  const [updateImage] = useUpdateImageMutation();
  const [deleteImage] = useDeleteImageMutation();

  const [showForm, setShowForm] = useState(false);
  const [editingImage, setEditingImage] = useState<Image | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    alt: "",
    category: "",
  });

  // New states for file upload and preview
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  console.log("formData =>", formData);

  const images = imagesData?.images || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      let imageUrl = formData.url;

      // Upload file if selected
      if (selectedFile) {
        const { uploadUrl, filePath } = await fetch("/api/signed-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mimeType: selectedFile.type }),
        }).then((res) => res.json());

        await uploadFileUsingAxios({
          url: uploadUrl,
          file: selectedFile,
          fileType: selectedFile.type,
        });

        imageUrl = `${process.env.NEXT_PUBLIC_DO_SPACE_CDN_URL}/${filePath}`;
      }

      const dataToSend = { ...formData, url: imageUrl };

      if (editingImage) {
        await updateImage({ id: editingImage._id, image: dataToSend });
      } else {
        await createImage(dataToSend);
      }

      setShowForm(false);
      setEditingImage(null);
      resetForm();
      refetch();
    } catch (error) {
      console.error("Error saving image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = (image: Image) => {
    setEditingImage(image);
    setFormData({
      title: image.title,
      description: image.description || "",
      url: image.url,
      alt: image.alt,
      category: image.category,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        await deleteImage(id);
        refetch();
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      url: "",
      alt: "",
      category: "",
    });
    setSelectedFile(null);
    setPreview(null);
  };

  const cancelEdit = () => {
    setShowForm(false);
    setEditingImage(null);
    resetForm();
  };

  // Handle file selection and preview generation
  const handleFileSelect = (file: File | null) => {
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/svg+xml",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert(
          "Invalid file type. Please select a JPG, PNG, WEBP, or SVG image."
        );
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Images Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Add Image
        </button>
      </div>

      {/* Form Modal */}
      <PopupModal
        isOpen={showForm}
        onClose={cancelEdit}
        title={editingImage ? "Edit Image" : "Add New Image"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., portfolio, testimonials"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed p-6 text-center rounded-md transition-colors ${
                dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
            >
              {preview ? (
                <div className="space-y-2">
                  <img
                    src={preview}
                    alt="preview"
                    className="max-w-full h-32 w-40 object-cover object-top mx-auto rounded"
                  />
                  <p className="text-sm text-gray-600">
                    Image selected. Fill other fields and click{" "}
                    {editingImage ? "Update" : "Create"} to upload.
                  </p>
                </div>
              ) : editingImage ? (
                <div className="space-y-2">
                  <Image
                    src={editingImage.url}
                    alt="current"
                    width={100}
                    height={32}
                    className="max-w-full h-32 w-40 object-cover mx-auto rounded"
                  />
                  <p className="text-sm text-gray-600">
                    Current image. Select a new file to replace it.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-gray-500">
                    Drag and drop an image here or click to select
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileSelect(e.target.files?.[0] || null)
                    }
                    className="hidden"
                    id="file-input"
                  />
                  <label
                    htmlFor="file-input"
                    className="cursor-pointer text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Select File
                  </label>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alt Text
            </label>
            <input
              type="text"
              required
              value={formData.alt}
              onChange={(e) =>
                setFormData({ ...formData, alt: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description (optional)
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              {isUploading
                ? "Uploading..."
                : editingImage
                ? "Update"
                : "Create"}
            </button>
          </div>
        </form>
      </PopupModal>

      <Table
        columns={[
          {
            header: "Image",
            accessor: (item) => (
              <Image
                src={item.url}
                alt={item.alt}
                width={100}
                height={100}
                className="object-cover"
              />
            ),
          },
          { header: "Title", accessor: "title" },
          { header: "Category", accessor: "category" },
          {
            header: "URL",
            accessor: (item) => (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  value={item.url}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(item.url)}
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-sm"
                >
                  Copy
                </button>
              </div>
            ),
          },
          {
            header: "Actions",
            accessor: (item) => (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            ),
          },
        ]}
        data={images}
        totalCount={imagesData?.total || 0}
        isLoading={isLoading}
        onPageChange={setPage}
        onLimitChange={setLimit}
        onSearch={setSearchTerm}
      />
    </div>
  );
}
