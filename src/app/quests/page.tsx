"use client";

import { useState } from "react";
import { bdoData } from "@/data/bdoData";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function QuestsPage() {
  const [openQuests, setOpenQuests] = useState<Record<number, boolean>>({});

  const toggleDetails = (index: number) => {
    setOpenQuests((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const springConfig = { type: "spring" as const, stiffness: 250, damping: 35 };

  return (
    <div className="space-y-20 pb-24">
      {/* HEADER CALM TYPOGRAPHY */}
      <div className="max-w-3xl space-y-6">
        <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">Registres Pédagogiques</p>
        <h1 className="text-5xl md:text-7xl font-black text-[#e9eae4] tracking-tight leading-[1.1]">
          L'Ordre des Quêtes
        </h1>
        <p className="text-lg text-gray-300 font-[var(--font-lora)] leading-relaxed">
          Comprendre l'écosystème narratif de Black Desert est essentiel. Cette section détaille avec précision chaque étape cruciale de votre progression pour ne jamais vous sentir perdu.
        </p>
      </div>

      <div className="space-y-6">
        {bdoData.quests.map((q, i) => {
          const isCritique = q.priority === "Critique";
          const isHaute = q.priority === "Haute";
          
          const badgeColor = isCritique
            ? "bg-[#1d1d1d] text-red-400 border-red-500/30" 
            : isHaute
            ? "bg-[#1d1d1d] text-orange-400 border-orange-500/30"
            : "bg-[#1d1d1d] text-blue-400 border-blue-500/30";
            
          const icon = isCritique ? "fa-solid fa-fire" : "fa-solid fa-circle-info";
          const isOpen = !!openQuests[i];

          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: i * 0.05 }}
              className="group card p-6 md:p-10 bg-[#2a2a2a]"
            >
              <div 
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer select-none"
                onClick={() => toggleDetails(i)}
              >
                <div className="flex-1 flex gap-6 items-center">
                  <div className={cn(
                    "w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-700",
                    isCritique ? "bg-[#1d1d1d] border-red-500/30 text-red-400 group-hover:bg-red-500/10" 
                    : isHaute ? "bg-[#1d1d1d] border-orange-500/30 text-orange-400 group-hover:bg-orange-500/10"
                    : "bg-[#1d1d1d] border-blue-500/30 text-blue-400 group-hover:bg-blue-500/10"
                  )}>
                    <i className={cn(icon, "text-2xl")} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[#e9eae4] tracking-tight mb-2 group-hover:text-[#c29543] transition-colors">
                      {q.title}
                    </h3>
                    <p className="text-base text-gray-400 font-[var(--font-lora)] leading-relaxed max-w-3xl">{q.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pl-20 md:pl-0">
                  <span
                    className={cn("px-4 py-1.5 border rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap", badgeColor)}
                  >
                    PRIORITÉ {q.priority}
                  </span>
                  
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={springConfig}
                    className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center border border-[#e9eae4] group-hover:bg-[#242424] transition-colors"
                  >
                    <i className="fa-solid fa-chevron-down text-sm text-gray-400 group-hover:text-gray-300" />
                  </motion.div>
                </div>
              </div>

              {/* Contenu détaillé (Hyper-Pédagogie Bento Grid) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ ...springConfig, duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 pt-8 border-t border-[#e9eae4]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                        {/* Carte QUAND (Prérequis) */}
                        <div className="p-6 rounded-2xl bg-[#242424] border border-[#e9eae4] hover:shadow-md transition-shadow">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                            <i className="fa-regular fa-clock text-blue-400"></i> Quand commencer ?
                          </h4>
                          <p className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed">
                            {q.details.prereq}
                          </p>
                        </div>
                        
                        {/* Carte QUOI (Démarrer) */}
                        <div className="p-6 rounded-2xl bg-[#242424] border border-[#e9eae4] hover:shadow-md transition-shadow">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                            <i className="fa-solid fa-play text-green-400"></i> Quoi faire (Lancement)
                          </h4>
                          <p className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed">
                            {q.details.start}
                          </p>
                        </div>

                        {/* Carte COMMENT (Process) */}
                        <div className="p-6 rounded-2xl bg-[#242424] border border-[#e9eae4] hover:shadow-md transition-shadow lg:col-span-2">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                            <i className="fa-solid fa-list-check text-purple-400"></i> Comment procéder (Étape par Étape)
                          </h4>
                          <div 
                            className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed prose prose-p:my-2 prose-strong:text-[#e9eae4] max-w-none"
                            dangerouslySetInnerHTML={{ __html: q.details.process }}
                          />
                        </div>

                        {/* Carte POURQUOI (Récompense) */}
                        <div className="p-6 rounded-2xl bg-[#2a2a2a] border border-[#c29543]/20 hover:shadow-md transition-shadow lg:col-span-2">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c29543] mb-3">
                            <i className="fa-solid fa-gift"></i> Pourquoi le faire (Valeur Ajoutée)
                          </h4>
                          <p className="text-[#e9eae4] font-[var(--font-lora)] font-medium leading-relaxed">
                            {q.details.reward}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
