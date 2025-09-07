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
import PageHeader from '../../components/PageHeader';
import React from "react";
import SEO from "@/components/SEO";

const youtubeOptions = {
    width: '100%',
    height: '320px',
    playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0
    }
};
export default function BlogPage(blogData: BlogDetails) {
    const router = useRouter();
    const videoRefs = useRef<YouTubePlayer | null>(null);

    if (router.isFallback) {
        return <Loader />;
    }

    if (!blogData?.blogDetail?.id) {
        return (
            <main>
                <section className="section-base">
                    <div className="container">
                        <div className="title align-center align-left-md">
                            <h2>Blogs</h2>
                        </div>
                        <div className="error-container">
                            <h1>No Blog Details Found</h1>
                            <p>There are no blogs details available.</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <React.Fragment>
            <SEO
                title={
                    blogData?.blogDetail?.title || blogData?.keywords.title || "Blog"}
                description={blogData?.blogDetail?.sortDescription || blogData?.keywords.description || "Blog Page"}
                keywords={blogData?.keywords.keywords?.split(",") || []}
                image={blogData?.blogDetail?.thumbnail || blogData?.keywords.imagePath}
            />
            <PageHeader
                title={blogData?.blogDetail?.title || ''}
                description={blogData?.blogDetail?.sortDescription}
                breadcrumbs={[
                    { label: 'Blog', href: '/blog' },
                    { label: 'Post', href: '' }
                ]}
            />
            <main>
                <section className="section-base">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {
                                    blogData?.blogDetail?.type == BLOG_MEDIA_TYPE.VIDEO ? <YouTube
                                        ref={(ref) => {
                                            if (ref) {
                                                videoRefs.current = ref;
                                            }
                                        }}
                                        videoId={extractYouTubeId(blogData?.blogDetail?.media)}
                                        opts={youtubeOptions}
                                        style={{ height: 'auto', width: '100%', position: 'relative' }}
                                        onReady={(event) => {
                                            // Pause video on initial load
                                            event.target.pauseVideo();
                                        }}
                                    /> :
                                        <div className="blog-detail-image" >
                                            <Image src={blogData?.blogDetail?.thumbnail || "/assets/app-logo.webp"} alt={blogData?.blogDetail?.title || ""} layout="fill"
                                                objectFit="contain" />
                                        </div>

                                }
                                {/* <img src="http://via.placeholder.com/800x500" alt="" /> */}
                                <hr className="space-sm" />
                                <div className="icon-links icon-links-grid icon-social social-colors">
                                    <Link href={"#"} data-social="share-facebook" className="facebook"><i className="icon-facebook"></i></Link>
                                    <Link href={"#"} data-social="share-twitter" className="twitter"><i className="icon-twitter"></i></Link>
                                    <Link href={"#"} data-social="share-linkedin" className="linkedin"><i className="icon-linkedin"></i></Link>
                                    <Link href={"#"} data-social="share-google" className="google"><i className="icon-google"></i></Link>
                                </div>
                                <hr className="space-sm" />
                                <p className='blog-detail-sort-description'>{blogData?.blogDetail?.sortDescription}</p>
                                <div dangerouslySetInnerHTML={{ __html: blogData?.blogDetail?.description || '' }} />

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
        console.error('Error fetching product category paths:', error);
        return {
            paths: [],
            fallback: true,
        };
    }
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    try {
        const response = await getBlogDetailsById(params.slug);

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                ...response.data,
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