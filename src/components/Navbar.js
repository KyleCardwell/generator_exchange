import { brandColors } from "@/constants/colors";
import { sectionClasses } from "@/constants/styles";

export default function Navbar() {
  const navItems = ["Services", "Reviews", "Coverage", "Quote"];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className={`${sectionClasses} flex items-center justify-between py-4`}>
        <a href="#" className="text-lg font-semibold tracking-tight" style={{ color: brandColors.primary }}>
          Generator Exchange
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-slate-900">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
