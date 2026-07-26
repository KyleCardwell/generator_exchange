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
        "How do you get a car to run without a starter? The answer is: you can’t. The starter is one of the most important parts of a vehicle. Without it, the vehicle is not going anywhere.",
        "That’s why Generator Exchange keeps a large inventory of electric and hydraulic starters, both brand-new and remanufactured, for ATVs, boats, diesel equipment, industrial vehicles, snow plows, tractors, and more.",
        "If you are skeptical about purchasing a remanufactured starter, know that our parts come with a full warranty and are remanufactured by experienced mechanics with no less than 23 years in the industry. Contact us or stop by our West Jordan shop today.",
      ]}
      highlights={["Family owned since 1965", "Part of 20,000+ starters and alternators in stock", "Experienced in-house rebuilders", "Full-service mechanic shop available"]}
      applications={["Cars", "Trucks", "ATVs", "Boats", "Diesel equipment", "Industrial vehicles", "Snow plows", "Tractors"]}
      note="Ask about warranty coverage for the specific starter you’re purchasing."
    />
  );
}
