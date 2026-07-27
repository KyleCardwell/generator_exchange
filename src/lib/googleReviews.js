import "server-only";

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      data: {
        error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID.",
      },
      status: 500,
    };
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "reviews,rating,user_ratings_total",
    key: apiKey,
  });

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
      {
        next: { revalidate: 3600 },
      },
    );
    const data = await response.json();

    return {
      data,
      status: response.status,
    };
  } catch {
    return {
      data: {
        error: "Failed to fetch reviews from Google Places API.",
      },
      status: 500,
    };
  }
}
