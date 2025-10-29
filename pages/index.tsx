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
import { useRef } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import VideoCard from "@/components/VideoCard";

const IndiaMap3D = dynamic(() => import("../components/IndiaMap3D"), {
  ssr: false,
});


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

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home(homeScreenData: HomeScreenContent) {
  const videoRefs = useRef<{ [key: string]: YouTubePlayer | null }>({});

  return (
    <main>
      <SEO
        title={homeScreenData?.keywords.title || "Home"}
        description={homeScreenData?.keywords.description || "Home Page"}
        keywords={homeScreenData?.keywords.keywords?.split(",") || []}
        image={homeScreenData?.keywords.imagePath}
      />

      {/* Hero Video */}
      <motion.section
        className="video-container"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <video autoPlay muted loop playsInline className="responsive-video">
          <source src="/assets/MNH-Full-intro-Video-V2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.section>

      {/* Products Categories */}
      <motion.section
        className="section-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="title align-center">
            <h2>Our Products Categories</h2>
            <p>Explore our premium PVC solutions</p>
          </div>
          <motion.div
            className="category-slider"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
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
                320: { slidesPerView: 1.2, centeredSlides: true, spaceBetween: 15 },
                480: { slidesPerView: 1.5, centeredSlides: false },
                640: { slidesPerView: 2, centeredSlides: false },
                768: { slidesPerView: 2.5, centeredSlides: false },
                1024: { slidesPerView: 3, centeredSlides: false },
                1280: { slidesPerView: 4, centeredSlides: false },
              }}
            >
              {homeScreenData?.categories?.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div variants={fadeUpItem}>
                    <Link href={`/subcategory/${item.id}`} className="category-box">
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
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us & FAQs */}
      <motion.section
        className="section-base section-color"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="title align-center align-left-md">
            <h2>About us</h2>
            <p>Our Company Profile</p>
          </div>
          <div className="row">
            <motion.div className="col-lg-4" variants={fadeUpItem}>
              <div
                className="ck-content"
                dangerouslySetInnerHTML={{
                  __html: homeScreenData?.aboutUs?.sortContent || "",
                }}
              />
            </motion.div>
            <motion.div className="col-lg-8" variants={fadeUpItem}>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founders & Leadership */}
      <motion.section
        className="section-base py-16 founders-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="title align-center">
            <h2>Founders & Executive Leadership</h2>
          </div>
          {homeScreenData?.members?.map((item, index) => (
            <motion.div
              key={item.id}
              className={`founder ${index % 2 === 1 ? "reverse" : ""}`}
              variants={fadeUpItem}
            >
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
              <div className="founder-text">
                <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <Link className="btn btn-sm" href="/about">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Blogs */}
      <motion.section
        className="section-base section-color home-blog-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="title align-center">
            <h2>Blogs</h2>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={"auto"}
            centeredSlides={true}
            className="blog-swiper"
            loop={false}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: true, spaceBetween: 15 },
              768: { slidesPerView: 1.5, centeredSlides: false },
              991: { slidesPerView: 2.5, centeredSlides: false },
            }}
          >
            {homeScreenData?.blogs?.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div variants={fadeUpItem}>
                  <div className="blog-card">
                    <Link href={`/blog/${item.id}`} className="blog-card-image">
                      {item.type == BLOG_MEDIA_TYPE.VIDEO ? (
                        <>
                          <YouTube
                            ref={(ref) => {
                              if (ref) videoRefs.current[item.id] = ref;
                            }}
                            videoId={extractYouTubeId(item.media)}
                            opts={youtubeOptions}
                            style={{ height: "auto", width: "100%", position: "relative" }}
                            onReady={(event) => event.target.pauseVideo()}
                          />
                          <motion.div
                            className="blog-video-icon"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ repeat: Infinity, duration: 1.2 }}
                          >
                            <i className="fas fa-play"></i>
                          </motion.div>
                        </>
                      ) : (
                        <img src={item.thumbnail || "/assets/logo.jpeg"} alt={item.title || ""} />
                      )}
                    </Link>
                    <div className="blog-card-content">
                      <h3 className="blog-card-title">{item.title}</h3>
                      <p className="blog-card-description">{item.sortDescription}</p>
                      <div className="blog-card-meta">
                        <div className="blog-card-date">
                          <i className="far fa-calendar-alt"></i>
                          <span>{format(item.createdAt, "dd / MM / yyyy")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Branches */}
      <motion.section
        className="section-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <IndiaMap3D />
      </motion.section>

      {/* Specifications */}
      <motion.section
        className="section-base section-color"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="title align-center">
            <h2>Why you should use our products</h2>
            <p>We provide the best quality products</p>
          </div>
          <table className="table table-grid table-border table-6-md">
            <tbody>
              <tr>
                {homeScreenData?.specifications?.map((item) => (
                  <motion.td key={item.id} variants={fadeUpItem}>
                    <div className="icon-box icon-box-top align-center">
                      <i className={item.iconName}></i>
                      <div className="caption">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </motion.td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

       {/* Reviews */}
       <motion.section
      className="section-base"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="container">
        <div className="title align-center">
          <h2>Check Our Latest Video</h2>
          <p>Video</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            loop={false}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="video-swiper"
          >
            {homeScreenData?.reviewsVideos?.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div variants={fadeUpItem}>
                  <VideoCard video={item} key={index} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
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
