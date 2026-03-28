"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, Activity, User, Info } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Músculos", href: "/muscles", icon: <User className="w-5 h-5" /> },
    { name: "Huesos", href: "/bones", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Movimientos", href: "/movements", icon: <Activity className="w-5 h-5" /> },
    { name: "Técnicas de Masaje", href: "/massage", icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-100 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-emerald-900" />
              </div>
              <span className="text-xl font-bold tracking-tight">Anatomía & <span className="text-emerald-400">Masaje</span></span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-800 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-800 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-700"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
