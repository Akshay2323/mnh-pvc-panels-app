import "@/styles/bootstrap-grid.css";
import "@/styles/contact-form.css";
import "@/styles/content-box.css";
import "@/styles/glide.css";
import '@/styles/globals.css';
import "@/styles/magnific-popup.css";
import "@/styles/media-box.css";
import "@/styles/product-categories.css";
import "@/styles/product-details.css";
import "@/styles/style.css";
import "@/styles/skin2.css";
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

export default function App({ Component, pageProps }: AppProps) {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only show content on client-side to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  // Default SEO props that can be overridden by individual pages
  const defaultSEOProps = {
    title: 'MNH PVC Panels - Premium Quality Wall & Ceiling Solutions',
    description: 'Discover our premium collection of PVC wall and ceiling panels. Durable, stylish, and easy to install solutions for modern interiors.',
    keywords: ['PVC panels', 'wall panels', 'ceiling panels', 'interior design', 'home decor'],
    image: '/assets/og-image.jpg', // Make sure to add a default OG image
  };

  return (
    <>
      <SEO {...defaultSEOProps} {...pageProps.seo} />

      {/* Load jQuery first */}
      <Script
        src="/scripts/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => setJQueryLoaded(true)}
      />

      {/* Only load dependent scripts after jQuery is loaded */}
      {jQueryLoaded && (
        <>
          <Script src="/scripts/main.js" strategy="afterInteractive" />
          <Script src="/scripts/parallax.min.js" strategy="afterInteractive" />
          <Script src="/scripts/glide.min.js" strategy="afterInteractive" />
          <Script src="/scripts/magnific-popup.min.js" strategy="afterInteractive" />
          <Script src="/scripts/tab-accordion.js" strategy="afterInteractive" />
          <Script src="/scripts/imagesloaded.min.js" strategy="afterInteractive" />
          <Script src="/scripts/progress.js" strategy="afterInteractive" />
          <Script src="/scripts/custom.js" strategy="afterInteractive" />
          <Script src="/scripts/contact-form/contact-form.js" strategy="afterInteractive" />
        </>
      )}

      <Component {...pageProps} />
      <FloatingQuoteButton />
    </>
  );
}
