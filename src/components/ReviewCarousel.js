import { headers } from "next/headers";

import { brandColors } from "@/constants/colors";
import { cardClasses, sectionClasses } from "@/constants/styles";

function StarRating({ rating }) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(rating ?? 0)));

  return (
    <div className="flex items-center gap-1" aria-label={`${roundedRating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < roundedRating ? "text-slate-300" : "text-slate-300"}
          style={index < roundedRating ? { color: brandColors.accent } : undefined}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

async function getReviewsData() {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "localhost:3000";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");

  const response = await fetch(`${protocol}://${host}/api/reviews`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return {
      rating: null,
      userRatingsTotal: null,
      reviews: [],
    };
  }

  const data = await response.json();
  const result = data?.result ?? {};

  return {
    rating: result.rating ?? null,
    userRatingsTotal: result.user_ratings_total ?? null,
    reviews: Array.isArray(result.reviews) ? result.reviews : [],
  };
}

export default async function ReviewCarousel() {
  const { rating, userRatingsTotal, reviews } = await getReviewsData();
  const visibleReviews = reviews.slice(0, 6);

  const placeId = process.env.GOOGLE_PLACE_ID;
  const seeAllReviewsHref = placeId
    ? `https://www.google.com/maps/place/?q=place_id:${placeId}`
    : "https://www.google.com/maps";
  const leaveReviewHref = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : "https://www.google.com/maps";

  return (
    <section id="reviews" className={`${sectionClasses} py-8`}>
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          {/* <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: brandColors.accent }}>
            03 / Reviews
          </p> */}
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Google Reviews</h2>
          <div className="mt-2 flex items-center gap-3 text-sm text-slate-700">
            <StarRating rating={rating} />
            <span className="font-medium text-slate-900">
              {rating ? rating.toFixed(1) : "N/A"}
            </span>
            <span>({userRatingsTotal ?? 0} reviews)</span>
          </div>
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <a
            href={seeAllReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
            style={{ color: brandColors.primary }}
          >
            See all reviews on Google
          </a>
          <a
            href={leaveReviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
            style={{ color: brandColors.secondary }}
          >
            Leave a review
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {visibleReviews.length > 0 ? (
          visibleReviews.map((review, index) => (
            <article key={`${review.author_name}-${review.time ?? index}`} className={cardClasses}>
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">{review.author_name}</p>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {review.relative_time_description ?? "Recent review"}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{review.text ?? "No review text provided."}</p>
            </article>
          ))
        ) : (
          <article className={`${cardClasses} md:col-span-3`}>
            <p className="text-sm leading-6 text-slate-700">
              Reviews are unavailable right now. Add your Google env vars to load live reviews.
            </p>
          </article>
        )}
      </div>
    </section>
  );
}
