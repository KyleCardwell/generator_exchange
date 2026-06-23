import { cardClasses } from "@/constants/styles";

export default function ServiceCard({ title, description, icon }) {
  return (
    <article className={`${cardClasses} flex h-full flex-col gap-3`}>
      <div className="text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
