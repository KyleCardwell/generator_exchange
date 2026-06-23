import { sectionClasses } from "@/constants/styles";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className={`${sectionClasses} flex flex-col gap-2 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between`}>
        <p>Placeholder footer content for Generator Exchange.</p>
        <p>{new Date().getFullYear()} Generator Exchange</p>
      </div>
    </footer>
  );
}
