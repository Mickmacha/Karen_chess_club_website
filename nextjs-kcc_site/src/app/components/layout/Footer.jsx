"use client";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Image src="/Logo.svg" alt="Karen Chess Club" width={36} height={36} />
              </span>
              <div>
                <p className="text-lg font-semibold text-white">Karen Chess Club</p>
                <p className="text-xs text-slate-400">Strategic excellence</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              A focused chess community in Karen, Nairobi. We coach, train, and
              compete together.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-orange-300 transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Resources</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-orange-300 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Karen, Nairobi</li>
              <li>+254 746 842 144</li>
              <li>karenchessclub@gmail.com</li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:from-orange-400 hover:to-amber-400 transition"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Karen Chess Club. All rights reserved.</span>
          <span>Designed for strategic excellence.</span>
        </div>
      </div>
    </footer>
  );
}
