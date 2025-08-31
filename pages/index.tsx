/* eslint-disable @next/next/no-img-element */
// import dynamic from "next/dynamic";
// const About = dynamic(() => import("./components/About"), { ssr: false });

import productData from "../data/product.json";
import clientData from "../data/clients.json";
import infrastructureData from "../data/infrastructure.json";
export default function Home() {
  return (
    <div>

      <main>
        <section className="video-container">
          <video autoPlay muted loop playsInline className="responsive-video">
            <source src="/assets/MNH-Full-intro-Video-V2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="section-base">
          <div className="container">
            <div className="title align-center">
              <h2>Our Products Categories</h2>
              <p>Explore our premium PVC solutions</p>
            </div>
            <div
              className="slider"
              data-options="type:carousel,arrows:true,perView:4,perViewLg:3,perViewMd:3,perViewSm:2,perViewXs:1,gap:15,controls:out,animationDuration:600,rewind:false,bound:false">
              {
                productData.map((item) => (
                  <div key={item.id} className="category-box">
                    <img src={'/assets/long-9.jpg'} alt={item.name} />
                    <div className="category-content">
                      <h3 className="title">{item.name}</h3>
                    </div>
                  </div>
                ))
              }
            </div>
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

        <section className="section-base">
          <div className="container">
            <div className="title align-center">
              <h2>Our Clients</h2>
              <p>Trusted by leading brands for innovative PVC solutions.</p>
            </div>
            <div className="client-details">
              {
                clientData.map((item) => (
                  <div key={item.id} className="client-box">
                    <img src={item.img} alt={item.name} />
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section className="section-base section-color">
          <div className="container">
            <div className="title align-center">
              <h2>Strengthening Connections Nationwide</h2>
              <p>Stocking at strategic hotspots to ensure timely delivery everywhere.</p>
            </div>
            <div
              className="slider"
              data-options="type:carousel,arrows:true,perView:4,perViewLg:3,perViewMd:3,perViewSm:2,perViewXs:1,gap:15,controls:out,animationDuration:600,rewind:false,bound:false">
              {
                infrastructureData.map((item) => (
                  <div key={item.id} className="category-box">
                    <img src={'/assets/long-9.jpg'} alt={item.name} />
                    <div className="category-content">
                      <h3 className="title">{item.name}</h3>
                      <h3 className="sub-title">{item.city}</h3>
                      <p className="sub-title address">{item.address}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

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
            <span> 2025 MNHPVC PANELS Developed By <a href="http://sktechnotion.com/" target="_blank">SK Technotion</a>.</span>
            <span><a href="#">Contact us</a> | <a href="#">Privacy policy</a></span>
          </div>
        </div>

      </footer>
    </div>
  )
}