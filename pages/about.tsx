/* eslint-disable @next/next/no-img-element */
import { getAboutUsDetails } from "@/utils/api";
import { AboutUsContent } from "@/utils/app.model";
import { GetStaticProps } from "next";
import React from "react";
import SEO from "../components/SEO";
import PageHeader from "@/components/PageHeader";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function About(aboutUsData: AboutUsContent) {
  console.log("🚀 ~ About ~ aboutUsData:", aboutUsData);
  return (
    <React.Fragment>
      <SEO
        title={aboutUsData?.keywords.title || "About"}
        description={aboutUsData?.keywords.description || "About Page"}
        keywords={aboutUsData?.keywords.keywords?.split(",") || []}
        image={aboutUsData?.keywords.imagePath}
      />
      <PageHeader
        title={"About Us"}
        description={"Crafting style with lasting strength"}
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />
      <main>
        <section className="section-base">
          <div className="container">
            <div
              className="ck-content"
              dangerouslySetInnerHTML={{
                __html: aboutUsData?.aboutUs?.content || "",
              }}
            />
          </div>
        </section>
        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center">
              <h2>Our Experts</h2>
            </div>
            <div
              className="grid-list gap-60"
              data-columns="2"
              data-columns-sm="1"
              data-gap="60"
            >
              <div className="grid-box">
                {aboutUsData?.members?.map((item) => (
                  <div className="grid-item" key={item.id}>
                    <div className="cnt-box cnt-box-side">
                      <a href="#" className="img-box">
                        <img
                          src={item.imagePath || "/assets/logo.jpeg"}
                          alt=""
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/logo.jpeg";
                          }}
                        />
                      </a>
                      <div className="caption">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section-base">
          <div className="container">
            <div className="title align-center">
              <h2>Strengthening Connections Nationwide</h2>
              <p>
                Stocking at strategic hotspots to ensure timely delivery
                everywhere.
              </p>
            </div>
            <div className="category-slider">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={"auto"}
                centeredSlides={true}
                loop={false}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 15,
                  },
                  480: {
                    slidesPerView: 1.5,
                    centeredSlides: false,
                  },
                  640: {
                    slidesPerView: 2,
                    centeredSlides: false,
                  },
                  768: {
                    slidesPerView: 2.5,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 3,
                    centeredSlides: false,
                  },
                  1280: {
                    slidesPerView: 4,
                    centeredSlides: false,
                  },
                }}
              >
                {aboutUsData?.branches?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="category-box">
                      <img
                        src={item.imagePath || "/assets/logo.jpeg"}
                        alt={item.name}
                        className="category-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/logo.jpeg";
                        }}
                      />
                      <div className="category-content">
                        <h3 className="title">{item.name}</h3>
                        <h3 className="sub-title">{item.city}</h3>
                        <p className="sub-title address">{item.address}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center align-left-md">
              <h2>FAQ</h2>
            </div>
            <ul className="accordion-list" data-open="1">
              {aboutUsData?.faqs?.map((item) => (
                <li key={item.id}>
                  <a href="#">{item.title}</a>
                  <div className="content">
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
export const getStaticProps: GetStaticProps<AboutUsContent> = async () => {
  try {
    const response = await getAboutUsDetails();
    const data = response.status ? response.data : new AboutUsContent();

    return {
      props: JSON.parse(JSON.stringify(data)),
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching about us data:", error);
    return {
      props: JSON.parse(JSON.stringify(new AboutUsContent())),
    };
  }
};
