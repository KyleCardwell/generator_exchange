import Image from "next/image";
import Link from "next/link";

import { brandColors } from "@/constants/colors";
import { brandStyles, cardClasses, sectionClasses } from "@/constants/styles";

export default function ServicePage({ eyebrow, title, intro, paragraphs, highlights, applications, note, image }) {
  return (
    <>
      <section style={brandStyles.heroBackground} className="text-white">
        <div className={`${sectionClasses} py-16 md:py-20`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:scott.genx@hotmail.com?subject=Generator%20Exchange%20quote%20request" className="rounded-lg px-5 py-3 text-sm font-semibold text-white" style={brandStyles.primaryButton}>
              Email for a quote
            </a>
            <a href="tel:8012600642" className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold">
              Call 801-260-0642
            </a>
          </div>
        </div>
      </section>

      <section className={`${sectionClasses} grid gap-8 py-12 lg:grid-cols-[1.4fr_.8fr]`}>
        <article className={cardClasses}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: brandColors.accent }}>What we offer</p>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                {image && index === 1 && (
                  <figure className="mb-6 overflow-hidden rounded-xl border border-slate-200">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1024}
                      height={683}
                      className="h-auto w-full object-cover"
                    />
                    <figcaption className="bg-slate-50 px-4 py-3 text-xs text-slate-500">{image.caption}</figcaption>
                  </figure>
                )}
                {typeof paragraph === "string" ? <p>{paragraph}</p> : paragraph}
              </div>
            ))}
          </div>
          {note && <p className="mt-6 rounded-xl bg-slate-100 p-4 text-sm font-medium leading-6 text-slate-700">{note}</p>}
        </article>

        <aside className="space-y-4">
          <div className={cardClasses}>
            <h2 className="text-xl font-semibold">Why Generator Exchange</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {highlights.map((item) => <li key={item} className="flex gap-2"><span style={{ color: brandColors.accent }}>•</span>{item}</li>)}
            </ul>
          </div>
          <div className={cardClasses}>
            <h2 className="text-xl font-semibold">Applications</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{applications.join(" · ")}</p>
          </div>
        </aside>
      </section>

      <section className={`${sectionClasses} pt-0`}>
        <div className="rounded-2xl p-7 text-white" style={{ backgroundColor: brandColors.secondary }}>
          <h2 className="text-2xl font-semibold">Not sure which part you need?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">Send us your vehicle or equipment details, or bring the old unit to our West Jordan shop. We’ll help identify the right fit.</p>
          <Link href="/#quote" className="mt-5 inline-flex font-semibold" style={{ color: brandColors.accent }}>Contact the shop →</Link>
        </div>
      </section>
    </>
  );
}
