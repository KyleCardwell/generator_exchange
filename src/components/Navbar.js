"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brandColors } from "@/constants/colors";
import { sectionClasses } from "@/constants/styles";

export default function Navbar() {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [openForPath, setOpenForPath] = useState(null);
  const servicesOpen = openForPath === pathname;

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenForPath(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Visit", href: "/#find-us" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className={`${sectionClasses} flex items-center justify-between py-4`}>
        <Link href="/" className="text-lg font-bold uppercase tracking-tight" style={{ color: brandColors.ink }}>
          GENERATOR EXCHANGE
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              className="py-2 hover:text-slate-900"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setOpenForPath((openPath) => openPath === pathname ? null : pathname)}
            >
              Services <span aria-hidden="true" className="relative -top-[3px]">⌄</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <Link onClick={() => setOpenForPath(null)} href="/alternators" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Alternators</Link>
                <Link onClick={() => setOpenForPath(null)} href="/starters" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Starters</Link>
                <Link onClick={() => setOpenForPath(null)} href="/batteries" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Batteries</Link>
              </div>
            )}
          </div>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="tel:8012600642" className="text-sm font-semibold" style={{ color: brandColors.ink }}>
          801-260-0642
        </a>
      </div>
      <nav aria-label="Mobile navigation" className={`${sectionClasses} flex gap-4 overflow-x-auto py-2 text-sm font-medium text-slate-700 md:hidden`}>
        <Link href="/starters">Starters</Link>
        <Link href="/alternators">Alternators</Link>
        <Link href="/batteries">Batteries</Link>
        <Link href="/#find-us">Visit</Link>
      </nav>
    </header>
  );
}
