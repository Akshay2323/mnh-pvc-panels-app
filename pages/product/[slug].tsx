import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';
import { getProductCatalog, getProductDetailsById } from "@/utils/api";
import { Keywords, Product, PRODUCT_MEDIA_TYPE } from '@/utils/app.model';
import { GetStaticPaths } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import Loader from "../../components/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs, Zoom } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

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
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const mainSwiperRef = useRef<SwiperType | null>(null);

    // Combine thumb image with media images, separate images and PDFs
    // Ensure thumbImage is first and avoid duplicates
    const mediaImages = (product.medias || []).filter(media =>
        media.mediaUrl && media.type === PRODUCT_MEDIA_TYPE.IMAGE
    );

    const allImages = [
        { type: PRODUCT_MEDIA_TYPE.IMAGE, mediaUrl: product.thumbImage },
        ...mediaImages.filter(media => media.mediaUrl !== product.thumbImage)
    ].filter(media => media.mediaUrl);

    const pdfFiles = (product.medias || []).filter(media =>
        media.mediaUrl && media.type === PRODUCT_MEDIA_TYPE.PDF
    );


    // Handle image zoom
    const handleImageZoom = (imageUrl: string, imageIndex?: number) => {
        // Find the index of the clicked image if not provided
        const actualIndex = imageIndex !== undefined ? imageIndex :
            allImages.findIndex(img => img.mediaUrl === imageUrl);

        // Set the correct index and image
        setSelectedImageIndex(actualIndex >= 0 ? actualIndex : 0);
        setZoomedImage(imageUrl);
        setIsZoomed(true);
    };

    const closeZoom = () => {
        setIsZoomed(false);
        setZoomedImage(null);
    };

    // Handle PDF download
    const handlePdfDownload = (pdfUrl: string, fileName?: string) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName || 'product-catalog.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Handle PDF view in new tab
    const handlePdfView = (pdfUrl: string) => {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    // Handle zoom navigation
    const handleZoomNavigation = useCallback((direction: 'prev' | 'next') => {
        if (allImages.length <= 1) return;

        let newIndex: number;
        if (direction === 'prev') {
            newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : allImages.length - 1;
        } else {
            newIndex = selectedImageIndex < allImages.length - 1 ? selectedImageIndex + 1 : 0;
        }

        const newImage = allImages[newIndex];
        if (newImage && newImage.mediaUrl) {
            // Update state immediately
            setSelectedImageIndex(newIndex);
            setZoomedImage(newImage.mediaUrl);

            // Sync with main swiper after a small delay to ensure state is updated
            setTimeout(() => {
                if (mainSwiperRef.current) {
                    mainSwiperRef.current.slideTo(newIndex);
                }
            }, 50);
        }
    }, [allImages, selectedImageIndex]);


    // Handle keyboard events for zoom modal
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (isZoomed) {
                switch (e.key) {
                    case 'Escape':
                        closeZoom();
                        break;
                    case 'ArrowLeft':
                        handleZoomNavigation('prev');
                        break;
                    case 'ArrowRight':
                        handleZoomNavigation('next');
                        break;
                }
            }
        };

        if (isZoomed) {
            document.addEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isZoomed, handleZoomNavigation]);

    return (
        <React.Fragment>
            <div className="simple-product-details">
                <div className="container">
                    <div className="row">
                        {/* Left Side - Image Gallery */}
                        <div className="col-lg-6 col-md-12">
                            <div className="product-image-section">
                                {/* Main Swiper */}
                                {allImages.length > 0 ? (
                                    <div className="product-swiper-container">
                                        <Swiper
                                            onSwiper={(swiper) => {
                                                mainSwiperRef.current = swiper;
                                            }}
                                            modules={[Navigation, Pagination, Autoplay, Thumbs, Zoom]}
                                            navigation={{
                                                nextEl: '.swiper-button-next-custom',
                                                prevEl: '.swiper-button-prev-custom',
                                            }}
                                            pagination={{
                                                clickable: true,
                                                dynamicBullets: true,
                                            }}
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true,
                                            }}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            zoom={{
                                                maxRatio: 3,
                                                minRatio: 1,
                                            }}
                                            loop={allImages.length > 1}
                                            className="product-main-swiper"
                                            onSlideChange={(swiper) => setSelectedImageIndex(swiper.realIndex)}
                                        >
                                            {allImages.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="swiper-zoom-container">
                                                        <div
                                                            className="product-image-wrapper"
                                                            onClick={() => handleImageZoom(image.mediaUrl, index)}
                                                        >
                                                            <Image
                                                                src={image.mediaUrl}
                                                                alt={`${product.name} - ${index + 1}`}
                                                                fill
                                                                style={{ objectFit: 'contain' }}
                                                            />
                                                            <div className="zoom-hint">
                                                                <i className="fas fa-search-plus"></i>
                                                                <span>Click to zoom</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        {/* Custom Navigation Buttons */}
                                        {allImages.length > 1 && (
                                            <>
                                                <div className="swiper-button-prev-custom product-nav-btn">
                                                    <i className="fas fa-chevron-left"></i>
                                                </div>
                                                <div className="swiper-button-next-custom product-nav-btn">
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </>
                                        )}

                                        {/* Thumbnail Swiper */}
                                        {allImages.length > 1 && (
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                modules={[Thumbs]}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                className="product-thumbs-swiper"
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 5,
                                                    },
                                                    640: {
                                                        slidesPerView: 4,
                                                        spaceBetween: 10,
                                                    },
                                                    768: {
                                                        slidesPerView: 5,
                                                        spaceBetween: 10,
                                                    },
                                                }}
                                            >
                                                {allImages.map((image, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div className="product-thumb">
                                                            <Image
                                                                src={image.mediaUrl}
                                                                alt={`${product.name} thumbnail ${index + 1}`}
                                                                fill
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        )}
                                    </div>
                                ) : (
                                    <div className="product-image-placeholder">
                                        <i className="fas fa-image"></i>
                                        <span>No images available</span>
                                    </div>
                                )}

                                {/* PDF Resources Section */}
                                {pdfFiles.length > 0 && (
                                    <div className="product-pdf-section">
                                        <h4>PDF Resources</h4>
                                        <div className="pdf-downloads">
                                            {pdfFiles.map((pdf, index) => (
                                                <div key={index} className="pdf-item">
                                                    <div className="pdf-info">
                                                        <i className="fas fa-file-pdf pdf-icon"></i>
                                                        <span className="pdf-name">Product Catalog {index + 1}</span>
                                                    </div>
                                                    <button
                                                        className="pdf-action-btn pdf-view-btn"
                                                        onClick={() => handlePdfView(pdf.mediaUrl)}
                                                        title="View PDF in new tab"
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                        <span>View</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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

            {/* Image Zoom Modal */}
            {isZoomed && zoomedImage && (
                <div className="image-zoom-modal" onClick={closeZoom}>
                    <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="zoom-close-btn" onClick={closeZoom}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="zoomed-image-container">
                            <Image
                                src={zoomedImage}
                                alt={`${product.name} - Zoomed view`}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="zoom-controls">
                            <button
                                className="zoom-nav-btn"
                                onClick={() => handleZoomNavigation('prev')}
                                disabled={allImages.length <= 1}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <span className="zoom-counter">
                                {selectedImageIndex + 1} / {allImages.length}
                            </span>
                            <button
                                className="zoom-nav-btn"
                                onClick={() => handleZoomNavigation('next')}
                                disabled={allImages.length <= 1}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
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