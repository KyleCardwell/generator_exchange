import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Brand New and Re-Manufactured Batteries",
  description: "Brand-new and remanufactured batteries for cars and trucks in West Jordan, Utah.",
};

export default function BatteriesPage() {
  return (
    <ServicePage
      eyebrow="Battery specialists"
      title="Brand new and re-manufactured batteries."
      intro="A full line of dependable batteries for cars, trucks, equipment, marine use, and more."
      paragraphs={[
        "You wake up in the morning. Eat breakfast. Get dressed. Then head out the door for work. As you go to start your car and hit the road, you realize—through the wheezing of the engine—that your car will not turn on. Does this scenario sound familiar? We have all been there at least once or twice in our lives, and unfortunately you can only rely on jumper cables and another vehicle’s battery for so long before it is time to purchase a new car battery or a refurbished one at the least.",
        "When you find yourself in this bind, come to Generator Exchange to get your car back on the road! At Generator Exchange we stock a full line of Deka batteries, made in the USA, for cars and trucks. Any questions? Stop by or contact us today! We are here for you.",
      ]}
      highlights={["Full line of Deka batteries, made in the USA", "Batteries for cars and trucks", "Local help choosing the right fit", "Full-service mechanic shop available"]}
      applications={["Cars", "Trucks", "Commercial vehicles", "Marine", "Deep-cycle", "Agricultural equipment", "Powersports", "Specialty equipment"]}
      note="Battery availability varies by group size and application. Call or email ahead and we’ll check current stock."
    />
  );
}
