import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Load scripts with appropriate strategies */}
      {/* <Script src="/assets/imagesloaded.min.js" strategy="afterInteractive" />
      <Script src="/assets/glide.min.js" strategy="afterInteractive" />
      <Script src="/assets/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/progress.js" strategy="afterInteractive" />
      <Script src="/assets/parallax.min.js" strategy="afterInteractive" />
      <Script src="/assets/tab-accordion.js" strategy="afterInteractive" />
      <Script src="/assets/sidebar.js" strategy="afterInteractive" />
      <Script src="/assets/custom.js" strategy="afterInteractive" /> */}
      <Component {...pageProps} />
    </>
  );
}
