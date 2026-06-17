"use client";

import { useEffect, useState } from "react";
import { trackerLogic } from "@/data/bdoData";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mécaniques de Physique des Ressorts (Spring Dynamics)
const springConfig = { type: "spring", stiffness: 250, damping: 35, mass: 1 };
const springBounce = { type: "spring", stiffness: 400, damping: 15, mass: 0.8 };

export default function TrackerPage() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("bdo_tracker");
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const toggleTask = (taskId: string) => {
    const newProgress = { ...progress, [taskId]: !progress[taskId] };
    setProgress(newProgress);
    localStorage.setItem("bdo_tracker", JSON.stringify(newProgress));
  };

  if (!mounted) return null;

  const total = trackerLogic.length;
  const completed = trackerLogic.filter((t) => progress[t.id]).length;
  const percentage = Math.round((completed / total) * 100) || 0;

  let priorityMsg = "Félicitations, l'apogée a été atteinte (766+ GS). Déploiement en Guerres de Noeuds conseillé.";
  let priorityTask = null;
  for (const task of trackerLogic) {
    if (!progress[task.id]) {
      priorityMsg = task.failMsg;
      priorityTask = task;
      break;
    }
  }

  return (
    <div className="space-y-12 pb-24">
      {/* 
        BENTO BOX UI 2.0 - Soft UI & Light Mode
      */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

        {/* Module de Progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
          className="col-span-1 md:col-span-8 p-10 bg-[#2a2a2a] border border-[#e9eae4] relative overflow-hidden group shadow-sm rounded-3xl"
        >
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[250px]">
            <div>
              <p className="text-gray-400 font-mono text-xs tracking-[0.2em] uppercase mb-4">Télémétrie de Progression</p>
              <h1 className="text-5xl md:text-7xl font-black text-[#e9eae4] tracking-tighter leading-[0.9] mb-6">
                Progression
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c29543] to-[#8f6d30]">
                  du Compte
                </span>
              </h1>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-end mb-3">
                <span className="text-gray-400 font-medium tracking-wide text-sm">Achèvement Pédagogique</span>
                <span className="text-6xl font-light font-mono text-[#e9eae4] tracking-tighter leading-none">{percentage}<span className="text-2xl text-gray-400">%</span></span>
              </div>
              <div className="w-full bg-[#242424] rounded-full h-1 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ ...springConfig, delay: 0.3 }}
                  className="bg-[#c29543] h-full shadow-[0_0_20px_rgba(194,149,67,0.5)]"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module d'Objectif Prioritaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.15 }}
          className="col-span-1 md:col-span-4 p-8 bg-[#2a2a2a] border border-[#c29543]/20 flex flex-col justify-between relative overflow-hidden shadow-sm rounded-3xl"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-auto">
              <p className="text-[#c29543] font-mono text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#c29543] shadow-[0_0_10px_rgba(194,149,67,0.6)] animate-pulse"></span>
                Étape Suivante
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#e9eae4] mb-4 leading-tight tracking-tight">
                {priorityTask ? priorityTask.label : "Endgame Atteint"}
              </h3>
            </div>

            <p className="text-gray-300 font-[var(--font-lora)] text-sm leading-relaxed border-l-2 border-[#c29543]/30 pl-4 mt-6">
              {priorityMsg}
            </p>
          </div>
        </motion.div>
      </section>

      {/* LISTE INTERACTIVE - Hyper Pédagogie */}
      <section className="space-y-4">
        {trackerLogic.map((task, i) => {
          const isChecked = !!progress[task.id];

          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: i * 0.03 }}
              className={cn(
                "group relative p-6 md:p-8 rounded-3xl border overflow-hidden transition-all duration-[var(--spring-duration)] ease-[var(--bezier-smooth)]",
                isChecked
                  ? "bg-[#242424] border-[#e9eae4] opacity-60 grayscale-[30%]"
                  : "bg-[#2a2a2a] border-[#e9eae4] hover:border-[#e9eae4] shadow-sm hover:shadow-md cursor-pointer"
              )}
            >
              <div
                className="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-8"
                onClick={() => setExpandedId(expandedId === task.id ? null : task.id)}
              >
                {/* Checkbox Soft UI */}
                <div className="flex-shrink-0 pt-1">
                  <div
                    onClick={(e) => { e.stopPropagation(); toggleTask(task.id); }}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-[var(--spring-duration)] ease-[var(--bezier-smooth)] cursor-pointer",
                      isChecked
                        ? "bg-[#c29543] border-[#c29543] shadow-[0_0_15px_rgba(194,149,67,0.4)]"
                        : "bg-[#2a2a2a] border-[#e9eae4] group-hover:border-[#c29543]"
                    )}>
                    <AnimatePresence>
                      {isChecked && (
                        <motion.i
                          initial={{ scale: 0, opacity: 0, rotate: -45 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={springBounce}
                          className="fa-solid fa-check text-white text-sm"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Architecture du Contenu */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4">
                    <h2 className={cn(
                      "text-xl md:text-2xl font-bold tracking-tight transition-colors",
                      isChecked ? "text-gray-400 line-through decoration-gray-300" : "text-[#e9eae4] group-hover:text-[#c29543]"
                    )}>
                      {task.label}
                    </h2>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-3 py-1.5 rounded-full bg-[#242424] border border-[#e9eae4] text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400">
                        {task.difficulty}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-[#242424] border border-[#e9eae4] text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400">
                        <i className="fa-regular fa-clock mr-1.5 opacity-70"></i>
                        {task.timeEstimate}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === task.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#e9eae4]" onClick={(e) => e.stopPropagation()}>
                          <div className="bg-[#242424] rounded-2xl p-4 border border-[#e9eae4]">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Quand (Prérequis)</h4>
                            <p className="text-sm text-[#e9eae4] font-[var(--font-lora)]">{task.details.prereq}</p>
                          </div>
                          <div className="bg-[#242424] rounded-2xl p-4 border border-[#e9eae4]">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Quoi (Démarrage)</h4>
                            <p className="text-sm text-[#e9eae4] font-[var(--font-lora)]">{task.details.start}</p>
                          </div>
                          <div className="bg-[#242424] rounded-2xl p-4 border border-[#e9eae4] md:col-span-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Comment (Processus)</h4>
                            <p className="text-sm text-[#e9eae4] font-[var(--font-lora)]" dangerouslySetInnerHTML={{ __html: task.details.process }}></p>
                          </div>
                          <div className="bg-[#2a2a2a] rounded-2xl p-4 border border-[#c29543]/20 md:col-span-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Pourquoi (Récompense)</h4>
                            <p className="text-sm text-[#e9eae4] font-medium font-[var(--font-lora)]">{task.details.reward}</p>
                          </div>
                        </div>

                        {/* Liens d'Action Contextuels */}
                        {task.relatedLinks && task.relatedLinks.length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                            {task.relatedLinks.map((link, idx) => (
                              <Link
                                key={idx}
                                href={link.url}
                                className="group/link px-5 py-2.5 bg-[#2a2a2a] hover:bg-[#242424] border border-[#e9eae4] hover:border-[#e9eae4] rounded-full text-xs font-bold tracking-widest uppercase text-gray-300 hover:text-[#e9eae4] transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow"
                              >
                                <i className={cn(link.icon, "opacity-70 group-hover/link:opacity-100 group-hover/link:text-[#c29543] transition-colors")}></i>
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
