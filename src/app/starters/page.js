import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "New & Remanufactured Starters",
  description: "Starter exchange, new starters, and remanufactured starters for automotive, marine, agricultural, and industrial applications.",
};

export default function StartersPage() {
  return (
    <ServicePage
      eyebrow="Starter specialists"
      title="Brand-new and remanufactured starters."
      intro="Get the dependable starting power your car, truck, boat, tractor, ATV, or equipment needs."
      paragraphs={[
        "A vehicle or machine cannot do much without a working starter. Generator Exchange keeps a large inventory of electric and hydraulic starters ready for exchange, including hard-to-find units for unusual applications.",
        "Choose from new and professionally remanufactured starters. Bring in your old unit and our experienced team will help match it, test the replacement, and get you moving again.",
      ]}
      highlights={["Family owned since 1965", "Part of 20,000+ starters and alternators in stock", "Experienced in-house rebuilders", "Full-service mechanic shop available"]}
      applications={["Cars", "Trucks", "ATVs", "Boats", "Diesel equipment", "Industrial vehicles", "Snow plows", "Tractors"]}
      note="Ask about warranty coverage for the specific starter you’re purchasing."
    />
  );
}
