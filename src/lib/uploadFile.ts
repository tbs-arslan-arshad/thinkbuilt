import axios from "axios";

/**
 * Interface for upload file parameters
 */
interface UploadFileParams {
  url: string;
  file: File;
  fileType: string;
}

/**
 * Upload file using axios to the provided signed URL
 * @param params - Upload parameters
 * @returns Promise resolving to the response data
 */
export const uploadFileUsingAxios = async ({
  url,
  file,
  fileType,
}: UploadFileParams): Promise<unknown> => {
  try {
    const response = await axios.put(url, file, {
      headers: {
        "Content-Type": fileType,
        "x-amz-acl": "public-read",
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};