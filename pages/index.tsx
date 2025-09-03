/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHomeScreenContentQuery } from "../store/api/apiSlice";
import Loader from "./components/Loader";

export default function Home() {

  const { data: homeScreenData, isLoading, error } = useHomeScreenContentQuery();
  if (isLoading) {
    return <Loader size="medium" />;
  }
  if (error) {
    console.error('Error loading content:', error);
    return <div>Error loading content. Please try again later.</div>;
  }
  return (
    <main>
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
              slidesPerView={'auto'}
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
                  spaceBetween: 15
                },
                480: {
                  slidesPerView: 1.5,
                  centeredSlides: false
                },
                640: {
                  slidesPerView: 2,
                  centeredSlides: false
                },
                768: {
                  slidesPerView: 2.5,
                  centeredSlides: false
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false
                },
                1280: {
                  slidesPerView: 4,
                  centeredSlides: false
                }
              }}
            >
              {homeScreenData?.data?.categories?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="category-box">
                    <img
                      src={item.imagePath || '/assets/long-9.jpg'}
                      alt={item.name}
                      className="category-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/long-9.jpg';
                      }}
                    />
                    <div className="category-content">
                      <h3 className="title">{item.name}</h3>
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
            <h2>About us</h2>
            <p>Our Company Profile</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <p>
                {homeScreenData?.data?.aboutUs?.sortContent}
              </p>
            </div>
            <div className="col-lg-8">
              <ul className="accordion-list" data-open="1">
                {
                  homeScreenData?.data?.manufacturerContent?.title && (
                    <li>
                      <a href="#">{homeScreenData?.data?.manufacturerContent?.title}</a>
                      <div className="content">
                        <p>{homeScreenData?.data?.manufacturerContent?.sortContent}</p>
                        <Link href="/manufacturer">Read More</Link>
                      </div>
                    </li>
                  )
                }
                {
                  homeScreenData?.data?.pvcWallContent?.title && (
                    <li>
                      <a href="#">{homeScreenData?.data?.pvcWallContent?.title}</a>
                      <div className="content">
                        <p>{homeScreenData?.data?.pvcWallContent?.sortContent}</p>
                        <Link href="/pvc-wall">Read More</Link>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-base">
        <div className="container">
          <div className="title align-center">
            <h2>Our Clients</h2>
            <p>Trusted by leading brands for innovative PVC solutions.</p>
          </div>
          <div className="client-details">
            {homeScreenData?.data?.clients?.map((item) => (
              <div key={item.id} className="client-box">
                <img src={item.imagePath || '/assets/long-9.jpg'} alt={'MNH PVC Panel clients'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-base section-color">
        <div className="container">
          <div className="title align-center">
            <h2>Strengthening Connections Nationwide</h2>
            <p>Stocking at strategic hotspots to ensure timely delivery everywhere.</p>
          </div>
          <div className="category-slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={'auto'}
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
                  spaceBetween: 15
                },
                480: {
                  slidesPerView: 1.5,
                  centeredSlides: false
                },
                640: {
                  slidesPerView: 2,
                  centeredSlides: false
                },
                768: {
                  slidesPerView: 2.5,
                  centeredSlides: false
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false
                },
                1280: {
                  slidesPerView: 4,
                  centeredSlides: false
                }
              }}
            >
              {homeScreenData?.data?.branches?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="category-box">
                    <img
                      src={item.imagePath || '/assets/long-9.jpg'}
                      alt={item.name}
                      className="category-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/long-9.jpg';
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

      <section className="section-base">
        <div className="container">
          <div className="title align-center">
            <h2>Why you should use our products</h2>
            <p>We provide the best quality products</p>
          </div>
          <table className="table table-grid table-border table-6-md">
            <tbody>
              <tr>
                {homeScreenData?.data?.specifications?.map((item) => (
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
  )
}