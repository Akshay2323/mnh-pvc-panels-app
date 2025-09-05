import "@/styles/bootstrap-grid.css";
import "@/styles/contact-form.css";
import "@/styles/content-box.css";
import "@/styles/glide.css";
import '@/styles/globals.css';
import "@/styles/magnific-popup.css";
import "@/styles/media-box.css";
import "@/styles/product-categories.css";
import "@/styles/style.css";
import "@/styles/skin2.css";
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);

  return (
    <>
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
    </>
  );
}
