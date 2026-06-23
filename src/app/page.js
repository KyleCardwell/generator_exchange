import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceCard from "@/components/ServiceCard";
import { brandColors } from "@/constants/colors";
import { brandStyles, sectionClasses } from "@/constants/styles";

const services = [
  {
    title: "Generator Installation",
    description: "Placeholder description for full-home standby generator installation service.",
    icon: "⚡",
  },
  {
    title: "Maintenance Plans",
    description: "Placeholder description for recurring maintenance and performance checks.",
    icon: "🛠️",
  },
  {
    title: "Emergency Support",
    description: "Placeholder description for rapid response diagnostics and repair.",
    icon: "🚚",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section style={brandStyles.heroBackground} className="text-white">
          <div className={`${sectionClasses} flex flex-col gap-6 py-16 md:py-24`}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">Placeholder Brand</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Reliable backup power starts with Generator Exchange.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              This home page is scaffolded with placeholder content to help you build your service site quickly.
            </p>
            <div>
              <a
                href="#quote"
                className="inline-flex rounded-lg px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: brandColors.ink }}
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        <section id="services" className={sectionClasses}>
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Our Services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        <ReviewCarousel />
        <GoogleMap />
        <QuoteForm />
      </main>

      <Footer />
    </div>
  );
}
