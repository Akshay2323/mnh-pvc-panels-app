import type { NextApiRequest, NextApiResponse } from 'next';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({
      message: 'Google Places API key or Place ID not configured',
      reviews: [],
    });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(url);
    const data: GooglePlacesResponse = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    // Format reviews for frontend
    const formattedReviews = data.result.reviews.map((review) => ({
      id: review.time,
      name: review.author_name,
      rating: review.rating,
      date: review.relative_time_description,
      text: review.text,
      avatar: review.author_name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2),
      photo: review.profile_photo_url,
    }));

    res.status(200).json({
      reviews: formattedReviews,
      overallRating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({
      message: 'Failed to fetch reviews',
      reviews: [],
    });
  }
}
