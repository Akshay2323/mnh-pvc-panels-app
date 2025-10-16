import { getAllBlogDetails } from "@/utils/api";
import { Blog, BLOG_MEDIA_TYPE, Keywords, ProductCategory } from "@/utils/app.model";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Loader from "../components/Loader";
import Pagination from "@/components/Pagination";
import { format } from "date-fns";
import YouTube, { YouTubePlayer } from "react-youtube";
import { extractYouTubeId } from "@/utils/common";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";

const maxLimit = 10;
interface BlogPageProps {
    initialData: {
        blogs: Blog[];
        keywords: Keywords;
        category: ProductCategory[];
        totalRecords: number;
        totalPages: number;
        currentPage: number;
    };
}

const youtubeOptions = {
    width: '100%',
    height: '240px',
    playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0
    }
};
export default function BlogPage({ initialData }: BlogPageProps) {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>(initialData?.blogs || []);
    const videoRefs = useRef<{ [key: string]: YouTubePlayer | null }>({});
    const [pagination, setPagination] = useState({
        currentPage: initialData.currentPage,
        totalPages: initialData.totalPages,
        totalRecords: initialData.totalRecords,
    });
    const [isLoading, setIsLoading] = useState(false);
    // const [categoryId, setCategoryId] = useState('');
    const [search, setSearch] = useState('');

    const handlePageChange = async (page: number, categoryId: string = '') => {
        if (page < 1 || page > pagination.totalPages) return;

        setIsLoading(true);
        try {
            const response = await getAllBlogDetails(page, maxLimit, search, categoryId);
            if (response.status) {
                setBlogs(response.data?.blogs || []);
                setPagination({
                    currentPage: page,
                    totalPages: response.data.totalPages || 1,
                    totalRecords: response.data.totalRecord || 0,
                });
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <SEO
                title={
                    initialData?.keywords.title || "Blog"}
                description={initialData?.keywords.description || "Blog Page"}
                keywords={initialData?.keywords.keywords?.split(",") || []}
                image={initialData?.keywords.imagePath}
            />
            <PageHeader
                title={"Blog"}
                description={"Explore ideas, trends & inspirations"}
                breadcrumbs={[
                    { label: 'Blog', href: '/blog' },
                ]}
            />
            <main>
                <section className="section-base">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-8">
                                {
                                    isLoading && <Loader />
                                }
                                {
                                    (!isLoading && (blogs?.length || 0) <= 0) && <section className="section-base mt50">
                                        <div className="container">
                                            <div className="error-container">
                                                <h1>No Blogs Found</h1>
                                                <p>There are no blogs available in this category.</p>
                                            </div>
                                        </div>
                                    </section>
                                }
                                {
                                    (!isLoading && (blogs?.length || 0) > 0) && <>
                                        <div className="grid-list" data-columns="1">
                                            <div className="grid-box">
                                                {
                                                    blogs.map((blog) => (
                                                        <div key={blog.id} className="grid-item">
                                                            <div className="cnt-box cnt-box-blog-side boxed" data-href={`/blog/${blog.id}`}>
                                                                <Link href={`/blog/${blog.id}`} className="img-box">
                                                                    {
                                                                        blog.type == BLOG_MEDIA_TYPE.VIDEO ? < YouTube
                                                                            ref={(ref) => {
                                                                                if (ref) {
                                                                                    videoRefs.current[blog.id] = ref;
                                                                                }
                                                                            }}
                                                                            videoId={extractYouTubeId(blog.media)}
                                                                            opts={youtubeOptions}
                                                                            style={{ height: 'auto', width: '100%', position: 'relative' }}
                                                                            onReady={(event) => {
                                                                                // Pause video on initial load
                                                                                event.target.pauseVideo();
                                                                            }}
                                                                        /> :
                                                                            <Image src={blog.thumbnail || "/assets/logo.jpeg"} alt="" layout="fill"
                                                                                objectFit="contain" />

                                                                    }
                                                                </Link>
                                                                <div className="caption">
                                                                    <h2>{blog.title}</h2>
                                                                    <ul className="icon-list icon-list-horizontal">
                                                                        <li><i className="icon-calendar"></i><a href="#">{format(blog.createdAt, 'dd / MM / yyyy')}</a></li>
                                                                        <li><i className="icon-bookmark"></i><a href="#">{blog.productCategory?.name}</a></li>
                                                                    </ul>
                                                                    <p>
                                                                        {blog.sortDescription}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))

                                                }
                                            </div>
                                            <div className="list-pagination">
                                                <ul className="pagination" data-page-items="4" data-options="scrollTop:true"></ul>
                                            </div>
                                        </div>
                                        <Pagination
                                            currentPage={pagination.currentPage}
                                            totalPages={pagination.totalPages}
                                            onPageChange={handlePageChange}
                                            isLoading={isLoading}
                                            className="mt-5"
                                        />
                                    </>
                                }

                            </div>
                            <div className="col-lg-4">
                                <form className="form-box">
                                    <div className="input-text-btn">
                                        <input className="input-text" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search ..." />
                                        <input type="submit" value="Search" className="btn" onClick={() => handlePageChange(1)} />
                                    </div>
                                </form>
                                <hr className="space-sm" />
                                <h3>Categories</h3>
                                <hr className="space-xs" />
                                <div className="menu-inner menu-inner-vertical">
                                    <ul>
                                        <li>
                                            <a onClick={() => {
                                                setTimeout(() => {
                                                    handlePageChange(1);
                                                }, 200);
                                            }}>
                                                All
                                            </a>
                                        </li>
                                        {
                                            initialData.category.map((category) => (
                                                <li key={category.id}>
                                                    <a onClick={() => {
                                                        handlePageChange(1, category.id || '');
                                                    }}>
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {/* <hr className="space-sm" />
                                <h3>Latest posts</h3>
                                <hr className="space-sm" />
                                <div className="menu-inner menu-inner-vertical menu-inner-image">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <Image src="/assets/logo.jpeg" alt="" style={{ objectFit: 'cover' }} height={50} width={50} />
                                                <span>February 12, 2020</span>
                                                The last summer days
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image src="/assets/logo.jpeg" alt="" style={{ objectFit: 'cover' }} height={50} width={50} />
                                                <span>February 25, 2020</span>
                                                Travels
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image src="/assets/logo.jpeg" alt="" style={{ objectFit: 'cover' }} height={50} width={50} />
                                                <span>April 19, 2020</span>
                                                People and kids
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Image src="/assets/logo.jpeg" alt="" style={{ objectFit: 'cover' }} height={50} width={50} />
                                                <span>April 20, 2020</span>
                                                Animals and nature
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}


export const getStaticProps = async () => {
    try {
        const response = await getAllBlogDetails(1, maxLimit, '');

        if (!response.status || !response.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                initialData: {
                    blogs: response.data.blogs || [],
                    keywords: response.data.keywords || new Keywords(),
                    category: response.data.category || [],
                    totalRecords: response.data.totalRecord || 0,
                    totalPages: response.data.totalPages || 1,
                    currentPage: 1,
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