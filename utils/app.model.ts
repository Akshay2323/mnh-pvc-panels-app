/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEO_PAGE } from "./app.constants";

export class AboutUs {
    id?: string = "";
    content?: string = "";
    sortContent?: string = "";
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

export class HomeScreenContentResp {
    status: boolean = false;
    data: HomeScreenContent = new HomeScreenContent();
    message: string = ''
}

export class HomeScreenContent {
    // aboutUs: AboutUs = new AboutUs();
    // contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    // menu: Menu[] = [];
    // socialLinks: SocialLink[] = [];
}

export class AboutUsContentResp {
    status: boolean = false;
    data: AboutUsContent = new AboutUsContent();
    message: string = ''
}

export class AboutUsContent {
    aboutUs: AboutUs = new AboutUs();
    keywords: Keywords = new Keywords();
}

export class ContactContentResp {
    status: boolean = false;
    data: ContactContent = new ContactContent();
    message: string = ''
}

export class ContactContent {
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
}

export class Keywords {
    id?: string = "";
    pageName?: SEO_PAGE = SEO_PAGE.home;
    title?: string = "";
    description?: string = "";
    keywords?: string = "";
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}
export class ProductCategory {
    id?: string = "";
    name: string = "";
    description: string = "";
    imagePath: string = "";
    orderNo: number = 0;
    createdAt: any;
    updatedAt: any;
}

export class Menu {
    id?: string = "";
    name: string = "";
    key: string = "";
    order: number = 0;
    createdAt: any;
    updatedAt: any;
    subMenu: ProductCategory[] = [];
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
    aboutUs: AboutUs = new AboutUs();
    contact: Contact = new Contact();
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
    title?: string = "";
    sortDescription?: string = "";
    description?: string = "";
    type: BLOG_MEDIA_TYPE = BLOG_MEDIA_TYPE.IMAGE;
    media: string = "";
    createdAt: any;
    updatedAt: any;
}

export enum BLOG_MEDIA_TYPE {
    IMAGE = "image",
    VIDEO = "video",
}