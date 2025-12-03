import { getAllBlogDetails, getBlogDetailsById } from "@/utils/api";
import { BLOG_MEDIA_TYPE, BlogDetails } from "@/utils/app.model";
import { extractYouTubeId } from "@/utils/common";
import { GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import Loader from "../../components/Loader";
import PageHeader from "../../components/PageHeader";
import React from "react";
import SEO from "@/components/SEO";

const youtubeOptions = {
  width: "100%",
  height: "320px",
  playerVars: {
    autoplay: 0,
    controls: 0,
    modestbranding: 1,
    rel: 0,
  },
};
export default function BlogPage(blogData: BlogDetails) {
  const router = useRouter();
  const videoRefs = useRef<YouTubePlayer | null>(null);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <SEO
        title={
          blogData?.blogDetail?.title || blogData?.keywords.title || "Blog"
        }
        description={
          blogData?.blogDetail?.sortDescription ||
          blogData?.keywords.description ||
          "Blog Page"
        }
        keywords={blogData?.keywords.keywords?.split(",") || []}
        image={blogData?.blogDetail?.thumbnail || blogData?.keywords.imagePath}
      />
      <PageHeader
        title={blogData?.blogDetail?.title || ""}
        description={blogData?.blogDetail?.sortDescription || "  "}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: "Post", href: "" },
        ]}
      />
      <main>
        {!blogData?.blogDetail?.id ? (
          <main>
            <section className="section-base">
              <div className="container">
                <div className="error-container">
                  <h1>No Blog Details Found</h1>
                  <p>There are no blogs details available.</p>
                </div>
              </div>
            </section>
          </main>
        ) : (
          <section className="section-base">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {blogData?.blogDetail?.type == BLOG_MEDIA_TYPE.VIDEO ? (
                    <YouTube
                      ref={(ref) => {
                        if (ref) {
                          videoRefs.current = ref;
                        }
                      }}
                      videoId={
                        extractYouTubeId(blogData?.blogDetail?.media ?? "") ??
                        ""
                      }
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
                  ) : (
                    <div className="blog-detail-image">
                      <Image
                        src={blogData?.blogDetail?.media || "/assets/logo.jpeg"}
                        alt={blogData?.blogDetail?.title || ""}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  {/* <img src="http://via.placeholder.com/800x500" alt="" /> */}
                  <hr className="space-sm" />
                  <div className="icon-links icon-links-grid icon-social social-colors">
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-social="share-facebook"
                      className="facebook"
                    >
                      <i className="icon-facebook"></i>
                    </Link>
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }&text=${blogData?.blogDetail?.title || ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-social="share-twitter"
                      className="twitter"
                    >
                      <i className="icon-twitter"></i>
                    </Link>
                    <Link
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }&title=${blogData?.blogDetail?.title || ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-social="share-linkedin"
                      className="linkedin"
                    >
                      <i className="icon-linkedin"></i>
                    </Link>
                    <Link
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        (blogData?.blogDetail?.title || "") +
                          " " +
                          (typeof window !== "undefined"
                            ? window.location.href
                            : "")
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-social="share-whatsapp"
                      className="whatsapp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 18 18"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                    </Link>
                  </div>
                  <hr className="space-sm" />
                  <p className="blog-detail-sort-description">
                    {blogData?.blogDetail?.sortDescription}
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData?.blogDetail?.description || "",
                    }}
                  />

                  {/* <div className="list-nav">
                                <a href="#">Previous post</a>
                                <a className="list-archive" href="#"></a>
                                <a href="#">Next post</a>
                            </div> */}
                </div>
                {/* <div className="col-lg-4">
                            <form className="form-box">
                                <div className="input-text-btn">
                                    <input className="input-text" type="text" placeholder="Search ..." /><input type="submit" value="Search" className="btn" />
                                </div>
                            </form>
                            <hr className="space-sm" />
                            <h3>Categories</h3>
                            <hr className="space-sm" />
                            <div className="menu-inner menu-inner-vertical">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Treks and paths
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Travels
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            People and kids
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Animals and nature
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <hr className="space-sm" />
                            <h3>Latest posts</h3>
                            <hr className="space-sm" />
                            <div className="menu-inner menu-inner-vertical menu-inner-image">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://via.placeholder.com/450x450" alt="" />
                                            <span>February 12, 2020</span>
                                            The last summer days
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://via.placeholder.com/450x450" alt="" />
                                            <span>February 25, 2020</span>
                                            Travels
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://via.placeholder.com/450x450" alt="" />
                                            <span>April 19, 2020</span>
                                            People and kids
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://via.placeholder.com/450x450" alt="" />
                                            <span>April 20, 2020</span>
                                            Animals and nature
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="space-sm" />
                            <h3>Twitter</h3>
                            <hr className="space-sm" />
                            <div className="social-feed social-feed-tw social-slider" data-social-id="twitter" data-options="count:8,arrows:true,nav:true,controls:out,type:carousel,perView:1"></div>
                        </div> */}
              </div>
            </div>
          </section>
        )}
      </main>
    </React.Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await getAllBlogDetails();
    const blogs = response.status ? response.data?.blogs || [] : [];

    const paths = blogs.map((blog) => ({
      params: { slug: blog.id },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error fetching product category paths:", error);
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
    const response = await getBlogDetailsById(params.slug);

    if (!response.status || !response.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: JSON.parse(JSON.stringify(response.data)),
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true,
    };
  }
};
