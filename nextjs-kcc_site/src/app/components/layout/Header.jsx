"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "gallery", label: "Gallery" },
  { id: "tournaments", label: "Tournaments", path: "/tournaments" },
  { id: "contact", label: "Contact" },
  { id: "store", label: "Store", path: "/store" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "hero") {
      // If on a different page and hero section doesn't exist, navigate home
      window.location.href = "/";
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 text-left group"
            aria-label="Go to homepage"
          >
            <span className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center overflow-hidden">
              <Image
                src="/Logo.svg"
                alt="Karen Chess Club"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </span>
            <span className="flex flex-col">
              <span className="text-lg sm:text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                Karen Chess Club
              </span>
              <span className="text-xs text-slate-400">
                Strategic excellence
              </span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.id}
                  href={item.path}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-orange-300 bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                const contactElement = document.getElementById("contact");
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  // If on a different page, navigate home to contact section
                  window.location.href = "/#contact";
                }
              }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20 hover:from-orange-400 hover:to-amber-400 transition-all"
            >
              Join the Club
            </button>
          </div>

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-full border border-white/10 bg-white/5"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`h-0.5 w-5 bg-white mx-auto transition-transform ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-5 bg-white mx-auto transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-0.5 w-5 bg-white mx-auto transition-transform ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 space-y-2 bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
          {navItems.map((item) =>
            item.path ? (
              <Link
                key={item.id}
                href={item.path}
                className="block text-left px-4 py-3 rounded-2xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                  activeSection === item.id
                    ? "text-orange-300 bg-white/10"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            )
          )}
          <Link
            href="/blog"
            className="block px-4 py-3 rounded-2xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all"
          >
            Blog
          </Link>
          <button
            onClick={() => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
              } else {
                // If on a different page, navigate home to contact section
                window.location.href = "/#contact";
              }
              setIsMenuOpen(false);
            }}
            className="w-full px-4 py-3 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20"
          >
            Join the Club
          </button>
        </div>
      </div>
    </header>
  );
}
