"use client";

export default function IndiaMap3D() {
  return (
    <section className="py-12 bg-gray-50 flex flex-col items-center justify-center text-center">
      {/* Title */}
      <div className="title align-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          We Deliver All India
        </h2>
        <p className="text-gray-500">Our Branches</p>
      </div>

      {/* Centered Video */}
      <div className="flex justify-center w-full">
        <div className="rounded-xl overflow-hidden shadow-lg video-container">
          <video autoPlay muted loop playsInline className="video-box">
            <source src="/assets/IndiaMap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* ✅ Scoped CSS */}
      <style jsx>{`
        .video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 708px;
          margin-top: -50px;
        }

        .video-box {
          width: 80%;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
          display: block;
          transition: all 0.3s ease;
        }

        /* Responsive Scaling */
        @media (max-width: 1024px) {
          .video-container {
            width: 80%;
            margin-top: -30px;
          }
        }

        @media (max-width: 768px) {
          .video-container {
            width: 90%;
            margin-top: -20px;
          }
        }

        @media (max-width: 480px) {
          .video-container {
            width: 95%;
            margin-top: -10px;
          }
        }
      `}</style>
    </section>
  );
}
