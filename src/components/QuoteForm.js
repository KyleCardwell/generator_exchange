import { brandColors } from "@/constants/colors";
import { brandStyles, sectionClasses } from "@/constants/styles";

export default function QuoteForm() {
  return (
    <section id="quote" className={`${sectionClasses} py-8`}>
      <h2 className="mb-2 text-2xl font-semibold text-slate-900">Tell us what you&apos;re driving.</h2>
      <p className="mb-5 max-w-3xl text-sm leading-6" style={{ color: brandColors.muted }}>
        Email your year, make, model, engine size, and what&apos;s failing. We&apos;ll confirm the right part,
        current price, and availability.
      </p>

      <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <a href="mailto:scott.genx@hotmail.com?subject=Generator%20Exchange%20quote%20request" className="rounded-lg px-4 py-3 font-medium text-white" style={brandStyles.primaryButton}>
          Email Scott for a quote
        </a>
        <a href="mailto:mcarter383@aol.com?subject=Generator%20Exchange%20quote%20request" className="rounded-lg border border-slate-300 px-4 py-3 font-medium text-slate-800">
          Email Mike for a quote
        </a>
      </div>

      <a
        href="tel:8012600642"
        className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
        style={{ color: brandColors.ink }}
      >
        📞 801-260-0642
      </a>
    </section>
  );
}
