/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Checks if a value is empty
 * @param obj - The value to check
 * @returns boolean - True if the value is empty, false otherwise
 */
export function isEmpty(obj: any): boolean {
    if (typeof obj === 'undefined' || obj === null || obj === false) {
        return true;
    }
    if (typeof obj === 'number') {
        return false;
    }
    if (typeof obj === 'string' || Array.isArray(obj)) {
        return obj.length === 0;
    }
    if (typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }
    return false;
}

export function extractYouTubeId(url: string): string | null {
  if (!url) return null;

  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|shorts\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}