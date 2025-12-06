/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { getProductGallery, getProductGalleryById } from "@/utils/api";
import { GALLERY_MEDIA_TYPE } from "@/utils/app.constants";
import {
  ExistingGalleryMedia,
  Keywords,
  ProductGallery,
} from "@/utils/app.model";
import { GetStaticPaths } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Loader from "../../components/Loader";

interface EventPageProps {
  initialData: {
    eventDetail: ProductGallery;
    keywords: Keywords;
  };
}

export default function EventPage({ initialData }: EventPageProps) {
  const router = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Helper function to normalize media URLs
  const normalizeMediaUrl = (url: string): string => {
    if (!url) return "/images/placeholder.jpg";
    // If it's an absolute URL, return as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    // If it's a relative URL without leading slash, add it
    if (!url.startsWith("/")) {
      return `/${url}`;
    }
    return url;
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentMediaIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNext = () => {
    if (currentMediaIndex < initialData.eventDetail.medias.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  if (router.isFallback) {
    return <Loader />;
  }

  const currentMedia = initialData?.eventDetail?.medias[currentMediaIndex];

  return (
    <React.Fragment>
      <SEO
        title={
          initialData?.eventDetail?.title ||
          initialData?.keywords?.title ||
          "Event"
        }
        description={
          initialData?.eventDetail?.description ||
          initialData?.keywords?.description ||
          "Event Page"
        }
        keywords={initialData?.keywords?.keywords?.split(",") || []}
        image={
          initialData?.eventDetail?.imageUrl || initialData?.keywords?.imagePath
        }
      />
      <PageHeader
        title={initialData?.eventDetail?.title || ""}
        description={
          initialData?.eventDetail?.description?.substring(0, 100) || ""
        }
        breadcrumbs={[
          {
            label: "Events",
            href: "/events",
          },
          { label: initialData?.eventDetail?.title || "Event", href: "" },
        ]}
      />
      <main>
        {!initialData?.eventDetail ? (
          <section className="section-base mt50">
            <div className="container">
              <div className="error-container">
                <h1>No Event Details Found</h1>
                <p>There are no event details available for this event.</p>
              </div>
            </div>
          </section>
        ) : (
          <Fragment>
            <section className="section-base mt50">
              <div className="container event-gallery-container">
                {/* Event Gallery Grid */}
                <div className="event-gallery-grid">
                  {initialData.eventDetail.medias.map(
                    (media: ExistingGalleryMedia, index: number) => (
                      <div
                        key={media.id || index}
                        className="event-gallery-item"
                        onClick={() => openLightbox(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            openLightbox(index);
                          }
                        }}
                        aria-label={`View ${
                          media.type === GALLERY_MEDIA_TYPE.VIDEO
                            ? "video"
                            : "image"
                        } ${index + 1}`}
                      >
                        <div className="event-gallery-media">
                          {media.type === GALLERY_MEDIA_TYPE.VIDEO ? (
                            // Video Thumbnail
                            <div className="event-gallery-video-thumbnail">
                              <Image
                                src={
                                  media?.thumbnailPath ||
                                  "/assets/placeholder.png"
                                }
                                alt={`MNH PVC Panels Video ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: "cover" }}
                              />
                              <div className="event-gallery-play-overlay">
                                <div className="event-gallery-play-icon"></div>
                              </div>
                            </div>
                          ) : (
                            // Image
                            <Image
                              src={normalizeMediaUrl(media.mediaUrl)}
                              alt={`${initialData.eventDetail.title} - Image ${
                                index + 1
                              }`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              style={{ objectFit: "cover" }}
                            />
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Empty State */}
                {initialData.eventDetail.medias.length === 0 && (
                  <div className="event-gallery-empty">
                    <div className="event-gallery-empty-icon">
                      <i className="fas fa-images"></i>
                    </div>
                    <p className="event-gallery-empty-text">
                      No media available for this event
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && currentMedia && (
              <div
                className="event-lightbox-overlay"
                onClick={closeLightbox}
                role="dialog"
                aria-modal="true"
                aria-label="Media viewer"
              >
                <div
                  className="event-lightbox-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="event-lightbox-close"
                    onClick={closeLightbox}
                    aria-label="Close viewer"
                  >
                    ×
                  </button>

                  {/* Media Display */}
                  {currentMedia.type === GALLERY_MEDIA_TYPE.VIDEO ? (
                    <video
                      className="event-lightbox-video"
                      controls
                      autoPlay
                      poster={
                        currentMedia.thumbnailPath || "/assets/placeholder.png"
                      }
                      src={normalizeMediaUrl(currentMedia.mediaUrl)}
                      aria-label={`Video ${currentMediaIndex + 1}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="event-lightbox-image"
                      src={normalizeMediaUrl(currentMedia.mediaUrl)}
                      alt={`${initialData.eventDetail.title} - Image ${
                        currentMediaIndex + 1
                      }`}
                    />
                  )}

                  {/* Previous Button */}
                  <button
                    className={`event-lightbox-nav event-lightbox-prev ${
                      currentMediaIndex === 0 ? "disabled" : ""
                    }`}
                    onClick={handlePrevious}
                    disabled={currentMediaIndex === 0}
                    aria-label="Previous media"
                  >
                    ‹
                  </button>

                  {/* Next Button */}
                  <button
                    className={`event-lightbox-nav event-lightbox-next ${
                      currentMediaIndex ===
                      initialData.eventDetail.medias.length - 1
                        ? "disabled"
                        : ""
                    }`}
                    onClick={handleNext}
                    disabled={
                      currentMediaIndex ===
                      initialData.eventDetail.medias.length - 1
                    }
                    aria-label="Next media"
                  >
                    ›
                  </button>

                  {/* Counter */}
                  <div className="event-lightbox-counter">
                    {currentMediaIndex + 1} /{" "}
                    {initialData.eventDetail.medias.length}
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        )}
      </main>
    </React.Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await getProductGallery(1, 10, "");
    const events = response.status ? response.data?.gallery || [] : [];

    const paths = events.map((event) => ({
      params: { slug: event.id },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error fetching event paths:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  try {
    const response = await getProductGalleryById(params.slug);

    if (!response.status || !response.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        initialData: {
          eventDetail: response.data.galleryDetails || {},
          keywords: response.data.keywords || {},
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true,
    };
  }
};
