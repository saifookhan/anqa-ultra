"use client";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-12 py-4 bg-[#01121B] text-white font-sans sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <div className="text-xl font-400 tracking-tight">ultra.</div>
        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#capabillities" className="hover:underline">
            Capabilities
          </a>
          <a href="#team" className="hover:underline">
            Team
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-[#0a232f] px-4 py-2 rounded-full font-medium text-sm">
          Request a Consultant
        </button>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="bg-[#18394a] px-4 py-2 rounded font-medium flex items-center gap-2 text-sm"
          >
            Join ultra
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`absolute right-0 mt-2 w-40 bg-[#0a232f] text-white rounded shadow-lg z-10 text-sm border border-gray-300 transform transition-all duration-200 ease-in-out origin-top-right ${
              dropdownOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-[#18394a] hover:text-white"
            >
              As consultant
            </a>
            <div className="border-t border-gray-700 my-1"></div>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-[#18394a] hover:text-white"
            >
              As a company
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
