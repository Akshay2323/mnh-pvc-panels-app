// import dynamic from "next/dynamic";
// const About = dynamic(() => import("./components/About"), { ssr: false });
import productData from "../data/product.json";
export default function Home() {
  return (
    <div>

      <main>
        <section className="section-video section-full-width-right light">
          <video autoPlay muted loop>
            <source src="/assets/MNH-Full-intro-Video-V2.mp4" type="video/mp4" />
          </video>
          <div className="container">
            <hr className="space-lg" />
            <hr className="space-sm" />
            <hr className="space-sm" />
            <hr className="space-lg" />
            <hr className="space-lg" />
            <hr className="space-lg" />
            <hr className="space-lg" />
          </div>
        </section>

        {/* <section className="section-base">
          <div className="container">
            <hr className="space-lg" />
            <hr className="space-sm" />
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
                  <h2>Our Products</h2>
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
        </section> */}

        {/* Product Categories Section */}
        <section className="section-base">
          <div className="container">
            <div className="title align-center">
              <h2>Our Product Categories</h2>
              <p>Explore our premium PVC solutions</p>
            </div>

            {/* PVC Wall Panels */}
            {
              productData.map((product) => (
                <div className="category-section" key={product.id}>
                  <div className="d-flex align-items-center justify-content-between px-1 mb-3">
                    <h3 className="category-title flex-grow-1">{product.name}</h3>
                    <a href="#" className="btn view-all-btn">View All</a>
                  </div>
                  <ul className="slider" data-options="type:carousel,nav:true,perView:5,perViewLg:4,perViewMd:3,perViewSm:2,perViewXs:1,gap:15,controls:out,animationDuration:600">
                    {
                      product.products.map((item) => (
                        <li key={item.id}>
                          <div className="product-card">
                            <div className="img-box">
                              <img src={'/assets/1-1-scaled.jpg'} alt={item.name} />
                            </div>
                            <div className="product-info">
                              <h4>{item.name}</h4>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </section>

        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center align-left-md">
              <h2>About us</h2>
              <p>Our Company Profile</p>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p>
                  Our MNH PVC company provides timely assistance to customers and addresses their inquiries effectively. We provide all types of PVC materials of good quality. We assure you that PVC furniture for your home, office, or company will be beneficial, as well as cheap, good, and fast in your price.
                </p>
              </div>
              <div className="col-lg-3 no-margin-md">
                <p>
                  Since 2022, we have become a trusted name for premium PVC wall panels, false ceilings, UV marble sheets, and louvers. PVC panels will be useful in furniture like living rooms, bedrooms, kitchen points, and TV units in your home, as well as in all furniture like cabinet points, director rooms, staff rooms, and meeting rooms in the office.
                </p>
                <hr className="space-sm" />
                <a href="about.html" className="btn-text">Read more</a>
              </div>
              <div className="col-lg-6">
                <ul className="accordion-list" data-open="1">
                  <li>
                    <a href="#">Our Experts</a>
                    <div className="content">
                      <p>
                        Our PVC products are made with high-quality and advanced technology. Their materials are renowned for their durability, exquisite finishes, and elegant designs. We don’t just provide PVC panels; we create new experiences that transform spaces with style and functionality.
                      </p>
                      <p>
                        Our team provides you with fast and complete support. We guide customers and save them considerable time by providing solutions to all furniture-related problems.
                      </p>
                      <p>
                        We know that affordability is a major concern for many of our customers. By maintaining strong partnerships with suppliers and operating efficiently, we can provide high-quality products at affordable prices to a wide range of customers.
                      </p>
                      <p>
                        We have set a new benchmark for PVC profiles with highly creative designs. At a time when most customers are preferring PVC, offering those products makes MNH PVC panels stand out among the competitors and suit their needs.
                      </p>
                      <p>
                        Time is a precious commodity for our customers. We make the purchasing process as simple and efficient as possible so that customers can quickly find what they need and receive and use their products on time.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">Advantages of PVC Panels</a>
                    <div className="content">
                      <ul>
                        <li>Waterproof</li>
                        <li>Maintenance-Free</li>
                        <li>Termite-Proof</li>
                        <li>Fire Retardant</li>
                        <li>Lightweight</li>
                        <li>Easy to Install</li>
                        <li>Stylish</li>
                        <li>Durable</li>
                        <li>Available in Various Designs and Colors</li>
                      </ul>
                      <p>Follow us on Instagram: <a href="https://www.instagram.com/mnh_pvc_panel/">https://www.instagram.com/mnh_pvc_panel/</a></p>
                      <p>Facebook:&nbsp;<a href="https://www.facebook.com/mnhpanels">https://www.facebook.com/mnhpanels</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-slider alpins-slider section-full-width-left" data-slider-parallax="true" data-interval="0">

          <div className="background-slider">
            <div style={{ backgroundImage: "url(/assets/hd-3.jpg)" }} className="remove-active"></div>
            <div style={{ backgroundImage: "url(/assets/hd-4.jpg)" }} className="active"></div>
            <div style={{ backgroundImage: "url(/assets/hd-5.jpg)" }} className="active remove-active"></div>
            <div style={{ backgroundImage: "url(/assets/hd-6.jpg)" }} className="remove-active"></div>
            <div style={{ backgroundImage: "url(/assets/hd-7.jpg)" }} className="remove-active"></div>
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
        </section> */}
        <section className="section-base">
          <div className="container">
            <div className="title align-center">
              <h2>Why you should use our products</h2>
              <p>We provide the best quality products</p>
            </div>
            <table className="table table-grid table-border table-6-md">
              <tbody>
                <tr>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-dollar-sign"></i>
                      <div className="caption">
                        <h3>Cost-effective</h3>
                        <p>Our products are cost-effective and provide long-lasting solutions</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-wave-2"></i>
                      <div className="caption">
                        <h3>Water Resistant</h3>
                        <p>Our products are water-resistant and durable</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-fire-flame2"></i>
                      <div className="caption">
                        <h3>Hit Resistant</h3>
                        <p>Our products are hit-resistant and durable</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-medical-sign"></i>
                      <div className="caption">
                        <h3>Hygienic</h3>
                        <p>Our products are hygienic and durable</p>
                      </div>
                    </div>
                  </td>
                  {/* </tr>
                <tr> */}
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-david-star"></i>
                      <div className="caption">
                        <h3>Versatility</h3>
                        <p>Our products are versatile and durable</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="icon-box icon-box-top align-center">
                      <i className="im-ear"></i>
                      <div className="caption">
                        <h3>Sound Resistant</h3>
                        <p>Our products are sound-resistant and durable</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* <section className="section-base section-color">
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
        </section> */}
      </main>
      <footer className="light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3>MNH</h3>
              <p>At MNH, we offer exceptional service, competitive pricing, and timely delivery. Explore our high-quality products and services, and contact us for any inquiries or personalized support!</p>
            </div>
            <div className="col-lg-4">
              <h3>Contacts</h3>
              <ul className="icon-list icon-line">
                <li>Vill. Bharo, Channo-Nabha Road, Distt. Sangrur (Pb.)</li>
                <li>mnhpvcpanels@gmail.com</li>
                <li>+91 7696676559</li>
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
              <p>Follow us on the social channels to stay tuned.</p>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container">
            <span>© 2025 MNHPVC PANELS Developed By <a href="http://sktechnotion.com/" target="_blank">SK Technotion</a>.</span>
            <span><a href="#">Contact us</a> | <a href="#">Privacy policy</a></span>
          </div>
        </div>

      </footer>
    </div>
  )
}