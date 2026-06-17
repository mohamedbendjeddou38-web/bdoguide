"use client";

import { useState } from "react";
import { bdoData } from "@/data/bdoData";
import { motion, AnimatePresence } from "framer-motion";

export default function ArmorsPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Tous");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const types = ["Tous", ...Array.from(new Set(bdoData.armors.map((a) => a.type)))];

  const filtered = bdoData.armors.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.tier.toLowerCase().includes(search.toLowerCase()) ||
      a.desc.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === "Tous" || a.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-16 pb-24">
      {/* HEADER CALM TYPOGRAPHY */}
      <div className="max-w-3xl space-y-6">
        <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">Registres Pédagogiques</p>
        <h1 className="text-5xl md:text-7xl font-black text-[#e9eae4] tracking-tight leading-[1.1]">
          L'Armurerie
        </h1>
        <p className="text-lg text-gray-300 font-[var(--font-lora)] leading-relaxed">
          Comprenez le fonctionnement de chaque pièce d'équipement. Découvrez pourquoi vous en avez besoin et comment l'obtenir sans effort.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select
          className="bg-[#2a2a2a] text-[#e9eae4] rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[#c29543] border border-[#e9eae4] transition-all shadow-sm font-medium"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <div className="relative group w-full md:w-96">
          <input
            type="text"
            className="w-full bg-[#2a2a2a] text-[#e9eae4] rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[#c29543] border border-[#e9eae4] transition-all shadow-sm font-medium"
            placeholder="Filtrer l'armurerie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
        {filtered.map((a, i) => (
          <div key={i} className="card p-6 bg-[#2a2a2a] flex flex-col group cursor-pointer" onClick={() => setExpandedId(expandedId === i ? null : i)}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#e9eae4] group-hover:text-[#c29543] transition-colors flex items-center gap-3">
                {a.name}
              </h3>
            </div>
            
            <div className="flex gap-2 mb-4">
              {a.playstyle && a.playstyle.split('/').map((style, idx) => {
                let textColor = "text-gray-400";
                let borderColor = "border-[#e9eae4]/30";
                if (style.toLowerCase() === "pve") {
                  textColor = "text-blue-400";
                  borderColor = "border-blue-500/30";
                } else if (style.toLowerCase() === "pvp") {
                  textColor = "text-red-400";
                  borderColor = "border-red-500/30";
                } else if (style.toLowerCase() === "end-game") {
                  textColor = "text-[#c29543]";
                  borderColor = "border-[#c29543]/30";
                }
                return (
                  <span key={idx} className={`text-xs uppercase px-3 py-1 bg-black border ${borderColor} font-bold ${textColor}`}>
                    {style}
                  </span>
                );
              })}
              <span className="text-xs uppercase px-3 py-1 bg-black border border-[#e9eae4]/30 font-bold text-gray-300">
                {a.type}
              </span>
            </div>
            
            <p className="text-gray-300 font-[var(--font-lora)] leading-relaxed mb-4">{a.desc}</p>
            
            <div className="mt-auto text-center border-t border-[#e9eae4] pt-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-[#c29543] transition-colors">
                    {expandedId === i ? "Fermer les détails" : "Explication détaillée"}
                </span>
            </div>

            <AnimatePresence>
                {expandedId === i && a.details && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-[#e9eae4]"
                    >
                        <div className="space-y-3">
                            <div className="bg-[#242424] rounded-xl p-4 border border-[#e9eae4]">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Prérequis (Quand)</h4>
                                <p className="text-sm text-[#e9eae4] font-[var(--font-lora)]">{a.details.prereq}</p>
                            </div>
                            <div className="bg-[#242424] rounded-xl p-4 border border-[#e9eae4]">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Démarrage (Quoi)</h4>
                                <p className="text-sm text-[#e9eae4] font-[var(--font-lora)]">{a.details.start}</p>
                            </div>
                            <div className="bg-[#242424] rounded-xl p-4 border border-[#e9eae4]">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Processus (Comment)</h4>
                                <p className="text-sm text-[#e9eae4] font-[var(--font-lora)]" dangerouslySetInnerHTML={{ __html: a.details.process }}></p>
                            </div>
                            <div className="bg-[#2a2a2a] rounded-xl p-4 border border-[#c29543]/20">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Objectif (Pourquoi)</h4>
                                <p className="text-sm text-[#e9eae4] font-medium font-[var(--font-lora)]">{a.details.reward}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full p-8 text-center text-gray-400">
            Aucun équipement trouvé
          </div>
        )}
      </div>
    </div>
  );
}
