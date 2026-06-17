"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Tracker", href: "/", icon: "fa-crosshairs" },
    { name: "Quêtes", href: "/quests", icon: "fa-scroll" },
    { name: "Armurerie", href: "/armors", icon: "fa-shield-halved" },
    { name: "Crafts", href: "/crafts", icon: "fa-hammer" },
    { name: "Guides", href: "/guides", icon: "fa-book-open" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1d1d1d]/80 backdrop-blur-2xl border-b border-[#e9eae4]/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-3 w-full md:w-auto group">
            <motion.i 
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="fa-solid fa-dragon text-3xl text-[#c29543]"
            />
            <span className="font-black text-2xl text-[#e9eae4] tracking-[0.2em] uppercase">
              BDO<span className="text-[#c29543]">WIKI</span><span className="text-[10px] align-top text-gray-400 tracking-normal">+</span>
            </span>
          </Link>

          {/* Search Bar - Light Glassmorphism */}
          <div className="w-full md:flex-1 md:max-w-md relative group hidden md:block">
            <input
              type="text"
              placeholder="Recherche globale..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar"
              disabled
            />
            <i className="fa-solid fa-search absolute left-4 top-[14px] text-gray-400 group-focus-within:text-[#c29543] transition-colors duration-500"></i>
          </div>

          <nav className="flex space-x-1 overflow-x-auto no-scrollbar w-full md:w-auto p-1.5 bg-[#242424]/50 border border-[#e9eae4]/20 rounded-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap rounded-xl transition-colors duration-300 z-10 ${
                    isActive ? "text-[#e9eae4]" : "text-gray-400 hover:text-[#e9eae4]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#2a2a2a] rounded-xl -z-10 shadow-sm border border-[#e9eae4]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <i className={`fa-solid ${link.icon} ${isActive ? "opacity-100 text-[#c29543]" : "opacity-70"}`}></i> 
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
