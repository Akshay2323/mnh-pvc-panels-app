/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import {
    AboutUsContent,
    AboutUsContentResp,
    BlogData,
    BlogDetails,
    BlogDetailsResp,
    BlogResp,
    CategoryResp,
    ContactContent,
    ContactContentResp,
    FaqContent,
    FaqResp,
    HomeScreenContent,
    HomeScreenContentResp,
    ManufacturerContentData,
    ManufacturerContentResp,
    ProductCatalogData,
    ProductCatalogResp,
    ProductData,
    ProductGalleryData,
    ProductGalleryResp,
    ProductResp,
    PvcWallContentData,
    PvcWallContentResp,
    UserContactParam,
    UserContactResp,
    UserQuoteParam,
    UserQuoteResp
} from './app.model';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance with default configuration
const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add timestamp to prevent caching during development
        if (process.env.NODE_ENV === 'development') {
            config.params = {
                ...config.params,
                _t: Date.now(),
            };
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);


export const getHomeDetails = async (): Promise<HomeScreenContentResp> => {
    try {
        const response = await api.get<HomeScreenContentResp>('/webSettings/homeScreenContent');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch home screen content',
            data: new HomeScreenContent(),
        };
    }
};

export const getAboutUsDetails = async (): Promise<AboutUsContentResp> => {
    try {
        const response = await api.get<AboutUsContentResp>('/webSettings/aboutUsContent');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch about us content',
            data: new AboutUsContent(),
        };
    }
};

export const getManufacturerDetails = async (): Promise<ManufacturerContentResp> => {
    try {
        const response = await api.get<ManufacturerContentResp>('/webSettings/manufacturerContent');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch manufacturer content',
            data: new ManufacturerContentData(),
        };
    }
};

export const getPvcWallDetails = async (): Promise<PvcWallContentResp> => {
    try {
        const response = await api.get<PvcWallContentResp>('/webSettings/pvcWallContent');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch pvc wall content',
            data: new PvcWallContentData(),
        };
    }
};

export const getContactDetails = async (): Promise<ContactContentResp> => {
    try {
        const response = await api.get<ContactContentResp>('/webSettings/contactContent');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch contact content',
            data: new ContactContent(),
        };
    }
};

export const sendContact = async (param: UserContactParam): Promise<UserContactResp> => {
    try {
        const response = await api.post<UserContactResp>('/userContact', param);
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to send contact',
        };
    }
};
export const sendQuote = async (param: UserQuoteParam): Promise<UserQuoteResp> => {
    try {
        const response = await api.post<UserQuoteResp>('/quoteContact', param);
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to send quote',
        };
    }
};

export const productCategory = async (): Promise<CategoryResp> => {
    try {
        const response = await api.get<CategoryResp>('/productCategory/active');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch product category',
            data: [],
        };
    }
};

export const getProductsByCategory = async (
    categoryId: string,
    page: number = 1,
    limit: number = 10,
    search?: string
): Promise<ProductResp> => {
    try {
        const response = await api.get<ProductResp>('/product/getProductsByCategory', {
            params: {
                page,
                limit,
                search,
                id: categoryId,
            },
        });
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch product content',
            data: new ProductData(),
        };
    }
};

export const getAllBlogDetails = async (
    page: number = 1,
    limit: number = 10,
    search?: string,
    categoryId?: string): Promise<BlogResp> => {
    try {
        const response = await api.get<BlogResp>('/blogs/activeBlogDetails', {
            params: {
                page,
                limit,
                search,
                categoryId,
            },
        });
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch blog content',
            data: new BlogData(),
        };
    }
};
export const getProductGallery = async (
    page: number = 1,
    limit: number = 10,
    search?: string,
    category?: string): Promise<ProductGalleryResp> => {
    try {
        const response = await api.get<ProductGalleryResp>('/productGallery/activeGalleryProducts', {
            params: {
                page,
                limit,
                search,
                category,
            },
        });
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch product gallery content',
            data: new ProductGalleryData(),
        };
    }
};


export const getBlogDetailsById = async (blogId: string): Promise<BlogDetailsResp> => {
    try {
        const response = await api.get<BlogDetailsResp>('/blogs/' + blogId);
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch blog content',
            data: new BlogDetails(),
        };
    }
};

export const getFaq = async (): Promise<FaqResp> => {
    try {
        const response = await api.get<FaqResp>('/faq/active');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch manufacturer content',
            data: new FaqContent(),
        };
    }
};

export const getProductCatalog = async (): Promise<ProductCatalogResp> => {
    try {
        // const response = await api.get<ProductCatalogResp>('/productCatalog/activeProductCatalogs');
        const response = await api.get<ProductCatalogResp>('/product/getAllProducts');
        return response.data;
    } catch (error: any) {
        return {
            status: false,
            message: error?.message || 'Failed to fetch product catalog content',
            data: new ProductCatalogData(),
        };
    }
};