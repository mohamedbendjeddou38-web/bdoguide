"use client";

import { bdoData } from "@/data/bdoData";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GuidesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 250, damping: 35 } }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* HEADER CALM TYPOGRAPHY */}
      <div className="max-w-3xl space-y-6">
        <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">Base de Données Pédagogique</p>
        <h1 className="text-5xl md:text-7xl font-black text-[#e9eae4] tracking-tight leading-[1.1]">
          Guides &
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c29543] to-[#8f6d30]">
            Protocoles
          </span>
        </h1>
        <p className="text-lg text-gray-300 font-[var(--font-lora)] leading-relaxed">
          Explorez des guides détaillés pour optimiser votre expérience. Des mécaniques complexes expliquées simplement pour tous les niveaux.
        </p>
      </div>

      {/* BENTO BOX UI 2.0 - HERO GRID LIGHT MODE */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <motion.div variants={itemVariants} className="md:col-span-8 card p-10 bg-[#2a2a2a] border border-[#c29543]/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-[var(--spring-duration)] ease-[var(--bezier-smooth)] pointer-events-none">
            <i className="fa-solid fa-crown text-[10rem] text-[#c29543]"></i>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#c29543] shadow-[0_0_10px_rgba(194,149,67,0.6)] animate-pulse"></span>
                  <h2 className="text-3xl font-bold text-[#e9eae4] tracking-tight">La Méta 766 GS</h2>
                </div>
                <p className="text-[#e9eae4] font-[var(--font-lora)] leading-relaxed text-base max-w-xl">
                  Pour atteindre le Hardcap, la règle est simple : Les accessoires Kharazad sont obligatoires (remplaçant les anciens Deboreka ou Tungrad), le set d'armure antique (Dieu Déchu, Labreska, etc.) doit atteindre le niveau TET, et tu dois te forger des Armes Souveraines en fusionnant tes Sombrétoiles PEN.
                </p>
            </div>
            <p className="text-[#c29543] font-bold text-xs tracking-widest uppercase mt-8">
              Vérifiez la télémétrie de progression.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-4 card p-8 bg-[#2a2a2a] border border-[#e9eae4] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <i className="fa-solid fa-gem text-3xl text-blue-500 mb-5"></i>
              <h2 className="text-2xl font-bold text-[#e9eae4] mb-3 tracking-tight">Système Kharazad</h2>
              <p className="text-gray-300 font-[var(--font-lora)] leading-relaxed text-sm">
                Les accessoires violets Kharazad ne se détruisent plus en cas d'échec. Intégration du Cristal de l'Aube (PA/Précision/DR).
              </p>
            </div>
            <div className="mt-8">
              <span className="px-3 py-1.5 rounded-full bg-blue-100 text-[10px] font-bold tracking-widest uppercase text-blue-700">
                Changement de Paradigme
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* DYNAMIC LIST */}
      <div className="space-y-16 mt-8">
        {bdoData.guides.map((g, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 250, damping: 35 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-[#e9eae4] tracking-tight uppercase">{g.category}</h3>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {g.articles.map((a, j) => (
                <Link key={j} href={`/guides/${a.slug}`} className="block h-full">
                  <div className="card h-full p-8 bg-[#2a2a2a] group hover:shadow-md cursor-pointer border border-[#e9eae4] hover:border-[#c29543]/50 transition-all">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#242424] flex items-center justify-center border border-[#e9eae4] text-gray-400 group-hover:text-[#c29543] group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#2a2a2a] group-hover:border-[#c29543]/30 transition-all duration-[var(--spring-duration)] ease-[var(--bezier-smooth)]">
                        <i className={`fa-solid ${a.icon} text-xl`}></i>
                      </div>
                      <h4 className="text-xl font-bold text-[#e9eae4] tracking-tight mt-1 group-hover:text-[#c29543] transition-colors">{a.title}</h4>
                    </div>
                    <div className="text-base text-gray-300 font-[var(--font-lora)] leading-relaxed" dangerouslySetInnerHTML={{ __html: a.content }}></div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
