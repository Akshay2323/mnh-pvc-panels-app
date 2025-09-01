import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AboutUsContentResp,
  BlogDetailsResp,
  BlogResp,
  CommonContentResp,
  ContactContentResp,
  HomeScreenContentResp,
  PaginationParam,
  UserContactParam,
  UserContactResp,
  ManufacturerContentResp,
  PvcWallContentResp,
} from '../../utils/app.model';

// Create our API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      headers.set('Cache-Control', 'no-cache');
      return headers;
    },
  }),
  tagTypes: ['hHomeScreenContent', 'AboutUsContent', 'ContactContent', 'CommonContent', 'ManufacturerContent', 'PvcWallContent'],
  endpoints: (builder) => ({
    // Home Screen Content
    homeScreenContent: builder.query<HomeScreenContentResp, void>({
      query: () => 'webSettings/homeScreenContent',
      providesTags: ['hHomeScreenContent'],
    }),

    // About Us Content
    aboutUsContent: builder.query<AboutUsContentResp, void>({
      query: () => 'webSettings/aboutUsContent',
      providesTags: ['AboutUsContent'],
    }),

    // Manufacturer Content
    manufacturerContent: builder.query<ManufacturerContentResp, void>({
      query: () => 'webSettings/manufacturerContent',
      providesTags: ['ManufacturerContent'],
    }),
    // PVC Wall Content
    pvcWallContent: builder.query<PvcWallContentResp, void>({
      query: () => 'webSettings/pvcWallContent',
      providesTags: ['PvcWallContent'],
    }),
    // Contact Content
    contactContent: builder.query<ContactContentResp, void>({
      query: () => 'webSettings/contactContent',
      providesTags: ['ContactContent'],
    }),

    // Footer/Header Content
    commonContent: builder.query<CommonContentResp, void>({
      query: () => 'webSettings/commonContent',
      providesTags: ['CommonContent'],
    }),

    // Send Contact Data
    sendContact: builder.mutation<UserContactResp, UserContactParam>({
      query: (contactData) => ({
        url: 'userContact',
        method: 'POST',
        body: contactData,
      }),
    }),
    getActiveBlogDetails: builder.query<BlogResp, PaginationParam>({
      query: (blogData) => ({
        url: 'blogs/activeBlogDetails',
        method: 'GET',
        params: blogData,
      }),
    }),
    getBlogDetailsById: builder.query<BlogDetailsResp, string>({
      query: (id) => ({
        url: 'blogs/' + id,
        method: 'GET',
      }),
    }),
  }),
});

// Export the auto-generated hooks for each endpoint
export const {
  useHomeScreenContentQuery,
  useAboutUsContentQuery,
  useManufacturerContentQuery,
  usePvcWallContentQuery,
  useContactContentQuery,
  useCommonContentQuery,
  useSendContactMutation,
  useGetActiveBlogDetailsQuery,
  useGetBlogDetailsByIdQuery
} = apiSlice;
