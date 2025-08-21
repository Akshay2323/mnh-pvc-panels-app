export default function Slider() {
  return (
    <section className="section-image section-full-width-right light ken-burn-center" data-parallax="scroll"
      data-image-src="media/hd-1.jpg">
      <div className="container">
        <hr className="space-lg" />
        <hr className="space-sm" />
        <div className="row">
          <div className="col-lg-6">
            <h1 data-anima="" data-time="2000" className="text-lg text-uppercase text-black fade-left"
              style={{ position: "relative", animationDuration: "2000ms", transitionTimingFunction: "ease", transitionDelay: "0ms" }}
            >Amazing mountain to explore</h1>
            <hr className="space-lg" />
            <hr className="space-sm hidden-lg" />
            <div className="slider glide width-50 glide--ltr glide--slider glide--swipeable"
              data-options="type:slider,perView:1">
              <div data-glide-el="track" className="glide__track">
                <ul className="glide__slides"
                  style={{ transition: "transform cubic-bezier(0.165, 0.84, 0.44, 1)", width: "520px", transform: "translate3d(0px, 0px, 0px)" }}>
                  <li className="glide__slide glide__slide--active"
                    style={{ width: "255px", marginRight: "5px" }}>
                    <p className="quote">
                      Do not follow where the path may lead. Go instead where there is no path and
                      leave a trail.
                      <span className="quote-author">Ralph Emerson</span>
                    </p>
                  </li>
                  <li className="glide__slide" style={{ width: "255px", marginLeft: "5px" }}>
                    <p className="quote">
                      When everything feels like an uphill struggle. Just wait and think of the
                      view from the top.
                      <span className="quote-author">Wislawa Symborska</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <hr className="space-xs" />
            <div className="counter counter-vertical counter-icon">
              <div>
                <h3>Altitude</h3>
                <div className="value">
                  <span className="text-md" data-to="1650" data-speed="5000"
                    data-trigger="null">1650</span>
                  <span>m</span>
                </div>
              </div>
            </div>
            <hr className="space-sm" />
            <div className="counter counter-vertical counter-icon">
              <div>
                <h3>Tracks</h3>
                <div className="value">
                  <span className="text-md" data-to="7" data-speed="5000" data-trigger="null">7</span>
                  <span></span>
                </div>
              </div>
            </div>
            <hr className="space-sm" />
            <div className="counter counter-vertical counter-icon">
              <div>
                <h3>Tourists / year</h3>
                <div className="value">
                  <span className="text-md" data-to="2000" data-speed="5000"
                    data-trigger="null">2000</span>
                  <span>+</span>
                </div>
              </div>
            </div>
            <hr className="space" />
            <div className="slider glide controls-out glide--ltr glide--carousel glide--swipeable"
              data-options="type:carousel,nav:true,perView:3,perViewLg:2,perViewSm:1,gap:30,controls:out,autoplay:3000">
              <div data-glide-el="track" className="glide__track">
                <ul className="glide__slides"
                  style={{ transition: "transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1)", width: "2874px", transform: "translate3d(-1210px, 0px, 0px)" }}>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginRight: "15px" }}>
                    <a className="img-box btn-video lightbox"
                      href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-1.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-2.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-2.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-3.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-3.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-4.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-4.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box btn-video lightbox"
                      href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-1.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--active"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-2.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-2.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-3.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-3.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-4.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-4.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box btn-video lightbox"
                      href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-1.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-2.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-2.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px", marginRight: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-3.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-3.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                  <li className="glide__slide glide__slide--clone"
                    style={{ width: "212px", marginLeft: "15px" }}>
                    <a className="img-box lightbox"
                      href="./assets/image-4.jpg"
                      data-lightbox-anima="fade-top">
                      <img src="./assets/image-4.jpg"
                        alt="" style={{}} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet glide__bullet--active" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
                <button className="glide__bullet" data-glide-dir="=3"></button>
              </div>
            </div>
          </div>
        </div>
        <hr className="space-lg" />
      </div>
    </section>
  )
}
