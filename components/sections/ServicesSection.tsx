"use client";

/* eslint-disable react/no-unescaped-entities */

import { useRef } from "react";
import { Code2, Megaphone, Network, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    id: "digitalisation",
    title: "Développement & Digitalisation",
    description: "Des solutions techniques robustes pour automatiser et développer votre activité.",
    icon: Code2,
    color: "var(--primary)",
    gradient: "from-[var(--primary)]/20 to-transparent",
    href: "/services/digitalisation",
    features: [
      "Sites web professionnels",
      "Plateformes web sur mesure",
      "ERP / CRM & Systèmes de gestion",
      "Applications cloud",
      "APIs & automatisation",
      "Applications mobiles iOS & Android",
    ],
  },
  {
    id: "marketing",
    title: "Marketing Digital & Branding",
    description: "Une stratégie d'image et d'acquisition pour faire rayonner votre marque.",
    icon: Megaphone,
    color: "var(--accent)",
    gradient: "from-[var(--accent)]/20 to-transparent",
    href: "/services/marketing",
    features: [
      "Gestion des réseaux sociaux",
      "Campagnes publicitaires",
      "Identité visuelle & Création de logo",
      "Charte graphique",
      "Branding d’entreprise",
      "Création de contenu",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Réseau",
    description: "Des fondations solides et sécurisées pour la continuité de vos services.",
    icon: Network,
    color: "var(--primary)",
    gradient: "from-[var(--primary)]/20 to-transparent",
    href: "/services/infrastructure",
    features: [
      "Installation réseau & Câblage",
      "Configuration routeurs & switchs",
      "Solutions cloud & serveurs",
      "Maintenance informatique",
      "Sécurité réseau",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[var(--background)] overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--primary)]/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-soft)] border border-[var(--line-subtle)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              Nos expertises
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6"
          >
            L&apos;excellence technologique <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
              à chaque niveau.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--text-muted)] leading-relaxed"
          >
            Découvrez nos 3 pôles d'expertise conçus pour vous accompagner de la fondation de votre infrastructure jusqu'au rayonnement de votre marque.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative flex flex-col h-full rounded-3xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--primary)]/30 overflow-hidden"
              >
                {/* Glow Effect inside card */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-bl-full blur-3xl",
                    service.gradient
                  )}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[var(--border)] bg-[var(--surface-soft)] transition-colors group-hover:bg-white"
                    style={{ color: service.color }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--accent)]/80 mt-0.5" />
                        <span className="text-sm text-[var(--foreground)] font-medium leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-[var(--border)]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors"
                    >
                      Découvrir ce pôle
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
