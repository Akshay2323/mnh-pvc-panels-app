import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';
import { getProductCatalog, getProductDetailsById } from "@/utils/api";
import { Keywords, Product, PRODUCT_MEDIA_TYPE } from '@/utils/app.model';
import { GetStaticPaths } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import React, { Fragment, useState } from 'react';
import Loader from "../../components/Loader";

interface ProductPageProps {
    initialData: {
        productDetail: Product;
        keywords: Keywords;
    };
}

interface ProductDetailsProps {
    product: Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    // Combine thumb image with media images, filter out invalid URLs
    const allImages = [
        { type: PRODUCT_MEDIA_TYPE.IMAGE, mediaUrl: product.thumbImage },
        ...(product.medias || []).filter(media =>
            media.type === PRODUCT_MEDIA_TYPE.IMAGE && media.mediaUrl
        )
    ].filter(image => image.mediaUrl);

    // Fallback image if no images are available
    const hasImages = allImages.length > 0;
    const currentImage = hasImages ? allImages[selectedImageIndex]?.mediaUrl : null;

    const handlePrevImage = () => {
        setSelectedImageIndex(prev => prev > 0 ? prev - 1 : allImages.length - 1);
    };

    const handleNextImage = () => {
        setSelectedImageIndex(prev => prev < allImages.length - 1 ? prev + 1 : 0);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageLoading(false);
        setImageError(true);
    };

    // Reset loading state when image changes
    const handleImageChange = (index: number) => {
        setImageLoading(true);
        setImageError(false);
        setSelectedImageIndex(index);
    };

    return (
        <div className="simple-product-details">
            <div className="container">
                <div className="row">
                    {/* Left Side - Image Gallery */}
                    <div className="col-lg-6 col-md-12">
                        <div className="product-image-section">
                            {/* Thumbnail Column */}
                            {allImages.length > 1 && (
                                <div className="product-thumbnails">
                                    {allImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`product-thumb ${index === selectedImageIndex ? 'active' : ''}`}
                                            onClick={() => handleImageChange(index)}
                                        >
                                            <Image
                                                src={image.mediaUrl}
                                                alt={`${product.name} - ${index + 1}`}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Main Image */}
                            <div className="product-main-image">
                                <div className={`product-image-wrapper ${imageLoading ? 'loading' : ''}`}>
                                    {hasImages && currentImage && !imageError ? (
                                        <Image
                                            src={currentImage}
                                            alt={product.name}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                        />
                                    ) : (
                                        <div className="product-image-placeholder">
                                            <i className="fas fa-image"></i>
                                            <span>{hasImages ? 'Image not available' : 'No images available'}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Image Navigation */}
                                {allImages.length > 1 && (
                                    <div className="product-image-nav">
                                        <button
                                            className="product-nav-btn prev"
                                            onClick={handlePrevImage}
                                            disabled={selectedImageIndex === 0}
                                        >
                                            <i className="fas fa-chevron-left"></i>
                                        </button>
                                        <button
                                            className="product-nav-btn next"
                                            onClick={handleNextImage}
                                            disabled={selectedImageIndex === allImages.length - 1}
                                        >
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="col-lg-6 col-md-12">
                        <div className="product-info-section">
                            {/* Product Title */}
                            <h1 className="product-name">{product.name}</h1>

                            {/* Product Description */}
                            <div className="product-description">
                                {product.description ? (
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                ) : (
                                    <p>No description available for this product.</p>
                                )}
                            </div>

                            {/* Product Specifications */}
                            {product.specifications && product.specifications.length > 0 && (
                                <div className="row product-specifications">
                                    {product.specifications.map((spec, index) => (
                                        <div key={index} className="col-6 detail-info">
                                            <div className="spec-label">{spec.title}:</div>
                                            <div className="spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProductPage({ initialData }: ProductPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <SEO
                title={
                    initialData?.productDetail?.name || initialData?.keywords?.title || "Products"}
                description={initialData?.productDetail?.description || initialData?.keywords?.description || "Products Page"}
                keywords={initialData?.keywords?.keywords?.split(",") || []}
                image={initialData?.productDetail?.thumbImage || initialData?.keywords?.imagePath}
            />
            <PageHeader
                title={initialData?.productDetail?.name || ''}
                description={`High-quality ${initialData?.productDetail?.name} for your home and office.`}
                breadcrumbs={[
                    { label: initialData?.productDetail?.productCategory?.name, href: '/subcategory/' + initialData?.productDetail?.productCategory?.id },
                    { label: initialData?.productDetail?.productSubCategory?.name, href: '/products/' + initialData?.productDetail?.productSubCategory?.id },
                    { label: initialData?.productDetail?.name || 'Product', href: '' }
                ]}
            />
            <main>
                {
                    (!initialData?.productDetail) ? (
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
                                <ProductDetails product={initialData?.productDetail} />
                            </section>
                        </Fragment>
                    )}
            </main>
        </React.Fragment>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await getProductCatalog();
        const products = response.status ? response.data?.catalogs || [] : [];

        const paths = products.map((product) => ({
            params: { slug: product.id },
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
        const response = await getProductDetailsById(params.slug);

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                initialData: {
                    productDetail: response.data.productDetail || {},
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