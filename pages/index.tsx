// import dynamic from "next/dynamic";
// const Slider = dynamic(() => import("./components/Slider"), { ssr: false });
export default function Home() {
  return (
    <div>

      <main>
        <section className="section-image section-full-width-right light ken-burn-center" data-parallax="scroll" data-image-src="/assets/hd-1.jpg">
          <div className="container">
            <hr className="space-lg" />
            <hr className="space-sm" />
            <div className="row">
              <div className="col-lg-6">
                <h1 data-anima={"fade-left"} data-time="2000" className="text-lg text-uppercase text-black">Amazing mountain to explore</h1>
                <hr className="space-lg" />
                <hr className="space-sm hidden-lg" />
                <ul className="slider width-50" data-options={"type:slider,perView:1"}>
                  <li>
                    <p className="quote">
                      Do not follow where the path may lead. Go instead where there is no path and leave a trail.
                      <span className="quote-author">Ralph Emerson</span>
                    </p>
                  </li>
                  <li>
                    <p className="quote">
                      When everything feels like an uphill struggle. Just wait and think of the view from the top.
                      <span className="quote-author">Wislawa Symborska</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <hr className="space-xs" />
                <div className="counter counter-vertical counter-icon">
                  <div>
                    <h3>Altitude</h3>
                    <div className="value">
                      <span className="text-md" data-to="1650" data-speed="5000">1650</span>
                      <span>m</span>
                    </div>
                  </div>
                </div>
                <hr className="space-sm" />
                <div className="counter counter-vertical counter-icon">
                  <div>
                    <h3>Tracks</h3>
                    <div className="value">
                      <span className="text-md" data-to="7" data-speed="5000">7</span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <hr className="space-sm" />
                <div className="counter counter-vertical counter-icon">
                  <div>
                    <h3>Tourists / year</h3>
                    <div className="value">
                      <span className="text-md" data-to="2000" data-speed="5000">2000</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <hr className="space" />
                <ul className="slider" data-options="type:carousel,nav:true,perView:3,perViewLg:2,perViewSm:1,gap:30,controls:out,autoplay:3000">
                  <li>
                    <a className="img-box btn-video lightbox" href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ" data-lightbox-anima="fade-top">
                      <img src="/assets/image-1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="img-box lightbox" href="/assets/image-2.jpg" data-lightbox-anima="fade-top">
                      <img src="/assets/image-2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="img-box lightbox" href="/assets/image-3.jpg" data-lightbox-anima="fade-top">
                      <img src="/assets/image-3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="img-box lightbox" href="/assets/image-4.jpg" data-lightbox-anima="fade-top">
                      <img src="/assets/image-4.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="space-lg" />
          </div>
        </section>
        <section className="section-base">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul className="slider controls-right" data-options="type:carousel,nav:true,perView:2,perViewSm:1,gap:30,controls:out">
                  <li>
                    <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                      <div className="extra-field">From $49</div>
                      <a href="treks-single.html" className="img-box">
                        <img src="/assets/image-5.jpg" alt="" />
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
                  <li>
                    <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                      <div className="extra-field">From $89</div>
                      <a href="treks-single.html" className="img-box">
                        <img src="/assets/image-6.jpg" alt="" />
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
                  <li>
                    <div className="cnt-box cnt-box-info" data-href="treks-single.html">
                      <div className="extra-field">From $89</div>
                      <a href="treks-single.html" className="img-box">
                        <img src="/assets/image-3.jpg" alt="" />
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
              <div className="col-lg-4">
                <hr className="space-sm visible-sm" />
                <div className="title">
                  <h2>Latest trips</h2>
                  <p>Explore the unexplored world</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam quiso.
                </p>
                <a href="contacts.html" className="btn btn-circle btn-xs">Join us now</a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center align-left-md">
              <h2>About us</h2>
              <p>We live for the nature</p>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam quis nostrud exercitation ullamco laboris scing elitsed do esectetur adipiscing elite nature.
                </p>
              </div>
              <div className="col-lg-3 no-margin-md">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing el adipiscing sscing elitsed do esectetur adipiscing eliectetur adipiscing elitsed do eiusmoelitsed do eiusmod tempor incididusmod titsed do eiusmod tempore.
                </p>
                <hr className="space-sm" />
                <a href="about.html" className="btn-text">Read more</a>
              </div>
              <div className="col-lg-6">
                <ul className="accordion-list" data-open="1">
                  <li>
                    <a href="#">Our mountains and our location</a>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                        Utenim ad minim veniam quis nostrud exercitation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">About our treks and trips</a>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                        Utenim ad minim veniam quis nostrud exercitation .
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">About our team and guests</a>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                        Utenim ad minim veniam quis nostrud exercitation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section-slider alpins-slider light section-full-width-left" data-slider-parallax="true" data-interval="0">
          <div className="background-slider">
            <div className="active" style={{ backgroundImage: 'url(/assets/long-1.jpg)' }}></div>
            <div style={{ backgroundImage: "url(/assets/long-2.jpg)" }}></div>
            <div style={{ backgroundImage: "url(/assets/long-4.jpg)" }}></div>
            <div style={{ backgroundImage: "url(/assets/long-6.jpg)" }}></div>
            <div style={{ backgroundImage: "url(/assets/long-7.jpg)" }}></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="slider" data-options="type:slider,nav:true,arrows:true,perView:3,perViewLg:2,perViewSm:1,gap:30,controls:out">
                  <li>
                    <a href="treks-single.html" className="media-box media-box-reveal" data-anima={"scale"} data-trigger="hover">
                      <img className="anima" src="/assets/long-4.jpg" alt="" />
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
                  <li>
                    <a href="treks-single.html" className="media-box media-box-reveal" data-anima={"scale"} data-trigger="hover">
                      <img className="anima" src="/assets/long-1.jpg" alt="" />
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
                  <li>
                    <a href="treks-single.html" className="media-box media-box-reveal" data-anima={"scale"} data-trigger="hover">
                      <img className="anima" src="/assets/long-7.jpg" alt="" />
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
                  <li>
                    <a href="treks-single.html" className="media-box media-box-reveal" data-anima={"scale"} data-trigger="hover">
                      <img className="anima" src="/assets/long-2.jpg" alt="" />
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
                  <li>
                    <a href="treks-single.html" className="media-box media-box-reveal" data-anima={"scale"} data-trigger="hover">
                      <img className="anima" src="/assets/long-6.jpg" alt="" />
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
              <div className="col-lg-6" data-anima={"fade-left"} data-time="2000">
                <h1 className="text-lg text-uppercase text-black">The treks of our team</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiure consectetur adipisicing a didunto persmo.
                </p>
                <a href="treks.html" className="btn btn-sm btn-circle">All treks</a> <a href="team.html" className="btn btn-sm btn-circle btn-border">The team</a>
                <hr className="space hidden-md" />
              </div>
            </div>
          </div>
        </section>
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
            <form data-anima={"fade-in"} data-time="1000" action="HTWF/scripts/php/contact-form.php" className="form-box form-ajax form-inline align-center" method="post" data-email="example@domain.com">
              <div className="row">
                <div className="col-lg-4">
                  <input id="name" name="name" placeholder="Name" type="text" className="input-text" required />
                </div>
                <div className="col-lg-4">
                  <input id="email" name="email" placeholder="Email" type="email" className="input-text" required />
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-sm" type="submit">Subscribe</button>
                </div>
                <div className="col-lg-12">
                  <div className="form-checkbox">
                    <input type="checkbox" id="check" name="check" value="check" required />
                    <label htmlFor="check">By click subscribe you accept the terms of service and the privacy policy.</label>
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
              <p>Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb.</p>
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
            <span>© 2019 Alpins - Hiking & Outdoor Template Handmade by <a href="https://schiocco.com" target="_blank">schiocco.com</a>.</span>
            <span><a href="contacts.html">Contact us</a> | <a href="#">Privacy policy</a></span>
          </div>
        </div>

      </footer>
    </div>
  );
}
