import React, { useState, useEffect } from "react";
import axios from "axios";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: string;
}

interface GooglePlaceResponse {
  result: {
    reviews: Review[];
  };
}

interface GoogleReviewsProps {
  placeId: string;
  apiKey: string;
  limit?: number; // Limit the number of reviews shown initially
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ placeId, apiKey, limit = 3 }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Review[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<GooglePlaceResponse>(
          `https://maps.googleapis.com/maps/api/place/details/json`,
          {
            params: {
              placeid: placeId,
              fields: "reviews", // Limit to only reviews
              key: apiKey,
            },
          }
        );

        if (response.data.result?.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setReviews([]);
        }
      } catch (err) {
        let message = "Failed to fetch reviews. Please try again later.";
        if (err instanceof Error) {
          message += ` ${err.message}`;
        }
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, apiKey]);

  const handleFavorite = (review: Review) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.author_name === review.author_name && fav.time === review.time
      );
      if (isAlreadyFavorite) {
        return prevFavorites.filter(
          (fav) => !(fav.author_name === review.author_name && fav.time === review.time)
        );
      } else {
        return [...prevFavorites, review];
      }
    });
  };

  if (loading) return <p className="text-center text-gray-500">Loading reviews...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const reviewsToShow = showAll ? reviews : reviews.slice(0, limit);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Google Reviews</h2>
      {reviews.length > 0 ? (
        reviewsToShow.map((review, index) => (
          <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-lg font-medium text-gray-700">
              {review.author_name} -{" "}
              <span className="text-yellow-500">{review.rating}★</span>
            </p>
            <p className="text-gray-600 mt-2">{review.text}</p>
            <button
              onClick={() => handleFavorite(review)}
              className={`mt-4 px-4 py-2 rounded ${
                favorites.some(
                  (fav) => fav.author_name === review.author_name && fav.time === review.time
                )
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {favorites.some(
                (fav) => fav.author_name === review.author_name && fav.time === review.time
              )
                ? "Unfavorite"
                : "Favorite"}
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No reviews available for this place.</p>
      )}
      {reviews.length > limit && !loading && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-6 block mx-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default GoogleReviews;
