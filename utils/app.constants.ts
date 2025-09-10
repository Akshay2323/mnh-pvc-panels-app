/* eslint-disable @typescript-eslint/no-explicit-any */
export const LOCAL_IMAGES = {
    defaultImage: "/images/placeholder.jpg"
}

export enum SEO_PAGE {
    home = "home",
    aboutUs = "aboutUs",
    manufacturer = "manufacturer",
    product = "product",
    blog = "blog",
    gallery = "gallery",
    contact = "contact",
}

export const SOCIAL_ICONS: Record<string, string> = {
    facebook: 'icon-facebook',
    twitter: 'icon-twitter',
    instagram: 'icon-instagram',
    youtube: 'icon-youtube',
    linkedin: 'icon-linkedin',
    google: 'icon-google',
}


export const FormatDate = (dateString: string): string => {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (_e: unknown) {
        return '';
    }
};