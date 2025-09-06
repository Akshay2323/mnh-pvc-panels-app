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

export const extractYouTubeId = (url: string): string => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
}