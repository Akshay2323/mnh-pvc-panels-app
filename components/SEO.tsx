import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    author?: string;
    type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
    locale?: string;
    siteName?: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    twitterCreator?: string;
    twitterSite?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    children?: React.ReactNode;
}

const defaultDescription = 'MNH PVC Panels - High-quality PVC panels for your home and office.';
const defaultKeywords = ['PVC panels', 'wall panels', 'ceiling panels', 'decorative panels', 'MNH PVC'];
const defaultTitle = 'MNH PVC Panels';
const defaultSiteName = 'MNH PVC Panels';

export default function SEO({
    title = defaultTitle,
    description = defaultDescription,
    keywords = defaultKeywords,
    image = '/assets/og-image.jpg', // Default Open Graph image
    author = 'MNH PVC Panels',
    type = 'website',
    publishedTime,
    modifiedTime,
    section,
    tags = [],
    locale = 'en_US',
    siteName = defaultSiteName,
    twitterCard = 'summary_large_image',
    twitterCreator = '@mnhpvcpanels',
    twitterSite = '@mnhpvcpanels',
    canonicalUrl = "https://www.mnhpvcpanels.com/",
    noIndex = false,
    noFollow = false,
    children,
}: SEOProps) {
    const router = useRouter();
    const currentUrl = typeof window !== 'undefined' ? window.location.origin + router.asPath : '';
    const pageTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`;

    // Handle meta robots
    const robots = [];
    if (noIndex) robots.push('noindex');
    if (noFollow) robots.push('nofollow');
    const robotsContent = robots.length > 0 ? robots.join(', ') : 'index, follow';

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <meta name="title" content={pageTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={[...defaultKeywords, ...keywords].join(', ')} />
            <meta name="author" content={author} />
            <meta name="robots" content={robotsContent} />
            <link rel="canonical" href={canonicalUrl || currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={locale} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:site" content={twitterSite} />
            <meta property="article:publisher" content="https://www.facebook.com/mnhpanels/" />

            {/* Additional Open Graph tags */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {section && <meta property="article:section" content={section} />}
            {tags.map((tag) => (
                <meta property="article:tag" content={tag} key={tag} />
            ))}

            {/* Additional links */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
            <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
            <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />

            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />

            {/* Additional children */}
            {children}
        </Head>
    );
}
