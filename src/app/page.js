import GoogleMap from "@/components/GoogleMap";
import QuoteForm from "@/components/QuoteForm";
import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceCard from "@/components/ServiceCard";
import { brandColors } from "@/constants/colors";
import { brandStyles, sectionClasses } from "@/constants/styles";

const services = [
  {
    title: "Starters",
    description:
      "New and remanufactured starters for everything from daily drivers to industrial equipment.",
    icon: "⚙️",
    features: [
      "Electric and hydraulic starters",
      "ATV, marine, diesel, tractor, and industrial",
      "Exchange from our extensive in-stock inventory",
    ],
    href: "/starters",
  },
  {
    title: "Alternators",
    description:
      "New and remanufactured alternators for automotive, marine, agricultural, diesel, and industrial use.",
    icon: "🔋",
    features: [
      "Professional installation available",
      "Parts for nearly every type of vehicle",
      "In-house testing and experienced rebuilders",
    ],
    href: "/alternators",
  },
  {
    title: "Batteries",
    description:
      "Brand-new and remanufactured batteries to help get your car or truck back on the road.",
    icon: "🔧",
    features: [
      "Brand-new and remanufactured options",
      "Batteries for cars and trucks",
      "Help selecting the right battery",
    ],
    href: "/batteries",
  },
];

const stats = [
  { label: "Family owned since", value: "1965" },
  { label: "Starters & alternators in stock", value: "20K+" },
  { label: "Batteries", value: "In stock" },
  { label: "Auto & truck care", value: "Full service" },
];

export default function Home() {
  return (
    <>
        <section style={brandStyles.heroBackground} className="text-white">
          <div className={`${sectionClasses} flex flex-col gap-6 py-16 md:py-24`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">GENERATOR EXCHANGE</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Bring it back to life.</h1>
            <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
              More than 20,000 starters and alternators ready to exchange, new and remanufactured — plus
              batteries and a full-service mechanic shop.
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
                href={service.href}
              />
            ))}
          </div>

          <div id="about" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
            <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">
              Generator Exchange is a locally owned family business established in 1965. Today, Mike and Scott
              Carter carry on the business founded by their father, Ron Carter, serving drivers, mechanics,
              businesses, and equipment owners throughout the Intermountain West.
            </p>
          </div>
        </section>

        <ReviewCarousel />
        <QuoteForm />
        <GoogleMap />
    </>
  );
}
