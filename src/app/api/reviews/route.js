import { getGoogleReviews } from "@/lib/googleReviews";

export const revalidate = 3600;

export async function GET() {
  const { data, status } = await getGoogleReviews();

  return Response.json(data, { status });
}
