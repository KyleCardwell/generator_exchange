"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brandColors } from "@/constants/colors";
import { sectionClasses } from "@/constants/styles";

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [openForPath, setOpenForPath] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesOpen = openForPath === pathname;

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenForPath(null);
        setMobileMenuOpen(false);
      }
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setOpenForPath(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Visit", href: "/#find-us" },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className={`${sectionClasses} hidden items-center justify-between py-4 md:flex`}>
        <Link href="/" className="text-lg font-bold uppercase tracking-tight" style={{ color: brandColors.ink }}>
          GENERATOR EXCHANGE
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm font-medium text-slate-700">
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

      <div className="mx-auto grid w-full max-w-6xl grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-center px-6 py-1.5 md:hidden">
        <a
          href="tel:8012600642"
          aria-label="Call Generator Exchange at 801-260-0642"
          className="flex size-9 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
          </svg>
        </a>

        <Link
          href="/"
          className="truncate px-2 text-center text-[15px] font-bold uppercase tracking-tight"
          style={{ color: brandColors.ink }}
        >
          GENERATOR EXCHANGE
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          className="flex size-9 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileMenuOpen ? (
              <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto w-full max-w-6xl border-t border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 md:hidden"
        >
          <div className="grid gap-1">
            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="rounded-lg px-3 py-2 hover:bg-slate-100">Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/alternators" className="rounded-lg px-3 py-2 hover:bg-slate-100">Alternators</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/starters" className="rounded-lg px-3 py-2 hover:bg-slate-100">Starters</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/batteries" className="rounded-lg px-3 py-2 hover:bg-slate-100">Batteries</Link>
            {navItems.map((item) => (
              <Link
                key={item.label}
                onClick={() => setMobileMenuOpen(false)}
                href={item.href}
                className="rounded-lg px-3 py-2 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
