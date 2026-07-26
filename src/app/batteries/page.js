import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Brand New and Re-Manufactured Batteries",
  description: "American-made Deka batteries for cars, trucks, marine, equipment, and deep-cycle applications in West Jordan, Utah.",
};

export default function BatteriesPage() {
  return (
    <ServicePage
      eyebrow="Battery specialists"
      title="Brand new and re-manufactured batteries."
      intro="A full line of dependable batteries for cars, trucks, equipment, marine use, and more."
      paragraphs={[
        "A weak battery can stop your day before it starts. Generator Exchange stocks a full line of brand new and re-manufactured batteries, with options for everyday vehicles, demanding work trucks, marine use, and deep-cycle applications.",
        "Bring your vehicle or equipment information—or the old battery—to our West Jordan shop. We’ll help you select the correct size and power rating for a confident, reliable start.",
      ]}
      highlights={["Deka batteries made in the USA", "Automotive, commercial, marine, and specialty options", "Local help choosing the right fit", "Full-service mechanic shop available"]}
      applications={["Cars", "Trucks", "Commercial vehicles", "Marine", "Deep-cycle", "Agricultural equipment", "Powersports", "Specialty equipment"]}
      note="Battery availability varies by group size and application. Call or email ahead and we’ll check current stock."
    />
  );
}
