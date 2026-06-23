import { brandColors } from "@/constants/colors";
import { sectionClasses } from "@/constants/styles";

export default function Navbar() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#find-us" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className={`${sectionClasses} flex items-center justify-between py-4`}>
        <a href="#" className="text-lg font-bold uppercase tracking-tight" style={{ color: brandColors.ink }}>
          GENERATOREXCHANGE
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="tel:8012600642" className="text-sm font-semibold" style={{ color: brandColors.ink }}>
          801-260-0642
        </a>
      </div>
    </header>
  );
}
