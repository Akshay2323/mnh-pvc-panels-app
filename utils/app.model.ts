/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
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

export class Branch {
    id?: string = "";
    name?: string = "";
    city: string = "";
    address: string = "";
    orderNo: number = 0;
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}

export class BranchResp {
    status: boolean = false;
    data: Branch = new Branch();
    message: string = ''
}

export class Client {
    id?: string = "";
    orderNo: number = 0;
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}

export class ClientResp {
    status: boolean = false;
    data: Client = new Client();
    message: string = ''
}

export class Specification {
    id?: string = "";
    name?: string = "";
    description?: string = "";
    iconName?: string = "";
    orderNo: number | null = null;
    createdAt: any;
    updatedAt: any;
}

export class SpecificationResp {
    status: boolean = false;
    data: Specification = new Specification();
    message: string = ''
}

export class HomeScreenContentResp {
    status: boolean = false;
    data: HomeScreenContent = new HomeScreenContent();
    message: string = ''
}

export class HomeVideo {
    id?: string = "";
    videoUrl: string = "";
    thumbnail: string = "";
    streamVideoUrl: string = "";
}

export class HomeScreenContent {
    keywords: Keywords = new Keywords();
    categories: ProductCategory[] = [];
    branches: Branch[] = [];
    clients: Client[] = [];
    specifications: Specification[] = [];
    aboutUs: AboutUs = new AboutUs();
    faqs: Faq[] = [];
    members: Member[] = [];
    blogs: Blog[] = [];
    reviewsVideos: Video[] = [];
    homeVideo: HomeVideo = new HomeVideo();
    // manufacturerContent: ManufacturerContent = new ManufacturerContent();
    // pvcWallContent: PvcWallContent = new PvcWallContent();
}

export class ManufacturerContent {
    id?: string = "";
    content?: string = "";
    sortContent?: string = "";
    title?: string = "";
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}

export class PvcWallContent {
    id?: string = "";
    content?: string = "";
    sortContent?: string = "";
    title?: string = "";
    imagePath: string = "";
    createdAt: any;
    updatedAt: any;
}

export class AboutUsContentResp {
    status: boolean = false;
    data: AboutUsContent = new AboutUsContent();
    message: string = ''
}

export class AboutUsContent {
    aboutUs: AboutUs = new AboutUs();
    faqs: Faq[] = [];
    branches: Branch[] = [];
    members: Member[] = [];
    keywords: Keywords = new Keywords();
    reviewsVideos: Video[] = [];
}

export class ContactContentResp {
    status: boolean = false;
    data: ContactContent = new ContactContent();
    message: string = ''
}

