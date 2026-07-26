export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return Response.json(
      {
        error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID.",
      },
      { status: 500 },
    );
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "reviews,rating,user_ratings_total",
    key: apiKey,
  });

  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    const data = await response.json();

    return Response.json(data, {
      status: response.status,
    });
  } catch {
    return Response.json(
      {
        error: "Failed to fetch reviews from Google Places API.",
      },
      { status: 500 },
    );
  }
}
