"use client";

export default function IndiaMap3D() {
  return (
    <section className="container">
      {/* Title */}

      <div className="title align-center">
        <h2>We Deliver All India</h2>
        <p>Our Branches</p>
      </div>
      {/* Centered Video */}
      <div className="map-video-container">
        <video autoPlay muted loop playsInline className="map-video-box">
          <source src="/assets/IndiaMap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ✅ Scoped CSS */}
      <style jsx>{`
        .map-video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: -50px;
        }

        .map-video-box {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
          display: block;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
