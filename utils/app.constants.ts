/* eslint-disable @typescript-eslint/no-explicit-any */
export const LOCAL_IMAGES = {
  defaultImage: "/images/placeholder.jpg",
};

export enum SEO_PAGE {
  home = "home",
  aboutUs = "aboutUs",
  manufacturer = "manufacturer",
  product = "product",
  subCategory = "subCategory",
  blog = "blog",
  gallery = "gallery",
  productCatalog = "productCatalog",
  contact = "contact",
  becomeDealer = "becomeDealer",
}

export const SOCIAL_ICONS: Record<string, string> = {
  facebook: "icon-facebook",
  twitter: "icon-twitter",
  instagram: "icon-instagram",
  youtube: "icon-youtube",
  linkedin: "icon-linkedin",
  google: "icon-google",
};

export const FormatDate = (dateString: string): string => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (_e: unknown) {
    return "";
  }
};

export const OurStoryDetails = [
  {
    title: "Vision",
    description:
      "We at MNH Laminates aim to be counted as the company that makes homes beautiful. We endeavor to bring global competence and unique styles to your space.",
    imagePath: "/assets/vision.svg",
  },
  {
    title: "Mission",
    description:
      "We aspire to attain global competitiveness and excellence in our industry by harmonizing Western work practices with Indian moral values. Our mission is to infuse global competence and distinctive flair into your environments.",
    imagePath: "/assets/mission.svg",
  },
  {
    title: "Core Values",
    description:
      " MNH is dedicated to incorporate eco-friendly materials and sustainable practices wherever possible, contributing to a greener and more sustainable future. The goal is to provide products that are not only visually appealing but also environmentally responsible & safe.",
    imagePath: "/assets/values.png",
  },
];

export enum GALLERY_MEDIA_TYPE {
  IMAGE = "image",
  VIDEO = "video",
} 
