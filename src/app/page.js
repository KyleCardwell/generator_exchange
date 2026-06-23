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
    title: "Starters",
    description:
      "Exchange starters for domestic, import, and heavy-equipment applications with in-house bench testing.",
    icon: "⚙️",
    features: [
      "Starter exchange service",
      "Domestic, import, and heavy-equipment support",
      "Every unit bench-tested before delivery",
    ],
  },
  {
    title: "Alternators",
    description:
      "Remanufactured alternators built to OEM specs, professionally installed, and load-tested before you leave.",
    icon: "🔋",
    features: [
      "Remanufactured to OEM specifications",
      "Professional installation available",
      "Load-tested for dependable output",
    ],
  },
  {
    title: "Batteries",
    description:
      "New automotive, marine, and deep-cycle batteries with free charge/load testing and old-battery recycling.",
    icon: "🔧",
    features: [
      "Free charge and load testing",
      "Automotive, marine, and deep-cycle options",
      "Old-battery recycling on-site",
    ],
  },
];

const stats = [
  { label: "Years in the valley", value: "0+" },
  { label: "Units remanufactured", value: "0K+" },
  { label: "Warranty", value: "0yr+" },
  { label: "Most exchanges", value: "Same-day" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section style={brandStyles.heroBackground} className="text-white">
          <div className={`${sectionClasses} flex flex-col gap-6 py-16 md:py-24`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">GENERATOR EXCHANGE</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Bring it back to life.</h1>
            <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
              Remanufactured starters and alternators, plus new batteries — bench-tested, installed by our in-house
              mechanic, and most done the same day.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex rounded-lg px-5 py-3 text-sm font-semibold text-white"
                style={brandStyles.primaryButton}
              >
                Get a Quote
              </a>
              <a
                href="tel:8012600642"
                className="inline-flex rounded-lg border px-5 py-3 text-sm font-semibold"
                style={{ borderColor: brandColors.accent, color: brandColors.surface }}
              >
                Call 801-260-0642
              </a>
            </div>
          </div>
        </section>

        <section id="services" className={`${sectionClasses} py-10`}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: brandColors.accent }}>
            01 / What we do
          </p>
          <h2 className="mt-2 mb-6 text-2xl font-semibold text-slate-900">Starters, alternators, and batteries.</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>

          <div id="how-it-works" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: brandColors.accent }}>
              02 / What&apos;s inside
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xl font-bold" style={{ color: brandColors.ink }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: brandColors.muted }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReviewCarousel />
        <QuoteForm />
        <GoogleMap />
      </main>

      <Footer />
    </div>
  );
}
