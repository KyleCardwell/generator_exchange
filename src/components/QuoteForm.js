import { brandStyles, inputClasses, sectionClasses } from "@/constants/styles";

export default function QuoteForm() {
  return (
    <section id="quote" className={`${sectionClasses} py-8`}>
      <h2 className="mb-4 text-2xl font-semibold text-slate-900">Request a Quote</h2>
      <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <input className={inputClasses} type="text" placeholder="Full name" />
        <input className={inputClasses} type="email" placeholder="Email" />
        <input className={inputClasses} type="tel" placeholder="Phone" />
        <input className={inputClasses} type="text" placeholder="Zip code" />
        <textarea
          className={`${inputClasses} md:col-span-2`}
          rows={4}
          placeholder="Tell us about your project"
        />
        <button
          type="submit"
          className="rounded-lg px-4 py-2 font-medium text-white md:col-span-2"
          style={brandStyles.primaryButton}
        >
          Submit Placeholder Request
        </button>
      </form>
    </section>
  );
}
