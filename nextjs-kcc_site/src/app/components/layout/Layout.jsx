"use client";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.12),_transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.12),_transparent_45%)]"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <Header />

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <WhatsAppButton
        phoneNumber="254746842144"
        message="Hello, I would like to know more about Karen Chess Club programs."
      />

      <Footer />
    </div>
  );
}