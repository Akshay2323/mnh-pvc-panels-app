export default function Slider() {
  return (
    <section className="section-image section-full-width-right light ken-burn-center" data-parallax="scroll" data-image-src="assets/hd-1.jpg">
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
                  <img src="assets/image-1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a className="img-box lightbox" href="assets/image-2.jpg" data-lightbox-anima="fade-top">
                  <img src="assets/image-2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a className="img-box lightbox" href="assets/image-3.jpg" data-lightbox-anima="fade-top">
                  <img src="assets/image-3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a className="img-box lightbox" href="assets/image-4.jpg" data-lightbox-anima="fade-top">
                  <img src="assets/image-4.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="space-lg" />
      </div>
    </section>
  )
}
