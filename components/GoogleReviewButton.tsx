'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  photo?: string;
}

// Fallback reviews in case API fails
const fallbackReviews: Review[] = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    date: '2 weeks ago',
    text: 'Excellent quality PVC panels! The installation was smooth and the finish looks amazing. Highly recommend MNH PVC Panels.',
    avatar: 'JD',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    rating: 5,
    date: '1 month ago',
    text: 'Great customer service and top-notch products. The team was very professional and helped us choose the perfect panels for our home.',
    avatar: 'SS',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    rating: 4,
    date: '3 weeks ago',
    text: 'Very satisfied with the quality and durability of the PVC panels. Good value for money.',
    avatar: 'MJ',
  },
  {
    id: 4,
    name: 'Emily Brown',
    rating: 5,
    date: '1 week ago',
    text: 'Beautiful designs and excellent craftsmanship. Our office looks stunning with these panels!',
    avatar: 'EB',
  },
];

export default function GoogleReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();

        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setError(null);
        } else {
          // Keep fallback reviews if API returns empty
          setError('Using sample reviews');
        }
      } catch (err) {
        console.error('Failed to fetch Google reviews:', err);
        setError('Failed to load reviews. Showing sample reviews.');
        // Keep fallback reviews on error
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
  return (
    <section className='section-base section-color'>
      <div className='container'>
        <div className='title align-center'>
          <h2>What Our Customers Say</h2>
          <p>Read reviews from our satisfied customers</p>
        </div>

        {loading ? (
          <div className='text-center' style={{ padding: '3rem 0' }}>
            <div className='loader-spinner'></div>
            <p style={{ marginTop: '1rem', color: '#888' }}>
              Loading reviews...
            </p>
          </div>
        ) : (
          <>
            {error && (
              <div
                className='text-center'
                style={{
                  padding: '0.5rem',
                  color: '#888',
                  fontSize: '0.875rem',
                }}
              >
                {error}
              </div>
            )}
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{ padding: '2rem 0 3rem' }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className='review-card'>
                    <div className='review-header'>
                      <div className='review-avatar'>{review.avatar}</div>
                      <div className='review-info'>
                        <h4 className='review-name'>{review.name}</h4>
                        <div className='review-rating'>
                          {[...Array(5)].map((_, index) => (
                            <i
                              key={index}
                              className={`fas fa-star ${
                                index < review.rating ? 'filled' : ''
                              }`}
                            ></i>
                          ))}
                        </div>
                        <span className='review-date'>{review.date}</span>
                      </div>
                    </div>
                    <p className='review-text'>{review.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        <div className='text-center' style={{ marginTop: '2rem' }}>
          <a
            href={GOOGLE_REVIEW_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-sm'
          >
            ⭐ Leave us a Google Review
          </a>
        </div>
      </div>

      <style jsx>{`
        .loader-spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .reviews-swiper {
          padding: 2rem 0 3rem;
        }

        .review-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          //   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .review-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .review-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .review-info {
          flex: 1;
        }

        .review-name {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
        }

        .review-rating {
          margin-bottom: 0.25rem;
        }

        .review-rating i {
          color: #ddd;
          font-size: 0.875rem;
          margin-right: 2px;
        }

        .review-rating i.filled {
          color: #fbbf24;
        }

        .review-date {
          font-size: 0.75rem;
          color: #888;
        }

        .review-text {
          color: #555;
          line-height: 1.6;
          margin: 0;
          flex: 1;
          overflow: hidden;
          display: -webkit-box;
          //   -webkit-line-clamp: 3;
          //   -webkit-box-orient: vertical;
        }

        @media (max-width: 767px) {
          .review-card {
            padding: 1rem;
          }

          .review-avatar {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
