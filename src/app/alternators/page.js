import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "New & Remanufactured Alternators",
  description: "Alternator exchange, new alternators, remanufactured alternators, testing, and installation in West Jordan, Utah.",
};

export default function AlternatorsPage() {
  return (
    <ServicePage
      eyebrow="Alternator specialists"
      title="Alternators for nearly every kind of vehicle."
      intro="New and remanufactured alternators in stock, with testing and professional installation available."
      paragraphs={[
        "Your alternator charges the battery and powers the electrical system while the engine is running. When output drops or the alternator fails, Generator Exchange can help identify the problem and find the right replacement.",
        "We stock rebuilt and brand-new alternators for automotive, marine, agricultural, diesel, industrial, and specialty applications. Our full-time mechanic can also install your remanufactured alternator at a reasonable cost.",
      ]}
      highlights={["Family owned since 1965", "Part of 20,000+ starters and alternators in stock", "New and remanufactured options", "Testing and installation available"]}
      applications={["Cars", "Trucks", "Boats", "Tractors", "Diesel equipment", "Industrial equipment", "ATVs", "Specialty vehicles"]}
    />
  );
}
