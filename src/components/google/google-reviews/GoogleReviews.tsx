'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Review {
  reviewId: string;
  reviewer: {
    profilePhotoUrl: string;
    displayName: string;
  };
  starRating: string;
  comment?: string;
  createTime: string;
  reviewReply?: {
    comment: string;
    updateTime: string;
  };
}

interface GoogleReviewsProps {
  locationId?: string;
  maxReviews?: number;
}

export default function GoogleReviews({ 
  locationId = 'locations/4929742144346227937',
  maxReviews = 10 
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`/api/gbp/reviews?locationId=${locationId}`);
        const data = await response.json();
        
        if (data.status === 200) {
          setReviews(data.data.reviews.slice(0, maxReviews));
        } else {
          setError('Kon reviews niet laden');
        }
      } catch (err) {
        setError('Er ging iets mis bij het laden van reviews');
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [locationId, maxReviews]);

  const renderStars = (rating: string) => {
    const starCount = rating === 'FIVE' ? 5 : rating === 'FOUR' ? 4 : rating === 'THREE' ? 3 : rating === 'TWO' ? 2 : 1;
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < starCount ? 'text-yellow-400' : 'text-gray-300'}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Wat Onze Klanten Zeggen</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">⭐</span>
            ))}
          </div>
          <span className="text-xl font-semibold">5.0</span>
          <span className="text-gray-600">({reviews.length}+ reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div 
            key={review.reviewId} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            {/* Header met foto en naam */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={review.reviewer.profilePhotoUrl}
                alt={review.reviewer.displayName}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{review.reviewer.displayName}</h3>
                <p className="text-sm text-gray-500">{formatDate(review.createTime)}</p>
              </div>
            </div>

            {/* Sterren */}
            {renderStars(review.starRating)}

            {/* Review tekst */}
            {review.comment && (
              <p className="mt-4 text-gray-700 line-clamp-4">
                {review.comment}
              </p>
            )}

            {/* Bedrijfsantwoord */}
            {review.reviewReply && (
              <div className="mt-4 pl-4 border-l-2 border-blue-500 bg-blue-50 p-3 rounded">
                <p className="text-sm font-semibold text-blue-900 mb-1">
                  Antwoord van Sleepdienstdirect
                </p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {review.reviewReply.comment}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}