export class ContactContent {
    contact: Contact = new Contact();
    keywords: Keywords = new Keywords();
    becomeDealerKeywords: Keywords = new Keywords();
    socialLinks: SocialLink[] = [];
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
    productCategory: ProductCategory = new ProductCategory();
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

export class BecomeDealerParam {
    name: string = "";
    companyName: string = "";
    gstNo: string = "";
    address: string = "";
    phoneNo: string = "";
    email: string = "";
    message: string = "";
}

export class UserContactResp {
    status: boolean = false;
    message: string = ''
}
export class UserQuoteParam {
    name: string = "";
    phoneNo: string = "";
    email: string = "";
    category: string = "";
    subCategory: string = "";
    state: string = "";
    message: string = "";
}

export class UserQuoteResp {
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
    data: BlogDetails = new BlogDetails();
    message: string = ''
}

export class BlogDetails {
    blogDetail: Blog = new Blog();
    keywords: Keywords = new Keywords();
}

export class BlogData {
    blogs: Blog[] = [];
    category: ProductCategory[] = [];
    keywords: Keywords = new Keywords();
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
    productCategory: ProductCategory = new ProductCategory();
    type: BLOG_MEDIA_TYPE = BLOG_MEDIA_TYPE.IMAGE;
    media: string = "";
    createdAt: any;
    updatedAt: any;
}

export enum BLOG_MEDIA_TYPE {
    IMAGE = "image",
    VIDEO = "video",
}
export class ManufacturerContentResp {
    status: boolean = false;
    data: ManufacturerContentData = new ManufacturerContentData();
    message: string = ''
}
export class ManufacturerContentData {
    manufacturerContent: ManufacturerContent = new ManufacturerContent();
    keywords: Keywords = new Keywords();
}
export class PvcWallContentResp {
    status: boolean = false;
    data: PvcWallContentData = new PvcWallContentData();
    message: string = ''
}
export class PvcWallContentData {
    pvcWallContent: PvcWallContent = new PvcWallContent();
    keywords: Keywords = new Keywords();
}
export class CategoryResp {
    status: boolean = false;
    data: CategoryData[] = [];
    message: string = ''
}
export class CategoryData {
    id: string = "";
    name: string = "";
    description: string = "";
    imagePath: string = "";
    orderNo: number = 0;
    subCategories?: ProductSubCatagory[] = [];
}

export enum PRODUCT_MEDIA_TYPE {
    IMAGE = "image",
    PDF = "pdf",
}

export class ProductMedia {
    type: PRODUCT_MEDIA_TYPE = PRODUCT_MEDIA_TYPE.IMAGE;
    mediaUrl: string = "";
    shortMediaUrl: ReactNode;
}

export class ProductSpecification {
    title: string = "";
    value: string = "";
}

export class Product {
    id: string = "";
    name: string = "";
    description: string = "";
    thumbImage: string = "";
    pdfUrl: string = "";
    productCategory: ProductCategory = new ProductCategory();
    productSubCategory: ProductSubCatagory = new ProductSubCatagory();
    medias: ProductMedia[] = [];
    specifications: ProductSpecification[] = [];
    orderNo: number = 0;
}
export class ProductData {
    products: Product[] = [];
    keywords: Keywords = new Keywords();
    category: ProductCategory = new ProductCategory();
    totalRecord: number = 0;
    totalPages: number = 0;
}

export class ProductResp {
    status: boolean = false;
    data: ProductData = new ProductData();
    message: string = ''
}

export class ProductGallery {
    id: string = "";
    name: string = "";
    description: string = "";
    thumbImage: string = "";
    pdfUrl: string = "";
    orderNo: number = 0;
}
export class ProductGalleryData {
    products: ProductGallery[] = [];
    keywords: Keywords = new Keywords();
    totalRecord: number = 0;
    totalPages: number = 0;
}

export class ProductGalleryResp {
    status: boolean = false;
    data: ProductGalleryData = new ProductGalleryData();
    message: string = ''
}

export class Faq {
    id?: string = "";
    title?: string = "";
    description?: string = "";
    orderNo?: number | null = null;
    createdAt: any;
    updatedAt: any;
}

export class Member {
    id?: string = "";
    name?: string = "";
    imagePath?: string = "";
    description?: string = "";
    orderNo?: number | null = null;
    createdAt: any;
    updatedAt: any;
}

export class FaqResp {
    status: boolean = false;
    data: FaqContent = new FaqContent();
    message: string = ''
}

export class FaqContent {
    faq: Faq[] = [];
    keywords: Keywords = new Keywords();
}

export class ProductCatalog {
    id: string = "";
    name: string = "";
    description: string = "";
    thumbImage: string = "";
    pdfUrl: string = "";
    orderNo: number = 0;
}
export class ProductCatalogData {
    catalogs: ProductCatalog[] = [];
    keywords: Keywords = new Keywords();
}

export class ProductCatalogResp {
    status: boolean = false;
    data: ProductCatalogData = new ProductCatalogData();
    message: string = ''
}
export class ProductSubCatagoryResp {
    status: boolean = false;
    data: ProductSubCatagoryData = new ProductSubCatagoryData();
    message: string = ''
}

export class ProductSubCatagoryData {
    subCatagories: ProductSubCatagory[] = [];
    keywords: Keywords = new Keywords();
    category: ProductCategory = new ProductCategory();
}

export class ProductSubCatagory {
    id: string = "";
    name: string = "";
    description: string = "";
    imagePath: string = "";
    orderNo: number = 0;
    productCategory: ProductCategory = new ProductCategory();
}

export class SubCategoryResp {
    status: boolean = false;
    data: ProductSubCatagory[] = [];
    message: string = ''
}


export class ProductDetailResp {
    status: boolean = false;
    data: ProductDetailData = new ProductDetailData();
    message: string = ''
}

export class ProductDetailData {
    productDetail: Product = new Product();
    keywords: Keywords = new Keywords();
    categoryProducts: Product[] = [];
    specifications: Specification[] = [];
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