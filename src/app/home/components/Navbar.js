"use client";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-12 py-4 bg-[#0a232f] text-white font-sans">
      <div className="flex items-center gap-12">
        <div className="text-xl font-bold tracking-tight">ultra.</div>
        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Capabilities
          </a>
          <a href="#" className="hover:underline">
            Team
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-[#0a232f] px-4 py-2 rounded font-medium text-sm">
          Request a Consultant
        </button>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="bg-[#18394a] px-4 py-2 rounded font-medium flex items-center gap-2 text-sm"
          >
            Join ultra
            <svg
              className="w-4 h-4"
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
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-[#0a232f] rounded shadow-lg z-10 text-sm">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                As consultant
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                As company
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
