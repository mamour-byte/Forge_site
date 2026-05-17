"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, Globe, Database, Smartphone, Palette, TrendingUp, Server } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projectTypes = [
  {
    id: "website",
    title: "Site Web Premium & E-commerce",
    description: "Vitrines de haute qualité, architectures headless et boutiques en ligne scalables avec CMS sur mesure.",
    icon: Globe,
    href: "/services/digitalisation#web",
  },
  {
    id: "app",
    title: "Application Métier Sur-Mesure",
    description: "Logiciels internes, ERP, CRM et outils SAAS développés spécifiquement pour automatiser vos processus.",
    icon: Database,
    href: "/services/digitalisation#app",
  },
  {
    id: "mobile",
    title: "Application Mobile",
    description: "Développement iOS et Android avec des technologies modernes pour une expérience utilisateur irréprochable.",
    icon: Smartphone,
    href: "/services/digitalisation#mobile",
  },
  {
    id: "branding",
    title: "Branding & Identité Visuelle",
    description: "Création de logotypes, chartes graphiques et direction artistique pour faire rayonner votre marque.",
    icon: Palette,
    href: "/services/marketing#branding",
  },
  {
    id: "marketing",
    title: "Stratégie & Acquisition",
    description: "Campagnes publicitaires, SEO performant et gestion des réseaux sociaux pour maximiser votre visibilité.",
    icon: TrendingUp,
    href: "/services/marketing#acquisition",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Cloud & Réseau",
    description: "Installation réseau, configuration serveurs, cybersécurité et maintenance de vos fondations techniques.",
    icon: Server,
    href: "/services/infrastructure",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const ProjectTypesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[var(--background)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Nos Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6"
          >
            Quel type de projet vous faut-il ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--text-muted)] max-w-2xl"
          >
            De la vitrine digitale à l'infrastructure cloud — choisissez le format technique adapté à la croissance de votre activité.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projectTypes.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group flex flex-col h-full bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[var(--primary)]/20 hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-[var(--surface-soft)] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[var(--primary)]/10">
                  <Icon className="w-5 h-5 text-[var(--primary)]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Action Link */}
                <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-[var(--accent)] transition-colors group-hover:text-[var(--primary)]">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA to contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-[var(--surface-soft)] border border-[var(--line-subtle)]">
            <span className="px-4 py-2 text-sm text-[var(--text-muted)]">Un besoin très spécifique ?</span>
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white bg-[var(--primary)] rounded-full shadow-sm hover:bg-[var(--primary)]/90 transition-colors"
            >
              Parlons-en
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
