import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';
import { getProductSubCatagoryByCategory, productCategory } from "@/utils/api";
import { Keywords, ProductCategory, ProductSubCatagory } from '@/utils/app.model';
import { GetStaticPaths } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import Loader from "../../components/Loader";

interface SubCategoryPageProps {
    initialData: {
        subCatagories: ProductSubCatagory[];
        keywords: Keywords;
        category: ProductCategory;
    };
}

export default function SubCategoryPage({ initialData }: SubCategoryPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <SEO
                title={
                    initialData?.category?.name || initialData?.keywords?.title || "Products"}
                description={initialData?.category?.description || initialData?.keywords?.description || "Products Page"}
                keywords={initialData?.keywords?.keywords?.split(",") || []}
                image={initialData?.category?.imagePath || initialData?.keywords?.imagePath}
            />
            <PageHeader
                title={initialData?.category?.name || ''}
                description={`High-quality ${initialData?.category?.name} for your home and office.`}
                breadcrumbs={[
                    { label: initialData?.category?.name || 'Product', href: '' }
                ]}
            />
            <main>
                {
                    (!initialData?.subCatagories || initialData?.subCatagories.length === 0) ? (
                        <section className="section-base mt50">
                            <div className="container">
                                <div className="error-container">
                                    <h1>No Products Found</h1>
                                    <p>There are no products available in this category.</p>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <Fragment>
                            <section className="section-base mt50">
                                <div className="container">
                                    <div className="album" data-album-anima="fade-bottom" data-columns-md="2" data-columns-sm="1">
                                        <div className="album-list">
                                            {initialData?.subCatagories.map((subCatagory) => (
                                                <div key={subCatagory.id} className="album-box">
                                                    <Link
                                                        href={`/products/${subCatagory.id}`}
                                                        rel="noopener noreferrer"
                                                        className="img-box img-scale"
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <Image src={subCatagory.imagePath} alt={subCatagory.name} layout="fill"
                                                            objectFit="contain" />
                                                        <div className="caption">
                                                            <h3>{subCatagory.name}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section-base section-color">
                                <div className="container">
                                    <div dangerouslySetInnerHTML={{ __html: initialData?.category?.description || '' }}></div>
                                </div>
                            </section>
                        </Fragment>
                    )}
            </main>
        </React.Fragment>
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
        const response = await getProductSubCatagoryByCategory(params.slug);

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                initialData: {
                    subCatagories: response.data.subCatagories || [],
                    keywords: response.data.keywords || {},
                    category: response.data.category || {},
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