"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            DropAccess
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/swap"
              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-colors"
            >
              Buy DROPA
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-light border-b border-white/5">
          <div className="px-4 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/swap"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium text-center"
            >
              Buy DROPA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
