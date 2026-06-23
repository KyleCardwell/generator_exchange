import { brandColors } from "@/constants/colors";
import { brandStyles, inputClasses, sectionClasses } from "@/constants/styles";

export default function QuoteForm() {
  return (
    <section id="quote" className={`${sectionClasses} py-8`}>
      <h2 className="mb-2 text-2xl font-semibold text-slate-900">Tell us what you&apos;re driving.</h2>
      <p className="mb-5 max-w-3xl text-sm leading-6" style={{ color: brandColors.muted }}>
        Send your year, make, and model and what&apos;s failing. We&apos;ll confirm the part, the price, and whether
        it&apos;s ready for same-day exchange.
      </p>

      <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <input className={`${inputClasses} md:col-span-2`} type="text" placeholder="Year / Make / Model" />
        <textarea
          className={`${inputClasses} md:col-span-2`}
          rows={4}
          placeholder="What's failing"
        />
        <input className={`${inputClasses} md:col-span-2`} type="text" placeholder="Phone or email" />
        <button
          type="submit"
          className="rounded-lg px-4 py-2 font-medium text-white md:col-span-2"
          style={brandStyles.primaryButton}
        >
          Get a Quote
        </button>

        <p className="text-xs md:col-span-2" style={{ color: brandColors.muted }}>
          No spam. We only use this to get back to you about your part.
        </p>
      </form>

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
