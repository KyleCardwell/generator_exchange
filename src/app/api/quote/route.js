const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  message: 2000,
};

export async function POST(request) {
  const formData = await request.formData();
  const submission = {
    name: formData.get("name")?.toString().trim() ?? "",
    phone: formData.get("phone")?.toString().trim() ?? "",
    message: formData.get("message")?.toString().trim() ?? "",
  };

  const invalidField = Object.entries(submission).find(
    ([field, value]) => !value || value.length > MAX_LENGTHS[field],
  );

  if (invalidField) {
    return Response.json(
      { message: "Please complete all three fields and try again." },
      { status: 400 },
    );
  }

  // Add the Resend delivery call here when email delivery is configured.
  return Response.json(
    { message: "Your request reached the site. Email delivery will be connected soon." },
    { status: 202 },
  );
}
