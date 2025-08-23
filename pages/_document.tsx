/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/media/icons/iconsmind/line-icons.min.css" />
      </Head>
      <body className="page-main">
        <div id="preloader"></div>
        <nav className="menu-classic menu-fixed menu-transparent light align-right" data-menu-anima="fade-in">
          <div className="container">
            <div className="menu-brand">
              <a href="#">
                <img className="logo-default scroll-hide" src="assets/mnh-logo__1_-removebg-preview-1.webp" width="280" height="300" alt="logo" style={{ maxHeight: "160%" }}/>
                <img className="logo-retina scroll-hide" src="assets/mnh-logo__1_-removebg-preview-1.webp"  width="280" height="300" alt="logo" style={{ maxHeight: "160%" }}/>
                <img className="logo-default scroll-show" src="assets/mnh-logo__1_-removebg-preview-1.webp"  width="180" height="180" alt="logo" style={{ maxHeight: "135%" }}/>
                <img className="logo-retina scroll-show" src="assets/mnh-logo__1_-removebg-preview-1.webp"  width="280" height="300" alt="logo" style={{ maxHeight: "160%" }}/>
              </a>
            </div>
            <i className="menu-btn"></i>
            <div className="menu-cnt">
              <ul id="main-menu">
                <li className="dropdown">
                  <a href="#">Home</a>
                  {/* <ul>
                    <li><a href="index.html">Main</a></li>
                    <li><a href="index-2.html">Home two</a></li>
                    <li><a href="index-3.html">Home three</a></li>
                  </ul> */}
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="dropdown">
                  <a href="#">Manufacturer</a>
                  {/* <ul>
                    <li className="dropdown-submenu">
                      <a>About</a>
                      <ul>
                        <li><a href="about.html">About</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="team-2.html">Team two</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a>Special</a>
                      <ul>
                        <li><a href="food.html">Food</a></li>
                        <li><a href="shelters.html">Shelters</a></li>
                        <li><a href="events.html">Events</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a>Others</a>
                      <ul>
                        <li><a href="prices.html">Prices</a></li>
                        <li><a href="history.html">History</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements/components/buttons.html">Elements</a>
                    </li>
                  </ul> */}
                </li>
                <li className="dropdown">
                  <a href="treks.html">Products</a>
                  <ul>
                    <li><a href="treks.html">PVC Wall Panels</a></li>
                    <li><a href="treks-single.html">UV Sheets</a></li>
                    <li><a href="treks-single.html">Louvers</a></li>
                    <li><a href="treks-single.html">Fluted Panels</a></li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog.html">Gallary</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
              </ul>
              <div className="menu-right">
                <ul className="lan-menu">
                  <li className="dropdown">
                    <a href="#"><img src="assets/en.png" />EN </a>
                    <ul>
                      <li><a href="#"><img src="assets/it.png" />IT</a></li>
                      <li><a href="#"><img src="assets/es.png" />ES</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Main />

        {/* Next.js scripts */}
        <NextScript />

        {/* Third-party / custom scripts */}
        <Script src="/assets/themekit/scripts/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/themekit/scripts/main.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/imagesloaded.min.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/glide.min.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/progress.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/parallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/tab-accordion.js" strategy="afterInteractive" />
        <Script src="/assets/themekit/scripts/custom.js" strategy="afterInteractive" />
      </body>
    </Html>
  );
}
