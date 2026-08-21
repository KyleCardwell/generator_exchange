const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  application: 200,
  partNumber: 100,
  message: 2000,
};
const REQUIRED_FIELDS = ["name", "phone", "message"];

export async function POST(request) {
  const formData = await request.formData();
  const submission = {
    name: formData.get("name")?.toString().trim() ?? "",
    phone: formData.get("phone")?.toString().trim() ?? "",
    application: formData.get("application")?.toString().trim() ?? "",
    partNumber: formData.get("partNumber")?.toString().trim() ?? "",
    message: formData.get("message")?.toString().trim() ?? "",
  };

  const missingRequiredField = REQUIRED_FIELDS.find((field) => !submission[field]);
  const tooLongField = Object.entries(submission).find(
    ([field, value]) => value.length > MAX_LENGTHS[field],
  );

  if (missingRequiredField || tooLongField) {
    return Response.json(
      { message: "Please complete name, phone, and message and try again." },
      { status: 400 },
    );
  }

  // Add the Resend delivery call here when email delivery is configured.
  return Response.json(
    { message: "Your request reached the site. Email delivery will be connected soon." },
    { status: 202 },
  );
}
