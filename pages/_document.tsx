/* eslint-disable @next/next/no-css-tags */
import { SOCIAL_ICONS } from "@/utils/app.constants";
import { CommonContent, CommonContentResp } from "@/utils/app.model";
import { NAV_ITEMS_KEYS } from "@/utils/navigation";
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import Image from "next/image";
import Link from 'next/link';
import React, { Fragment } from "react";

interface MyDocumentProps extends DocumentInitialProps {
  commonContent: CommonContent;
  currentPath: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);

    let commonContent = new CommonContent();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/webSettings/commonContent`
      );
      const data: CommonContentResp = await res.json();
      commonContent = data.data || new CommonContent();
    } catch (err) {
      console.error("Error fetching common content:", err);
    }
    const currentPath = ctx.asPath || ctx.pathname;

    return {
      ...initialProps,
      commonContent,
      currentPath,
    };
  }

  render() {
    const { commonContent, currentPath } = this.props as MyDocumentProps;
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/media/icons/iconsmind/line-icons.min.css" />
        </Head>
        <body className="page-main">
          {/* <div id="preloader"></div> */}
          <nav className={`menu-classic menu-fixed ${currentPath === "/" ? "menu-transparent light" : ""} align-right`} data-menu-anima="fade-in">
            <div className="container">
              <div className="menu-brand">
                <Link href="/">
                  <Image
                    className="logo-default scroll-hide"
                    src="/assets/app-logo.webp"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                  <Image
                    className="logo-retina scroll-hide"
                    src="/assets/app-logo.webp"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                  <Image
                    className="logo-default scroll-show"
                    src="/assets/app-logo.webp"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                  <Image
                    className="logo-retina scroll-show"
                    src="/assets/app-logo.webp"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </Link>
              </div>
              <i className="menu-btn"></i>
              <div className="menu-cnt">
                <ul id="main-menu">
                  {commonContent?.menu?.map((item) => (
                    <Fragment key={item.id}>
                      {item.subMenu?.length > 0 ? (
                        <li className="dropdown">
                          <a>{item.name}</a>
                          <ul>
                            {item.subMenu?.map((subItem) => (
                              <li key={subItem.id}>
                                <Link href={`/product/${subItem.id}`}>{subItem.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={item.id}>
                          <Link href={NAV_ITEMS_KEYS?.[item.key]?.path}>{item.name}</Link>
                        </li>
                      )}
                    </Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          <Main />
          <NextScript />
          {/* <i className="scroll-top-btn scroll-top show" style={{ opacity: 1 }}></i> */}
          <footer className="light">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <h2>MNH PVC Panels</h2>
                  <p style={{ marginTop: "15px" }}>
                    {commonContent?.aboutUs?.sortContent}
                  </p>
                </div>
                <div className="col-lg-4">
                  <h2>Contacts</h2>
                  <ul className="icon-list icon-line">
                    <li>{commonContent?.contact?.address}</li>
                    <li>{commonContent?.contact?.email}</li>
                    <li>{commonContent?.contact?.phoneNo}</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="icon-links icon-social icon-links-grid social-colors">
                    {
                      commonContent?.socialLinks?.map((item) => (
                        <a className={item.key}
                          target="_blank"
                          href={item.link}
                          key={item.id}
                          rel="noopener noreferrer"
                        >
                          <i className={SOCIAL_ICONS[item.key]} />
                        </a>
                      ))
                    }
                  </div>
                  <hr className="space-sm" />
                  <p>Follow us on the social channels to stay tuned.</p>
                </div>
              </div>
            </div>
            <div className="footer-bar">
              <div className="container">
                <span> 2025 MNHPVC PANELS Developed By <a href="http://sktechnotion.com/" target="_blank">SK Technotion</a>.</span>
                <span><a href="#">Contact us</a> | <a href="#">Privacy policy</a></span>
              </div>
            </div>

          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;