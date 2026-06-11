"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-[#2A2A2A] z-50">
    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4A3F35] flex items-center justify-center text-white font-bold text-sm">V</div>
    <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase">Velondore</span>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isOpen 
            ? "bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-[#4A3F35]/5 py-4" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex items-center gap-10 text-sm font-medium">
              <Link href="/collections" className={`transition-colors ${pathname === "/collections" ? "text-[#2A2A2A]" : "text-[#4A3F35]/40 hover:text-[#2A2A2A]"}`}>Collections</Link>
              <Link href="#" className="text-[#4A3F35]/40 hover:text-[#2A2A2A] transition-colors">About</Link>
              <Link href="#" className="text-[#4A3F35]/40 hover:text-[#2A2A2A] transition-colors">Journal</Link>
            </nav>
            
            <div className="flex items-center gap-6 pl-10 border-l border-[#4A3F35]/10">
              <button className="text-[#4A3F35]/60 hover:text-[#2A2A2A] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="bg-[#4A3F35] text-white p-2.5 rounded-full hover:bg-[#3D342C] transition-all hover:scale-105 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button className="text-[#4A3F35]/60">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="relative text-[#4A3F35]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4A3F35] text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-[#2A2A2A] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#2A2A2A] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#2A2A2A] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F8F6] z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="h-full flex flex-col pt-32 px-10 space-y-12 overflow-y-auto no-scrollbar">
          <nav className="flex flex-col space-y-6">
            {[
              { name: "Collections", href: "/collections" },
              { name: "About Us", href: "#" },
              { name: "Journal", href: "#" },
              { name: "Store Locator", href: "#" },
            ].map((link, i) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl sm:text-5xl font-medium tracking-tighter text-[#2A2A2A] transition-all duration-700 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div 
            className={`pt-12 border-t border-[#4A3F35]/10 flex flex-col space-y-6 transition-all duration-700 delay-500 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex gap-8 text-sm font-medium text-[#4A3F35]/60">
              <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#2A2A2A]">Instagram</Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#2A2A2A]">Pinterest</Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#2A2A2A]">X.com</Link>
            </div>
            <p className="text-xs text-[#4A3F35]/40 tracking-widest uppercase">© 2024 Velondore Design</p>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content jump due to fixed header */}
      <div className="h-32 md:h-40" />
    </>
  );
}
