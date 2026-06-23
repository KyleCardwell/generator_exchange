import { brandColors } from "@/constants/colors";
import { cardClasses } from "@/constants/styles";

export default function ServiceCard({ title, description, icon, features = [] }) {
  return (
    <article
      className={`${cardClasses} flex h-full flex-col gap-3`}
      style={{ borderLeft: `3px solid ${brandColors.accent}` }}
    >
      <div className="text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>

      <ul className="mt-1 flex flex-col gap-1 text-sm text-slate-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span style={{ color: brandColors.accent }}>•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#quote" className="mt-auto pt-3 text-sm font-semibold" style={{ color: brandColors.accent }}>
        Get a quote →
      </a>
    </article>
  );
}
