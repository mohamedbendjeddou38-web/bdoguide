"use client";

import { useState } from "react";
import { bdoData } from "@/data/bdoData";
import { motion, AnimatePresence } from "framer-motion";

export default function CraftsPage() {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = bdoData.crafts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.recipe.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-24">
      {/* HEADER CALM TYPOGRAPHY */}
      <div className="max-w-3xl space-y-6">
        <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">Registres Pédagogiques</p>
        <h1 className="text-5xl md:text-7xl font-black text-[#e9eae4] tracking-tight leading-[1.1]">
          Artisanat & Trésors
        </h1>
        <p className="text-lg text-gray-300 font-[var(--font-lora)] leading-relaxed">
          Recettes et astuces pour obtenir les objets les plus rares. Chaque méthode est déconstruite pour vous guider pas à pas.
        </p>
      </div>

      <div className="w-full md:w-96 relative group mb-8">
        <input
          type="text"
          className="w-full bg-[#2a2a2a] text-[#e9eae4] rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[#c29543] border border-black transition-all shadow-sm font-medium"
          placeholder="Filtrer les crafts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filtered.map((c, i) => (
          <div key={i} className="card p-8 bg-[#2a2a2a] flex flex-col group cursor-pointer" onClick={() => setExpandedId(expandedId === i ? null : i)}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <h3 className="text-xl font-bold text-[#e9eae4] group-hover:text-[#c29543] transition-colors flex items-center gap-3">
                {c.name}
              </h3>
              <span className="text-xs uppercase px-4 py-1.5 bg-[#2a2a2a] text-[#c29543] border border-[#c29543]/20 font-bold rounded-full shadow-sm text-center">
                {c.category}
              </span>
            </div>
            
            <div className="bg-[#242424] p-5 rounded-2xl border border-[#e9eae4] mb-4">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold block mb-2">
                Recette Principale
              </span>
              <span className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed block">{c.recipe}</span>
            </div>

            <div className="mt-auto text-center border-t border-[#e9eae4] pt-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-[#c29543] transition-colors">
                    {expandedId === i ? "Fermer les détails" : "Détails pédagogiques"}
                </span>
            </div>

            <AnimatePresence>
                {expandedId === i && c.details && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-[#e9eae4]"
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-[#2a2a2a] rounded-xl p-5 border border-[#e9eae4] shadow-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Quand s'y mettre ?</h4>
                                <p className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed">{c.details.prereq}</p>
                            </div>
                            <div className="bg-[#2a2a2a] rounded-xl p-5 border border-[#e9eae4] shadow-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Où chercher ?</h4>
                                <p className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed">{c.details.start}</p>
                            </div>
                            <div className="bg-[#2a2a2a] rounded-xl p-5 border border-[#e9eae4] shadow-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Comment faire ?</h4>
                                <p className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed" dangerouslySetInnerHTML={{ __html: c.details.process }}></p>
                            </div>
                            <div className="bg-[#2a2a2a] rounded-xl p-5 border border-[#c29543]/20 shadow-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Pourquoi faire ça ?</h4>
                                <p className="text-[#e9eae4] font-medium font-[var(--font-lora)] leading-relaxed">{c.details.reward}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
