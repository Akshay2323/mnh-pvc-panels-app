import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/bootstrap-grid.css" />
        <link rel="stylesheet" href="/assets/style.css" />
        <link rel="stylesheet" href="/assets/glide.css" />
        <link rel="stylesheet" href="/assets/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/content-box.css" />
        <link rel="stylesheet" href="/assets/contact-form.css" />
        <link rel="stylesheet" href="/assets/media-box.css" />
        <link rel="stylesheet" href="/assets/skin.css" />
        <link rel="stylesheet" href="/assets/line-icons.min.css" />
        <link rel="stylesheet" href="/assets/sidebar.css" />
        {/* jQuery - Load in _document for plugins that depend on it */}
        <script src="/assets/jquery.min.js" defer></script>
        <script src="/assets/main.js" defer></script>
        <script src="/assets/imagesloaded.min.js" defer></script>
        <script src="/assets/glide.min.js" defer></script>
        <script src="/assets/magnific-popup.min.js" defer></script>
        <script src="/assets/progress.js" defer></script>
        <script src="/assets/parallax.min.js" defer></script>
        <script src="/assets/tab-accordion.js" defer></script>
        <script src="/assets/sidebar.js" defer></script>
        <script src="/assets/custom.js" defer></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
