import { Resend } from "resend";

const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  application: 200,
  partNumber: 100,
  message: 2000,
};
const REQUIRED_FIELDS = ["name", "phone", "message"];
const REQUIRED_ENV_VARS = ["RESEND_API_KEY", "QUOTE_FROM_EMAIL", "QUOTE_TO_EMAIL"];

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

  const missingEnvVars = REQUIRED_ENV_VARS.filter((variableName) => !process.env[variableName]);
  if (missingEnvVars.length > 0) {
    console.error("Quote form email is not configured.", { missingEnvVars });
    return Response.json(
      {
        message: "The quote form is temporarily unavailable. Please call 801-260-0642.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const safeApplication = submission.application || "Not provided";
  const safePartNumber = submission.partNumber || "Not provided";
  const emailText = [
    "New quote request",
    "",
    `Name: ${submission.name}`,
    `Phone: ${submission.phone}`,
    `Application: ${safeApplication}`,
    `Part number: ${safePartNumber}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL,
      to: [process.env.QUOTE_TO_EMAIL],
      subject: `Quote request from ${submission.name}`,
      text: emailText,
    });

    if (error) {
      console.error("Resend rejected quote email.", error);
      return Response.json(
        {
          message: "We could not send your request right now. Please call 801-260-0642.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unexpected quote email failure.", error);
    return Response.json(
      {
        message: "We could not send your request right now. Please call 801-260-0642.",
      },
      { status: 502 },
    );
  }

  return Response.json(
    { message: "Thanks! Your request was sent. We will contact you soon." },
    { status: 200 },
  );
}
