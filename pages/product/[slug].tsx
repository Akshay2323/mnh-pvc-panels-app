import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';
import { getAllTopProductDetails, getProductCatalog, getProductDetailsById } from "@/utils/api";
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
    const [zoomLevel, setZoomLevel] = useState(1);
    const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [initialTouchDistance, setInitialTouchDistance] = useState(0);
    const [initialZoomLevel, setInitialZoomLevel] = useState(1);
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const zoomImageRef = useRef<HTMLDivElement>(null);

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

    const allPdfFiles = [
        { type: PRODUCT_MEDIA_TYPE.PDF, mediaUrl: product.pdfUrl },
        ...pdfFiles.filter(media => media.mediaUrl !== product.pdfUrl)
    ].filter(media => media.mediaUrl);


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
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
        setIsDragging(false);
        setInitialTouchDistance(0);
        setInitialZoomLevel(1);
    };

    // Zoom controls
    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => {
            const newLevel = Math.max(prev - 0.5, 1);
            if (newLevel === 1) {
                setPanPosition({ x: 0, y: 0 });
            }
            return newLevel;
        });
    };

    const resetZoom = () => {
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
    };

    // Mouse events for panning
    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - panPosition.x,
                y: e.clientY - panPosition.y
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            setPanPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Wheel zoom
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    // Touch event helpers
    const getTouchDistance = (touches: React.TouchList) => {
        if (touches.length < 2) return 0;
        const touch1 = touches[0];
        const touch2 = touches[1];
        return Math.sqrt(
            Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );
    };


    // Touch events for mobile/tablet
    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();

        if (e.touches.length === 1) {
            // Single touch - start panning
            if (zoomLevel > 1) {
                setIsDragging(true);
                const touch = e.touches[0];
                setDragStart({
                    x: touch.clientX - panPosition.x,
                    y: touch.clientY - panPosition.y
                });
            }
        } else if (e.touches.length === 2) {
            // Two finger pinch - start zooming
            const distance = getTouchDistance(e.touches);
            setInitialTouchDistance(distance);
            setInitialZoomLevel(zoomLevel);
            setIsDragging(false);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();

        if (e.touches.length === 1 && isDragging && zoomLevel > 1) {
            // Single touch panning
            const touch = e.touches[0];
            setPanPosition({
                x: touch.clientX - dragStart.x,
                y: touch.clientY - dragStart.y
            });
        } else if (e.touches.length === 2) {
            // Two finger pinch zooming
            const distance = getTouchDistance(e.touches);
            if (initialTouchDistance > 0) {
                const scale = distance / initialTouchDistance;
                const newZoomLevel = Math.max(1, Math.min(4, initialZoomLevel * scale));
                setZoomLevel(newZoomLevel);

                if (newZoomLevel === 1) {
                    setPanPosition({ x: 0, y: 0 });
                }
            }
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault();

        if (e.touches.length === 0) {
            setIsDragging(false);
            setInitialTouchDistance(0);
        } else if (e.touches.length === 1) {
            // Switched from pinch to single touch
            setInitialTouchDistance(0);

            // Start panning if zoomed
            if (zoomLevel > 1) {
                setIsDragging(true);
                const touch = e.touches[0];
                setDragStart({
                    x: touch.clientX - panPosition.x,
                    y: touch.clientY - panPosition.y
                });
            }
        }
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
                                {allPdfFiles.length > 0 && (
                                    <div className="product-pdf-section">
                                        <h4>PDF Resources</h4>
                                        <div className="pdf-downloads">
                                            {allPdfFiles.map((pdf, index) => (
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

            {/* Enhanced Image Zoom Modal */}
            {isZoomed && zoomedImage && (
                <div className="image-zoom-modal" onClick={closeZoom}>
                    <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="zoom-close-btn" onClick={closeZoom}>
                            <i className="fas fa-times"></i>
                        </button>

                        {/* Zoom Controls Toolbar */}
                        <div className="zoom-toolbar">
                            <div className="zoom-level-controls">
                                <button
                                    className="zoom-control-btn"
                                    onClick={handleZoomOut}
                                    disabled={zoomLevel <= 1}
                                    title="Zoom Out"
                                >
                                    <i className="fas fa-search-minus"></i>
                                </button>
                                <span className="zoom-level-display">{Math.round(zoomLevel * 100)}%</span>
                                <button
                                    className="zoom-control-btn"
                                    onClick={handleZoomIn}
                                    disabled={zoomLevel >= 4}
                                    title="Zoom In"
                                >
                                    <i className="fas fa-search-plus"></i>
                                </button>
                                <button
                                    className="zoom-control-btn"
                                    onClick={resetZoom}
                                    disabled={zoomLevel === 1}
                                    title="Reset Zoom"
                                >
                                    <i className="fas fa-expand-arrows-alt"></i>
                                </button>
                            </div>
                        </div>

                        <div
                            className="zoomed-image-container"
                            ref={zoomImageRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onWheel={handleWheel}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            style={{
                                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                                touchAction: 'none'
                            }}
                        >
                            <div
                                className="zoomable-image"
                                style={{
                                    transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                                    transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                                }}
                            >
                                <Image
                                    src={zoomedImage}
                                    alt={`${product.name} - Zoomed view`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
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

                        {/* Zoom Instructions */}
                        <div className="zoom-instructions">
                            <span className="desktop-instructions">Use mouse wheel to zoom • Click and drag to pan • ESC to close</span>
                            <span className="mobile-instructions">Pinch to zoom • Drag to pan • Tap outside to close</span>
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
        const response = await getAllTopProductDetails();
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