/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEO_PAGE } from "./app.constants";

export class Bank {
    id?: string = "";
    name?: string = "";
    holderName?: string = "";
    accountNo?: string = "";
    ifscCode?: string = "";
    accountType?: string = "";
    swiftCode: string = "";
    address: string = "";
    upiUrl: string = "";
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}

export class BankResp {
    status: boolean = false;
    data: Bank[] = [];
    message: string = ''
}

export class Slider {
    id?: string = "";
    title?: string = "";
    description?: string = "";
    imagePath: string = "";
    orderNo: number = 0;
    createdAt: any;
    updatedAt: any;
}

export class SlideDetailResp {
    status: boolean = false;
    data: Slider[] = [];
    message: string = ''
}

export class Video {
    id: string = "";
    title?: string = "";
    description?: string = "";
    videoUrl: string = "";
    videoPath: string = "";
    isLocalVideo: boolean = false;
    localVideoUrl: string = "";
    orderNo: number = 0;
    createdAt: any;
    updatedAt: any;
    videoId?: string = "";
    thumbnail?: string = "";
}

export class VideoDetailData {
    totalPages: number = 0;
    totalRecord: number = 0;
    videos: Video[] = [];
}


export class AboutUs {
    id?: string = "";
    content?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    sortContent?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}

export class AboutUsResp {
    status: boolean = false;
    data: AboutUs = new AboutUs();
    message: string = ''
}

export class Contact {
    id?: string = "";
    address: string = "";
    phoneNo: string = "";
    email: string = "";
    operationHours: string = "";
    createdAt: any;
    updatedAt: any;
}

export class ContactResp {
    status: boolean = false;
    data: Contact = new Contact();
    message: string = ''
}

export class Banner {
    id?: string = "";
    aboutUsBanner: string = "";
    donateBanner: string = "";
    videoBanner: string = "";
    contactBanner: string = "";
    createdAt: any;
    updatedAt: any;
}

export class BannerResp {
    status: boolean = false;
    data: Banner = new Banner();
    message: string = ''
}

export class HomeScreenContentResp {
    status: boolean = false;
    data: HomeScreenContent = new HomeScreenContent();
    message: string = ''
}

export class HomeScreenContent {
    sliders: Slider[] = [];
    videos: Video[] = [];
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    menu: Menu[] = [];
    socialLinks: SocialLink[] = [];
}

export class AboutUsContentResp {
    status: boolean = false;
    data: AboutUsContent = new AboutUsContent();
    message: string = ''
}

export class AboutUsContent {
    aboutUsBanner: string = "";
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    menus: Menu[] = [];
    socialLinks: SocialLink[] = [];
}

export class DonationContentResp {
    status: boolean = false;
    data: DonationContent = new DonationContent();
    message: string = ''
}

export class DonationContent {
    donateBanner: string = "";
    banks: Bank[] = [];
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    menus: Menu[] = [];
    socialLinks: SocialLink[] = [];
}

export class GalleryContentResp {
    status: boolean = false;
    data: GalleryContent = new GalleryContent();
    message: string = ''
}

export class GalleryContent {
    videoBanner: string = "";
    videos: Video[] = [];
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    menus: Menu[] = [];
    socialLinks: SocialLink[] = [];
    totalRecord: number = 0;
    totalPages: number = 0;
}

export class ContactContentResp {
    status: boolean = false;
    data: ContactContent = new ContactContent();
    message: string = ''
}

export class ContactContent {
    contactBanner: string = "";
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    menus: Menu[] = [];
    socialLinks: SocialLink[] = [];
}

export class Keywords {
    id?: string = "";
    pageName?: SEO_PAGE = SEO_PAGE.home;
    title?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    description?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    keywords?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}


export class Menu {
    id?: string = "";
    name: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    key: string = "";
    order: number = 0;
    createdAt: any;
    updatedAt: any;
}

export class SocialLink {
    id?: string = "";
    key: string = "";
    link: string = "";
    isEnable: boolean = false;
    createdAt: any;
    updatedAt: any;
}

export class CommonContentResp {
    status: boolean = false;
    data: CommonContent = new CommonContent();
    message: string = ''
}

export class CommonContent {
    menu: Menu[] = [];
    socialLinks: SocialLink[] = [];
}

export class UserContactParam {
    name: string = "";
    phoneNo: string = "";
    email: string = "";
    message: string = "";
}

export class UserContactResp {
    status: boolean = false;
    message: string = ''
}

export class PaginationParam {
    page: number = 1;
    limit: number = 10;
    search: string = "";
}

export class BlogResp {
    status: boolean = false;
    data: BlogData = new BlogData();
    message: string = ''
}


export class BlogDetailsResp {
    status: boolean = false;
    data: {
        blogDetail: Blog;
        footer: Footer;
    } = {
            blogDetail: new Blog(),
            footer: new Footer()
        };
    message: string = ''
}
export class BlogData {
    blogs: Blog[] = [];
    blogBanner: string = "";
    footer: Footer = new Footer();
    totalRecord: number = 0;
    totalPages: number = 0;
}

export class Footer {
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
}
export class Blog {
    id: string = "";
    videoId?: string = "";
    thumbnail?: string = "";
    title?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    sortDescription?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    description?: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    type: BLOG_MEDIA_TYPE = BLOG_MEDIA_TYPE.IMAGE;
    media: string = "";
    createdAt: any;
    updatedAt: any;
}


export enum BLOG_MEDIA_TYPE {
    IMAGE = "image",
    VIDEO = "video",
}


export class AboutGalleryResp {
    status: boolean = false;
    data: AboutGalleryData = new AboutGalleryData();
    message: string = ''
}
export class AboutGalleryData {
    aboutGalleries: AboutGallery[] = [];
    totalRecord: number = 0;
    totalPages: number = 0;
}

export class AboutGallery {
    id?: string = "";
    title: {
        en: string;
        hi: string;
        gu: string;
    } = {
            en: "",
            hi: "",
            gu: ""
        };
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}