/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetStaticProps } from "next";
import { BLOG_MEDIA_TYPE, HomeScreenContent } from "@/utils/app.model";
import { getHomeDetails } from "@/utils/api";
import { extractYouTubeId } from "@/utils/common";
import SEO from "@/components/SEO";
import YouTube, { YouTubePlayer } from "react-youtube";
import Image from "next/image";
import { useRef } from "react";
import { format } from "date-fns";

const youtubeOptions = {
  width: "100%",
  height: "240px",
  playerVars: {
    autoplay: 0,
    controls: 0,
    modestbranding: 1,
    rel: 0,
  },
};
export default function Home(homeScreenData: HomeScreenContent) {
  console.log("🚀 ~ Home ~ homeScreenData:", homeScreenData);
  const videoRefs = useRef<{ [key: string]: YouTubePlayer | null }>({});
  return (
    <main>
      <SEO
        title={homeScreenData?.keywords.title || "Home"}
        description={homeScreenData?.keywords.description || "Home Page"}
        keywords={homeScreenData?.keywords.keywords?.split(",") || []}
        image={homeScreenData?.keywords.imagePath}
      />
      <section className="video-container">
        <video autoPlay muted loop playsInline className="responsive-video">
          <source src="/assets/MNH-Full-intro-Video-V2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="section-base">
        <div className="container">
          <div className="title align-center">
            <h2>Our Products Categories</h2>
            <p>Explore our premium PVC solutions</p>
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
              {homeScreenData?.categories?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link
                    href={`/subcategory/${item.id}`}
                    className="category-box"
                  >
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
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="section-base section-color">
        <div className="container">
          <div className="title align-center align-left-md">
            <h2>About us</h2>
            <p>Our Company Profile</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div>
                <div
                  className="ck-content"
                  dangerouslySetInnerHTML={{
                    __html: homeScreenData?.aboutUs?.sortContent || "",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="accordion-list" data-open="1">
                {homeScreenData?.faqs?.map((item) => (
                  <li key={item.id}>
                    <a href="#">{item.title}</a>
                    <div className="content">
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-base py-16 founders-section">
  <div className="container mx-auto px-4">
<div className="title align-center">
  <h2>Founders & Executive Leadership</h2>
</div>



    <div className="founders-list">
      {homeScreenData?.members?.map((item, index) => (
        <div key={item.id} className={`founder ${index % 2 === 1 ? "reverse" : ""}`}>
          {/* Image */}
          <div className="founder-image">
            <img
              src={item.imagePath || "/assets/logo.jpeg"}
              alt={item.name}
              className="rounded-2xl shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/assets/logo.jpeg";
              }}
            />
          </div>

          {/* Text */}
          <div className="founder-text">
            <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>






      <section className="section-base section-color">
        <div className="container">
          <div className="title align-center">
            <h2>Blogs</h2>
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
                  slidesPerView: 1,
                  centeredSlides: true,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 1.5,
                  centeredSlides: false,
                },
                991: {
                  slidesPerView: 2.5,
                  centeredSlides: false,
                },
              }}
            >
              {homeScreenData?.blogs?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="blog-card">
                    <Link href={`/blog/${item.id}`} className="blog-card-image">
                      {item.type == BLOG_MEDIA_TYPE.VIDEO ? (
                        <>
                          <YouTube
                            ref={(ref) => {
                              if (ref) {
                                videoRefs.current[item.id] = ref;
                              }
                            }}
                            videoId={extractYouTubeId(item.media)}
                            opts={youtubeOptions}
                            style={{
                              height: "auto",
                              width: "100%",
                              position: "relative",
                            }}
                            onReady={(event) => {
                              // Pause video on initial load
                              event.target.pauseVideo();
                            }}
                          />
                          <div className="blog-video-icon">
                            <i className="fas fa-play"></i>
                          </div>
                        </>
                      ) : (
                        <img
                          src={item.thumbnail || "/assets/logo.jpeg"}
                          alt={item.title || ""}
                        />
                      )}
                    </Link>
                    <div className="blog-card-content">
                      <h3 className="blog-card-title">{item.title}</h3>
                      <p className="blog-card-description">
                        {item.sortDescription}
                      </p>
                      <div className="blog-card-meta">
                        <div className="blog-card-date">
                          <i className="far fa-calendar-alt"></i>
                          <span>{format(item.createdAt, 'dd / MM / yyyy')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* <section className="section-base">
        <div className="container">
          <div className="title align-center">
            <h2>Our Clients</h2>
            <p>Trusted by leading brands for innovative PVC solutions.</p>
          </div>
          <div className="client-details">
            {homeScreenData?.clients?.map((item) => (
              <div key={item.id} className="client-box">
                <img src={item.imagePath || '/assets/logo.jpeg'} alt={'MNH PVC Panel clients'} />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="section-base section-color">
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
              {homeScreenData?.branches?.map((item) => (
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
      </section> */}

      <section className="section-base">
        <div className="container">
          <div className="title align-center">
            <h2>Why you should use our products</h2>
            <p>We provide the best quality products</p>
          </div>
          <table className="table table-grid table-border table-6-md">
            <tbody>
              <tr>
                {homeScreenData?.specifications?.map((item) => (
                  <td key={item.id}>
                    <div className="icon-box icon-box-top align-center">
                      <i className={item.iconName}></i>
                      <div className="caption">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeScreenContent> = async () => {
  try {
    const response = await getHomeDetails();
    const data = response.status ? response.data : new HomeScreenContent();

    return {
      props: JSON.parse(JSON.stringify(data)),
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching home screen data:", error);
    return {
      props: JSON.parse(JSON.stringify(new HomeScreenContent())),
    };
  }
};
