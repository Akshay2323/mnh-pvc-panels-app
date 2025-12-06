// Updated GalleryPage UI to display Events one-by-one (Tech Expo style)
import Pagination from "@/components/Pagination";
import { getProductGallery } from "@/utils/api";
import { Keywords, ProductGallery } from "@/utils/app.model";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalPdfViewer from "../components/ModalPdfViewer";
import Loader from "../components/Loader";
import SEO from "@/components/SEO";
import React from "react";
import PageHeader from "@/components/PageHeader";
import { GALLERY_MEDIA_TYPE } from "@/utils/app.constants";
import VideoCard from "@/components/VideoCard";

const maxLimit = 20;
interface ProductPageProps {
  initialData: {
    keywords: Keywords;
    events: ProductGallery[];
    totalRecords: number;
    totalPages: number;
    currentPage: number;
  };
}

export default function GalleryPage({ initialData }: ProductPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const [events, setEvents] = useState(initialData.events);
  const [pagination, setPagination] = useState({
    currentPage: initialData.currentPage,
    totalPages: initialData.totalPages,
    totalRecords: initialData.totalRecords,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = async (page: number) => {
    if (
      page < 1 ||
      page > pagination.totalPages ||
      page === pagination.currentPage
    )
      return;

    setIsLoading(true);
    try {
      const response = await getProductGallery(page, maxLimit, "");
      if (response.status && response.data) {
        setEvents(response.data?.gallery || []);
        setCurrentIndex(0);
        setPagination({
          currentPage: page,
          totalPages: response.data.totalPages || 1,
          totalRecords: response.data.totalRecord || 0,
        });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (router.isFallback) return <Loader />;

  if (!events || events.length === 0) {
    return (
      <main>
        <section className="section-base mt50">
          <div className="container">
            <div className="error-container">
              <h1>No Events Found</h1>
              <p>There are no events available.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <React.Fragment>
      <SEO
        title={initialData?.keywords.title || "Event"}
        description={initialData?.keywords.description || "Event Page"}
        keywords={initialData?.keywords.keywords?.split(",") || []}
        image={initialData?.keywords.imagePath}
      />

      <PageHeader
        title={"Events"}
        description={"Discover our events one by one"}
        breadcrumbs={[{ label: "Events", href: "/events" }]}
      />

      <main>
        {!events || events.length === 0 ? (
          <section className="section-base">
            <div className="container">
              <div className="error-container">
                <h1>No Events Found</h1>
                <p>There are no events available.</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="section-base">
            <div className="container">
              <div className="gallery-grid">
                {events.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="gallery-card"
                  >
                    <div className="gallery-card-image">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        width={0}
                        height={0}
                        sizes="cover"
                        className="gallery-image"
                      />
                    </div>
                    <div className="gallery-title">
                      <h3 className="gallery-card-title">{event.title}</h3>
                      <p className="gallery-card-description">
                        {event.description}
                      </p>
                    </div>
                  </Link>
                ))}
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
        )}
      </main>
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await getProductGallery(1, maxLimit, "");

    if (!response.status || !response.data) return { notFound: true };

    return {
      props: {
        initialData: {
          events: response.data.gallery || [],
          keywords: response.data.keywords || {},
          totalRecords: response.data.totalRecord || 0,
          totalPages: response.data.totalPages || 1,
          currentPage: 1,
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
};
