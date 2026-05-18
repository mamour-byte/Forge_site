"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BadgeCheck, Camera, CheckCircle2, Code2, Network, Server, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "42+", label: "projets livrés" },
  { value: "18+", label: "clients accompagnés" },
  { value: "3", label: "pôles d'expertise" },
  { value: "24h", label: "délai de réponse" },
];

const categories = ["Tous", "Infrastructure", "Sécurité", "Digitalisation", "Maintenance"];

const projects = [
  {
    title: "Infrastructure réseau pour bureaux professionnels",
    category: "Infrastructure",
    description:
      "Création d'un réseau local structuré avec baie de brassage, switchs managés et câblage prêt pour la croissance de l'équipe.",
    image: "/assets/images/cablage.png",
    icon: Network,
    results: ["Réseau plus stable", "Baie technique documentée", "Maintenance simplifiée"],
  },
  {
    title: "Système de vidéosurveillance IP",
    category: "Sécurité",
    description:
      "Installation de caméras IP, enregistreur NVR et accès distant sécurisé pour superviser les zones sensibles en continu.",
    image: "/assets/images/camera.jpg",
    icon: Camera,
    results: ["Accès distant sécurisé", "Couverture complète", "Enregistrement centralisé"],
  },
  {
    title: "Contrôle d'accès et interphonie",
    category: "Sécurité",
    description:
      "Mise en place de badges, interphones et gestion des accès pour sécuriser les entrées du personnel et des visiteurs.",
    image: "/assets/images/acces.png",
    icon: ShieldCheck,
    results: ["Accès mieux maîtrisés", "Traçabilité renforcée", "Gestion plus fluide"],
  },
  {
    title: "Configuration serveur métier",
    category: "Maintenance",
    description:
      "Déploiement et paramétrage d'un serveur central pour organiser les données, les comptes utilisateurs et les services internes.",
    image: "/assets/images/server.jpg",
    icon: Server,
    results: ["Données centralisées", "Sauvegardes cadrées", "Services plus fiables"],
  },
  {
    title: "Refonte de présence digitale",
    category: "Digitalisation",
    description:
      "Conception d'une interface web claire, rapide et orientée conversion pour mieux présenter les services et générer des demandes qualifiées.",
    image: "/assets/images/bg-hero.jpg",
    icon: Code2,
    results: ["Message clarifié", "Parcours plus simple", "Base SEO propre"],
  },
];

const processSteps = [
  {
    title: "Audit & Stratégie",
    description: "Nous analysons l'existant, les contraintes du terrain et les objectifs métiers pour définir le périmètre exact.",
  },
  {
    title: "Conception",
    description: "Nous préparons une architecture claire, avec des choix technologiques durables et parfaitement adaptés.",
  },
  {
    title: "Déploiement & Suivi",
    description: "Installation, tests intensifs et documentation complète pour faciliter l'exploitation par vos équipes.",
  },
];

export default function RealisationContent() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Tous" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      
      {/* HERO SECTION - Minimaliste & Typographique */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        {/* Subtle mesh gradients for premium feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--primary)] shadow-sm"
          >
            <BadgeCheck className="w-4 h-4 text-[var(--accent)]" />
            Notre Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]"
          >
            Des projets concrets,<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
              réalisés avec précision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-[var(--text-muted)] leading-relaxed"
          >
            Découvrez nos réalisations en digitalisation, infrastructure réseau et sécurité. 
            Des solutions fiables, élégantes et pensées pour durer.
          </motion.p>
        </div>
      </section>

      {/* STATS SECTION - Clean & Subtle */}
      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-[var(--border)] py-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - Bento Grid Interactive */}
      <section id="realisations" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projets sélectionnés</h2>
              <p className="mt-4 text-[var(--text-muted)]">Filtrez nos réalisations par domaine d'expertise.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                      isActive 
                        ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md shadow-[var(--primary)]/20" 
                        : "bg-[var(--card)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--foreground)]"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const Icon = project.icon;
                // Make the first item larger if 'Tous' is selected to create a Bento feel
                const isFeatured = activeCategory === "Tous" && index === 0;

                return (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                    key={project.title}
                    className={cn(
                      "group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[var(--card)] border border-[var(--border)] transition-all hover:shadow-xl hover:border-[var(--primary)]/30",
                      isFeatured ? "md:col-span-2 lg:col-span-2 md:flex-row" : "col-span-1"
                    )}
                  >
                    {/* Image Section */}
                    <div className={cn(
                      "relative overflow-hidden",
                      isFeatured ? "w-full md:w-1/2 min-h-[300px] md:min-h-full" : "w-full h-[240px]"
                    )}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content Section */}
                    <div className={cn(
                      "flex flex-col flex-1 p-6 sm:p-8",
                      isFeatured ? "md:w-1/2 justify-center" : ""
                    )}>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--primary)]">
                          <Icon className="size-5" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className={cn(
                        "font-bold text-[var(--foreground)] leading-tight mb-3",
                        isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                      )}>
                        {project.title}
                      </h3>
                      
                      <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-6 flex-1">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mt-auto">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                            <CheckCircle2 className="size-4 text-[var(--accent)]" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* METHODOLOGY SECTION - Clean Process */}
      <section className="px-6 py-24 bg-[var(--surface-soft)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Notre approche</h2>
            <p className="text-lg text-[var(--text-muted)]">Une méthode rigoureuse en trois étapes pour garantir le succès et la pérennité de chaque projet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[var(--border)]" />
            
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative z-10">
                <span className="flex size-12 items-center justify-center rounded-full bg-[var(--card)] border border-[var(--border)] text-lg font-bold text-[var(--primary)] shadow-sm mb-6">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Premium & Minimalist */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            Votre projet mérite <br className="hidden md:block" />
            une réalisation d'exception.
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
            Discutons de vos enjeux. Nous concevrons ensemble une solution parfaitement alignée avec vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:bg-[var(--primary)] hover:scale-105 active:scale-95 shadow-lg"
          >
            Démarrer un projet
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
