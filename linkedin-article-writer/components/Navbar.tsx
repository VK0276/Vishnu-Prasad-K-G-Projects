"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0077B5] flex items-center justify-center">
            <span className="text-white font-bold text-sm">Li</span>
          </div>
          <span className="text-xl font-bold text-gray-900">LinkedInk</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li><a href="#features" className="hover:text-[#0077B5] transition-colors">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-[#0077B5] transition-colors">How It Works</a></li>
          <li><a href="#testimonials" className="hover:text-[#0077B5] transition-colors">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-[#0077B5] transition-colors">Pricing</a></li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-600 hover:text-[#0077B5] transition-colors">
            Log in
          </button>
          <button className="bg-[#0077B5] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#005f8e] transition-colors">
            Start Free
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <button className="bg-[#0077B5] text-white font-semibold py-2.5 rounded-full hover:bg-[#005f8e] transition-colors">
            Start Free
          </button>
        </div>
      )}
    </nav>
  );
}
