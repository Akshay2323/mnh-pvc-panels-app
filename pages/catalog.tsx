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

import ModalPdfViewer from "../components/ModalPdfViewer";
import Link from "next/link";

export default function CatalogPage({ initialData }: CatalogPageProps) {
    const router = useRouter();
    const [catalogs, setCatalogs] = useState<ProductCatalog[]>(initialData.catalogs);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPdfUrl, setModalPdfUrl] = useState<string | null>(null);
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
            {modalOpen && (
                <ModalPdfViewer
                    url={modalPdfUrl}
                    onClose={() => setModalOpen(false)}
                />
            )}

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
                                        <div className="album" data-album-anima="fade-bottom" data-columns-md="2" data-columns-sm="1">
                                            <div className="album-list">
                                                {catalogs.map((catalog) => (
                                                    <div key={catalog.id} className="album-box">
                                                        <Link
                                                            href={`/product/${catalog.id}`}
                                                            rel="noopener noreferrer"
                                                            className="img-box img-scale"
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <Image src={catalog.thumbImage} alt={catalog.name} layout="fill"
                                                                objectFit="contain" />
                                                            <div className="caption">
                                                                <h3>{catalog.name}</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
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