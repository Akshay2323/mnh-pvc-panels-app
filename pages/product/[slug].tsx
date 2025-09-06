import React, { useState } from 'react';
import { useRouter } from "next/router";
import { getProductsByCategory, productCategory } from "@/utils/api";
import { GetStaticPaths } from "next";
import Loader from "../components/Loader";
import Pagination from "@/components/Pagination";
import { Product } from '@/utils/app.model';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
    initialData: {
        products: Product[];
        totalRecords: number;
        totalPages: number;
        currentPage: number;
    };
    slug: string;
}

export default function ProductPage({ initialData, slug }: ProductPageProps) {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>(initialData.products);
    const [pagination, setPagination] = useState({
        currentPage: initialData.currentPage,
        totalPages: initialData.totalPages,
        totalRecords: initialData.totalRecords,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handlePageChange = async (page: number) => {
        if (page < 1 || page > pagination.totalPages || page === pagination.currentPage) return;

        setIsLoading(true);
        try {
            const response = await getProductsByCategory(slug, page, 20, '');
            if (response.status && response.data) {
                setProducts(prevProducts => [...prevProducts, ...(response.data?.products || [])]);
                setPagination({
                    currentPage: page,
                    totalPages: response.data.totalPages || 1,
                    totalRecords: response.data.totalRecord || 0,
                });
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (router.isFallback) {
        return <Loader />;
    }

    if (!products || products.length === 0) {
        return (
            <main>
                <section className="section-base mt50">
                    <div className="container">
                        <div className="title align-center align-left-md">
                            <h2>{products?.[0]?.productCategory?.name}</h2>
                        </div>
                        <div className="error-container">
                            <h1>No Products Found</h1>
                            <p>There are no products available in this category.</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="section-base mt50">
                <div className="container">
                    <div className="title align-center align-left-md">
                        <h2>{products?.[0]?.productCategory?.name}</h2>
                    </div>
                    <div className="album" data-album-anima="fade-bottom" data-columns-md="2" data-columns-sm="1">
                        <div className="album-list">
                            {products.map((product) => (
                                <div key={product.id} className="album-box">
                                    <Link href={product.pdfUrl} target="_blank" className="img-box img-scale">
                                        <Image src={product.thumbImage} alt={product.name} layout="fill"
                                            objectFit="contain" />
                                    </Link>
                                    <div className="caption">
                                        <h3>{product.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: products?.[0]?.productCategory?.description || '' }}></div>
                    <Pagination
                        currentPage={pagination.currentPage}
                        totalPages={pagination.totalPages}
                        onPageChange={handlePageChange}
                        isLoading={isLoading}
                        className="mt-5"
                    />
                </div>
            </section>
        </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await productCategory();
        const categories = response.status ? response.data || [] : [];

        const paths = categories.map((category) => ({
            params: { slug: category.id },
        }));

        return {
            paths,
            fallback: true,
        };
    } catch (error) {
        console.error('Error fetching product category paths:', error);
        return {
            paths: [],
            fallback: true,
        };
    }
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    try {
        const page = 1;
        const limit = 20;
        const response = await getProductsByCategory(params.slug, page, limit, '');

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                initialData: {
                    products: response.data.products || [],
                    totalRecords: response.data.totalRecord || 0,
                    totalPages: response.data.totalPages || 1,
                    currentPage: page,
                },
                slug: params.slug,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            notFound: true,
        };
    }
};