import dynamic from "next/dynamic";
const Slider = dynamic(() => import("./components/Slider"), { ssr: false });
export default function Home() {
  return (
    <div>
      <div className="parallax-mirror ken-burn-center"
        style={{ visibility: "visible", zIndex: -100, position: "fixed", top: "-70px", left: 0, overflow: "hidden", transform: "translate3d(0px, 0px, 0px)", height: "1117px", width: "1512px" }}>
        <img className="parallax-slider" src="./assets/hd-1.jpg"
          style={{ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: "39px", left: 0, height: "850px", width: "1512px", maxWidth: "none" }} />
      </div>
      <div id="preloader" style={{ display: "none" }}></div>
      <nav className="menu-classic menu-fixed menu-transparent light align-right" data-menu-anima="fade-in">
        <div className="container">
          <div className="menu-brand">
            <a href="https://templates.themekit.dev/alpins/index.html#">
              <img className="logo-default scroll-hide"
                src="./assets/logo-white-blue.svg" alt="logo" />
              <img className="logo-retina scroll-hide"
                src="./assets/logo-white-blue.svg" alt="logo" />
              <img className="logo-default scroll-show"
                src="./assets/logo-white-solid.svg"
                alt="logo" />
              <img className="logo-retina scroll-show"
                src="./assets/logo-white-solid.svg"
                alt="logo" />
            </a>
          </div>
          <i className="menu-btn"></i>
          <div className="menu-cnt">
            <ul id="main-menu">
              <li className="dropdown">
                <a href="https://templates.themekit.dev/alpins/index.html#">Home</a>
                <ul>
                  <li><a href="https://templates.themekit.dev/alpins/index.html">Main</a></li>
                  <li><a href="https://templates.themekit.dev/alpins/index-2.html">Home two</a></li>
                  <li><a href="https://templates.themekit.dev/alpins/index-3.html">Home three</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="https://templates.themekit.dev/alpins/index.html#">Pages</a>
                <ul>
                  <li className="dropdown-submenu">
                    <a>About</a>
                    <ul>
                      <li><a href="https://templates.themekit.dev/alpins/about.html">About</a></li>
                      <li><a href="https://templates.themekit.dev/alpins/team.html">Team</a></li>
                      <li><a href="https://templates.themekit.dev/alpins/team-2.html">Team two</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a>Special</a>
                    <ul>
                      <li><a href="https://templates.themekit.dev/alpins/food.html">Food</a></li>
                      <li><a href="https://templates.themekit.dev/alpins/shelters.html">Shelters</a></li>
                      <li><a href="https://templates.themekit.dev/alpins/events.html">Events</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a>Others</a>
                    <ul>
                      <li><a href="https://templates.themekit.dev/alpins/prices.html">Prices</a></li>
                      <li><a href="https://templates.themekit.dev/alpins/history.html">History</a></li>
                      <li><a href="https://templates.themekit.dev/alpins/gallery.html">Gallery</a></li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://templates.themekit.dev/alpins/elements/components/buttons.html">Elements</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="https://templates.themekit.dev/alpins/treks.html">Treks</a>
                <ul style={{ transitionDuration: "0ms", animationDuration: "500ms", transitionTimingFunction: "ease", transitionDelay: "0ms" }}
                  className="fade-in">
                  <li><a href="https://templates.themekit.dev/alpins/treks.html">Treks</a></li>
                  <li><a href="https://templates.themekit.dev/alpins/treks-single.html">Single trek</a></li>
                </ul>
              </li>
              <li>
                <a href="https://templates.themekit.dev/alpins/blog.html">Blog</a>
              </li>
              <li>
                <a href="https://templates.themekit.dev/alpins/contacts.html">Contacts</a>
              </li>
            </ul>
            <div className="menu-right">
              <ul className="lan-menu">
                <li className="dropdown">
                  <a href="https://templates.themekit.dev/alpins/index.html#">
                    <img
                      src="./assets/en.png"
                      alt="lang" />EN
                  </a>
                  <ul>
                    <li>
                      <a href="https://templates.themekit.dev/alpins/index.html#">
                        <img
                          src="./assets/it.png"
                          alt="lang" />IT
                      </a>
                    </li>
                    <li>
                      <a href="https://templates.themekit.dev/alpins/index.html#">
                        <img
                          src="./assets/es.png"
                          alt="lang" />ES
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Slider />
        {/* <section className="section-base">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="slider glide controls-right controls-out glide--ltr glide--carousel glide--swipeable"
                  data-options="type:carousel,nav:true,perView:2,perViewSm:1,gap:30,controls:out">
                  <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides"
                      style={{ transition: "transform cubic-bezier(0.165, 0.84, 0.44, 1)", width: "3255px", transform: "translate3d(-1095px, 0px, 0px)" }}>
                      <li className="glide__slide glide__slide--clone"
                        style={{ width: "335px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $49</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-5.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Bianco Excursion</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>3</span></div>
                              <div><span>Group size</span><span>10</span></div>
                              <div><span>Difficulty</span><span>Easy</span></div>
                            </div>
                            <p>
                              Monte bianco is a mountain located in the deep nature and rivers.
                            </p>
                            <div className="bottom-info">
                              Monte bianco, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide glide__slide--clone"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $89</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-6.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Civetta Trekking</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>5</span></div>
                              <div><span>Group size</span><span>5</span></div>
                              <div><span>Difficulty</span><span>Medium</span></div>
                            </div>
                            <p>
                              Civetta is a mountain located in alps and is one of the most famous.
                            </p>
                            <div className="bottom-info">
                              Civetta, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide glide__slide--clone"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $89</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-7.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Nevegal Trekking</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>1</span></div>
                              <div><span>Group size</span><span>15</span></div>
                              <div><span>Difficulty</span><span>Medium</span></div>
                            </div>
                            <p>
                              Nevegal is a mountain near a great and friendly mountain village.
                            </p>
                            <div className="bottom-info">
                              Civetta, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide glide__slide--active"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $49</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-5.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Bianco Excursion</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>3</span></div>
                              <div><span>Group size</span><span>10</span></div>
                              <div><span>Difficulty</span><span>Easy</span></div>
                            </div>
                            <p>
                              Monte bianco is a mountain located in the deep nature and rivers.
                            </p>
                            <div className="bottom-info">
                              Monte bianco, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $89</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-6.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Civetta Trekking</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>5</span></div>
                              <div><span>Group size</span><span>5</span></div>
                              <div><span>Difficulty</span><span>Medium</span></div>
                            </div>
                            <p>
                              Civetta is a mountain located in alps and is one of the most famous.
                            </p>
                            <div className="bottom-info">
                              Civetta, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $89</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-7.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Nevegal Trekking</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>1</span></div>
                              <div><span>Group size</span><span>15</span></div>
                              <div><span>Difficulty</span><span>Medium</span></div>
                            </div>
                            <p>
                              Nevegal is a mountain near a great and friendly mountain village.
                            </p>
                            <div className="bottom-info">
                              Civetta, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide glide__slide--clone"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $49</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-5.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Bianco Excursion</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>3</span></div>
                              <div><span>Group size</span><span>10</span></div>
                              <div><span>Difficulty</span><span>Easy</span></div>
                            </div>
                            <p>
                              Monte bianco is a mountain located in the deep nature and rivers.
                            </p>
                            <div className="bottom-info">
                              Monte bianco, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide glide__slide--clone"
                        style={{ width: "335px", marginLeft: "15px", marginRight: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $89</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-6.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Civetta Trekking</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>5</span></div>
                              <div><span>Group size</span><span>5</span></div>
                              <div><span>Difficulty</span><span>Medium</span></div>
                            </div>
                            <p>
                              Civetta is a mountain located in alps and is one of the most famous.
                            </p>
                            <div className="bottom-info">
                              Civetta, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="glide__slide glide__slide--clone"
                        style={{ width: "335px", marginLeft: "15px" }}>
                        <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                          <div className="extra-field">From $89</div>
                          <a href="https://templates.themekit.dev/alpins/treks-single.html"
                            className="img-box"><img
                              src="./assets/image-7.jpg"
                              alt="" style={{}} />
                          </a>
                          <div className="caption">
                            <h2>Nevegal Trekking</h2>
                            <div className="cnt-info">
                              <div><span>Days</span><span>1</span></div>
                              <div><span>Group size</span><span>15</span></div>
                              <div><span>Difficulty</span><span>Medium</span></div>
                            </div>
                            <p>
                              Nevegal is a mountain near a great and friendly mountain village.
                            </p>
                            <div className="bottom-info">
                              Civetta, Alpes, Italy
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="glide__bullets" data-glide-el="controls[nav]"><button
                    className="glide__bullet glide__bullet--active" data-glide-dir="=0"></button><button
                      className="glide__bullet" data-glide-dir="=1"></button><button className="glide__bullet"
                        data-glide-dir="=2"></button></div>
                </div>
              </div>
              <div className="col-lg-4">
                <hr className="space-sm visible-sm" />
                <div className="title">
                  <h2>Latest trips</h2>
                  <p>Explore the unexplored world</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt
                  utlabore et dolore magna aliqua.
                  Utenim ad minim veniam quiso.
                </p>
                <a href="https://templates.themekit.dev/alpins/contacts.html" className="btn btn-circle btn-xs">Join
                  us now</a>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center align-left-md">
              <h2>About us</h2>
              <p>We live for the nature</p>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do esectetur adipiscing elitsed do
                  eiusmoiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam quis nostrud exercitation ullamco laboris scing elitsed do esectetur
                  adipiscing elite nature.
                </p>
              </div>
              <div className="col-lg-3 no-margin-md">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing el adipiscing sscing elitsed do esectetur
                  adipiscing eliectetur adipiscing elitsed do eiusmoelitsed do eiusmod tempor incididusmod
                  titsed do eiusmod tempore.
                </p>
                <hr className="space-sm" />
                <a href="https://templates.themekit.dev/alpins/about.html" className="btn-text">Read more</a>
              </div>
              <div className="col-lg-6">
                <ul className="accordion-list" data-open="1">
                  <li className="active">
                    <a href="https://templates.themekit.dev/alpins/index.html#">Our mountains and our
                      location</a>
                    <div className="content" style={{ display: "block", height: "90px" }}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor
                        incididunt utlabore et dolore magna aliqua.
                        Utenim ad minim veniam quis nostrud exercitation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="https://templates.themekit.dev/alpins/index.html#">About our treks and
                      trips</a>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor
                        incididunt utlabore et dolore magna aliqua.
                        Utenim ad minim veniam quis nostrud exercitation .
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="https://templates.themekit.dev/alpins/index.html#">About our team and
                      guests</a>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor
                        incididunt utlabore et dolore magna aliqua.
                        Utenim ad minim veniam quis nostrud exercitation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-slider alpins-slider light section-full-width-left" data-slider-parallax="true"
          data-interval="0">
          <div className="background-slider">
            <div className="active" style={{ backgroundImage: "url(media/hd-3.jpg)" }}></div>
            <div style={{ backgroundImage: "url(media/hd-4.jpg)" }}></div>
            <div style={{ backgroundImage: "url(media/hd-5.jpg)" }}></div>
            <div style={{ backgroundImage: "url(media/hd-6.jpg)" }}></div>
            <div style={{ backgroundImage: "url(media/hd-7.jpg)" }}></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="slider glide controls-out glide--ltr glide--slider glide--swipeable"
                  data-options="type:slider,nav:true,arrows:true,perView:3,perViewLg:2,perViewSm:1,gap:30,controls:out">
                  <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides"
                      style={{ transition: "transform cubic-bezier(0.165, 0.84, 0.44, 1)", width: "1180px", transform: "translate3d(0px, 0px, 0px)" }}>
                      <li className="glide__slide glide__slide--active"
                        style={{ width: "212px", marginRight: "15px" }}>
                        <a href="https://templates.themekit.dev/alpins/treks-single.html"
                          className="media-box media-box-reveal" data-anima="scale" data-trigger="hover">
                          <img className="anima"
                            src="./assets/long-4.jpg"
                            alt="" style={{}} />
                          <div className="caption">
                            <h2>Bianco</h2>
                            <div className="extra-field">From $95</div>
                            <h3>Alpes, Italy</h3>
                            <p>
                              Lorem ipsum dolore consectetur adipisicing e ididunto pertinole.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide"
                        style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                        <a href="https://templates.themekit.dev/alpins/treks-single.html"
                          className="media-box media-box-reveal" data-anima="scale" data-trigger="hover">
                          <img className="anima"
                            src="./assets/long-1.jpg"
                            alt="" style={{}} />
                          <div className="caption">
                            <h2>Civetta</h2>
                            <div className="extra-field">From $95</div>
                            <h3>Dolomiti, Italy</h3>
                            <p>
                              Lorem ipsum dolore consectetur adipisicing e ididunto pertinole.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide"
                        style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                        <a href="https://templates.themekit.dev/alpins/treks-single.html"
                          className="media-box media-box-reveal" data-anima="scale" data-trigger="hover">
                          <img className="anima"
                            src="./assets/long-7.jpg"
                            alt="" style={{}} />
                          <div className="caption">
                            <h2>Teton</h2>
                            <div className="extra-field">From $150</div>
                            <h3>Wyoming, USA</h3>
                            <p>
                              Lorem ipsum dolore consectetur adipisicing e ididunto pertinole.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide"
                        style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                        <a href="https://templates.themekit.dev/alpins/treks-single.html"
                          className="media-box media-box-reveal" data-anima="scale" data-trigger="hover">
                          <img className="anima"
                            src="./assets/long-2.jpg"
                            alt="" style={{}} />
                          <div className="caption">
                            <h2>Corsica</h2>
                            <div className="extra-field">From $50</div>
                            <h3>Corsica, France</h3>
                            <p>
                              Lorem ipsum dolore consectetur adipisicing a didunto pertinole.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide" style={{ width: "212px", marginLeft: "15px" }}>
                        <a href="https://templates.themekit.dev/alpins/treks-single.html"
                          className="media-box media-box-reveal" data-anima="scale" data-trigger="hover">
                          <img className="anima"
                            src="./assets/long-6.jpg"
                            alt="" style={{}} />
                          <div className="caption">
                            <h2>Norda</h2>
                            <div className="extra-field">From $95</div>
                            <h3>Monte Rosa, Italy</h3>
                            <p>
                              Lorem ipsum dolore consectetur adipisicing a didunto pertinole.
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls"><button
                    className="glide__arrow glide__arrow--left" data-glide-dir="&lt;"></button><button
                      className="glide__arrow glide__arrow--right" data-glide-dir="&gt;"></button></div>
                  <div className="glide__bullets" data-glide-el="controls[nav]"><button
                    className="glide__bullet glide__bullet--active" data-glide-dir="=0"></button><button
                      className="glide__bullet" data-glide-dir="=1"></button><button className="glide__bullet"
                        data-glide-dir="=2"></button><button className="glide__bullet"
                          data-glide-dir="=3"></button><button className="glide__bullet"
                            data-glide-dir="=4"></button></div>
                </div>
              </div>
              <div className="col-lg-6" data-anima="fade-left" data-time="2000" style={{ opacity: 0 }}>
                <h1 className="text-lg text-uppercase text-black">The treks of our team</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiure consectetur adipisicing a
                  didunto persmo.
                </p>
                <a href="https://templates.themekit.dev/alpins/treks.html" className="btn btn-sm btn-circle">All
                  treks</a> <a href="https://templates.themekit.dev/alpins/team.html"
                    className="btn btn-sm btn-circle btn-border">The team</a>
                <hr className="space hidden-md" />
              </div>
            </div>
          </div>
        </section> */}
        <section className="section-base">
          <div className="container">
            <div className="title align-center">
              <h2>Top service</h2>
              <p>We provide the best experience</p>
            </div>
            <table className="table table-grid table-border table-6-md">
              <tbody>
                <tr>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-foot-2"></i>
                      <div className="caption">
                        <h3>Experienced team</h3>
                        <p>We always lived inside our amazing nature</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-icq"></i>
                      <div className="caption">
                        <h3>Easy joining</h3>
                        <p>Contact us and in 2 minutes you&apos;re booked</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-landscape"></i>
                      <div className="caption">
                        <h3>Expert hikers</h3>
                        <p>Our mountans teached us everything we know</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-forest"></i>
                      <div className="caption">
                        <h3>Secret locations</h3>
                        <p>Discover hidden natural places with our tours</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-flag-4"></i>
                      <div className="caption">
                        <h3>Europe locations</h3>
                        <p>We provide trips on varous europe countries</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-map2"></i>
                      <div className="caption">
                        <h3>Visit us</h3>
                        <p>We are in the north of italy near the mountains</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-globe"></i>
                      <div className="caption">
                        <h3>United States</h3>
                        <p>Once a year join us to the other part of the world</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-rainbow-2"></i>
                      <div className="caption">
                        <h3>Great waterfall</h3>
                        <p>Our excursions will bring you to great waterfalls</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center">
              <h2>Newsletter</h2>
              <p>Subscribe now to our newsletter</p>
            </div>
            <form data-anima="fade-in" data-time="1000"
              action="https://templates.themekit.dev/alpins/HTWF/scripts/php/contact-form.php"
              className="form-box form-ajax form-inline align-center" method="post" data-email="example@domain.com"
              style={{ opacity: 0 }}>
              <div className="row">
                <div className="col-lg-4">
                  <input id="name" name="name" placeholder="Name" type="text" className="input-text" required={true} />
                </div>
                <div className="col-lg-4">
                  <input id="email" name="email" placeholder="Email" type="email" className="input-text"
                    required={true} />
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-sm" type="submit">Subscribe</button>
                </div>
                <div className="col-lg-12">
                  <div className="form-checkbox">
                    <input type="checkbox" id="check" name="check" value="check" required={true} />
                    <label htmlFor="check">By click subscribe you accept the terms of service and the privacy
                      policy.</label>
                  </div>
                </div>
              </div>
              <div className="success-box">
                <div className="alert alert-success">Congratulations. You&apos;re now a subscriber!</div>
              </div>
              <div className="error-box">
                <div className="alert alert-warning">Error, please retry. Your message has not been sent.</div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3>Alpins</h3>
              <p>Somewhere between the bottom of the climb and the summit is the answer to the mystery why we
                climb.</p>
            </div>
            <div className="col-lg-4">
              <h3>Contacts</h3>
              <ul className="icon-list icon-line">
                <li>San Pellegrino, BG, Italy</li>
                <li>hello@example.com</li>
                <li>02 123 333 444</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="icon-links icon-social icon-links-grid social-colors">
                <a className="facebook"><i className="icon-facebook"></i></a>
                <a className="twitter"><i className="icon-twitter"></i></a>
                <a className="instagram"><i className="icon-instagram"></i></a>
                <a className="google"><i className="icon-google"></i></a>
              </div>
              <hr className="space-sm" />
              <p>Subscribe to our newsletter of follow us on the social channels to stay tuned.</p>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container">
            <span> 2019 Alpins - Hiking &amp; Outdoor Template Handmade by <a href="https://schiocco.com/"
              target="_blank">schiocco.com</a>.</span>
            <span><a href="https://templates.themekit.dev/alpins/contacts.html">Contact us</a> | <a
              href="https://templates.themekit.dev/alpins/index.html#">Privacy policy</a></span>
          </div>
        </div>
      </footer>

    </div>
  );
}
