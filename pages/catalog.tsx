import Pagination from "@/components/Pagination";
import { getProductGallery } from "@/utils/api";
import { Keywords, ProductGallery } from '@/utils/app.model';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';
import Loader from "../components/Loader";
import SEO from "@/components/SEO";
import React from "react";
import PageHeader from "@/components/PageHeader";

const maxLimit = 20;
interface ProductPageProps {
    initialData: {
        keywords: Keywords;
        products: ProductGallery[];
        totalRecords: number;
        totalPages: number;
        currentPage: number;
    };
}

export default function CatalogPage({ initialData }: ProductPageProps) {
    const router = useRouter();
    const [products, setProducts] = useState<ProductGallery[]>(initialData.products);
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
            const response = await getProductGallery(page, maxLimit, '');
            if (response.status && response.data) {
                setProducts(response.data?.products || []);
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
                        {/* <div className="title align-center align-left-md">
                            <h2>Gallery</h2>
                        </div> */}
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
        <React.Fragment>
            <SEO
                title={
                    initialData?.keywords.title || "Gallery"}
                description={initialData?.keywords.description || "Gallery Page"}
                keywords={initialData?.keywords.keywords?.split(",") || []}
                image={initialData?.keywords.imagePath}
            />
            <PageHeader
                title={"Gallery"}
                description={"Discover our collection of designs"}
                breadcrumbs={[
                    { label: 'Gallery', href: '/gallery' },
                ]}
            />
            <main>
                {
                    (!products || products.length === 0) ? (
                        <section className="section-base">
                            <div className="container">
                                <div className="error-container">
                                    <h1>No Products Found</h1>
                                    <p>There are no products available in this category.</p>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className="section-base">
                            <div className="container">
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
                                <Pagination
                                    currentPage={pagination.currentPage}
                                    totalPages={pagination.totalPages}
                                    onPageChange={handlePageChange}
                                    isLoading={isLoading}
                                    className="mt-5"
                                />
                            </div>
                        </section>
                    )
                }
            </main>
        </React.Fragment>
    );
}

export const getStaticProps = async () => {
    try {
        const response = await getProductGallery(1, maxLimit, '');

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                initialData: {
                    products: response.data.products || [],
                    keywords: response.data.keywords || {},
                    totalRecords: response.data.totalRecord || 0,
                    totalPages: response.data.totalPages || 1,
                    currentPage: 1,
                },
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