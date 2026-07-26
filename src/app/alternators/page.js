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
        "Alternators charge the car battery and power the electrical system while the engine is running. In other words, they are vital to the operation of your vehicle. We know that whether you are going to work, running errands, or heading out for the evening, you need your vehicle to work when you need it.",
        <>Alternators have been used in modern automobiles for decades. They first appeared on specialist military vehicles during World War II to power radio equipment. After the war, vehicles with high electrical demands—including ambulances and radio taxis—could be fitted with alternators. Chrysler introduced the alternator as standard equipment on the Valiant in 1960, several years ahead of Ford and General Motors. <a href="https://en.wikipedia.org/wiki/Alternator_(automotive)" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4" style={{ color: "#9a7626" }}>Learn more about automotive alternators.</a></>,
        "Here at Generator Exchange, we keep a large inventory of rebuilt and brand-new alternators for vehicles and equipment of every kind, including boats, tractors, diesel vehicles, industrial equipment, and more. Have questions? Contact us today.",
      ]}
      image={{
        src: "/alternator-closeup.jpeg",
        alt: "Close-up of an automotive alternator showing its metal housing, pulley, and copper windings",
        caption: "A close-up view of an automotive alternator.",
      }}
      highlights={["Family owned since 1965", "Part of 20,000+ starters and alternators in stock", "New and remanufactured options", "Testing and installation available"]}
      applications={["Cars", "Trucks", "Boats", "Tractors", "Diesel equipment", "Industrial equipment", "ATVs", "Specialty vehicles"]}
    />
  );
}
