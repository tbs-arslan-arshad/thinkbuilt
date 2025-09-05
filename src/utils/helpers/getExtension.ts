/**
 * Get file extension from MIME type
 * @param mimeType - The MIME type of the file
 * @returns The file extension corresponding to the MIME type
 */
export const getExtension = (mimeType: string): string => {
  const mimeToExt: { [key: string]: string } = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
  };
  return mimeToExt[mimeType] || 'jpg';
};