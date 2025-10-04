import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { getProductCatalog } from "@/utils/api";
import { Keywords, ProductCatalog } from '@/utils/app.model';
import Image from 'next/image';
import { useRouter } from "next/router";
import React, { useState } from "react";
import Loader from "../components/Loader";

interface CatalogPageProps {
    initialData: {
        keywords: Keywords;
        catalogs: ProductCatalog[];
    };
}


export default function CatalogPage({ initialData }: CatalogPageProps) {
    const router = useRouter();
    const [catalogs, setCatalogs] = useState<ProductCatalog[]>(initialData.catalogs);
    const [search, setSearch] = useState('');

    const handleSearch = (value: string) => {
        setSearch(value);
        if (value) {
            const filteredCatalogs = initialData.catalogs.filter((catalog) => catalog.name.toLowerCase().includes(value?.toLowerCase() || ''));
            setCatalogs(filteredCatalogs);
        } else {
            setCatalogs(initialData.catalogs);
        }
    }

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <SEO
                title={
                    initialData?.keywords.title || "Catalog"}
                description={initialData?.keywords.description || "Catalog Page"}
                keywords={initialData?.keywords.keywords?.split(",") || []}
                image={initialData?.keywords.imagePath}
            />
            <PageHeader
                title={"Catalog"}
                description={"Discover our collection of designs"}
                breadcrumbs={[
                    { label: 'Catalog', href: '/catalog' },
                ]}
            />
            <main>
                {
                    (!initialData.catalogs || initialData.catalogs.length === 0) ? (
                        <section className="section-base">
                            <div className="container">
                                <div className="error-container">
                                    <h1>No Catalogs Found</h1>
                                    <p>There are no catalogs available.</p>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className="section-base">
                            <div className="container">
                                <form className="form-box">
                                    <div className="input-text-btn">
                                        <input className="input-text2" type="text" value={search} onChange={(e) => handleSearch(e.target.value)} placeholder="Search ..." />
                                    </div>
                                </form>
                                <hr className="space-sm" />
                                {
                                    (!catalogs || catalogs.length === 0) ? (
                                        <div className="error-container">
                                            <h1>No Catalogs Found</h1>
                                            <p>There are no catalogs available.</p>
                                        </div>
                                    ) : (
                                        <div className="catalog-grid">
                                            {catalogs.map((catalog) => (
                                                <a
                                                    key={catalog.id}
                                                    href={catalog.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="catalog-card"
                                                >
                                                    <div className="catalog-card-image">
                                                        <Image
                                                            src={catalog.thumbImage}
                                                            alt={catalog.name}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            className="catalog-image"
                                                        />
                                                        <div className="catalog-overlay">
                                                            <div className="catalog-pdf-icon">
                                                                <i className="fas fa-file-pdf"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catalog-card-content">
                                                        <h3 className="catalog-title">{catalog.name}</h3>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>)
                                }

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
        const response = await getProductCatalog();

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                initialData: {
                    catalogs: response.data.catalogs || [],
                    keywords: response.data.keywords || {},
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