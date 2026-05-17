"use client";
import { Handshake, ShieldCheck } from "lucide-react";
import { motion } from 'framer-motion';
import { use } from "react";



const companies = [
    'assets/images/partners/Ethic.png',
    'assets/images/partners/Alu.png',
    'assets/images/partners/SRT.png',
    'assets/images/partners/oryx.png',
  ];

export function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <Handshake className="size-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Nos partenaires
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ils avancent avec Forge
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Nous construisons des relations durables avec des équipes qui cherchent des solutions simples, solides et
            bien exécutées.
          </p>
        </div>

        <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-12 md:gap-40"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 40 , ease: 'linear' }}
              >
              {[...companies, ...companies].map((logo, index) => (
          <div
          key={index}
          className="flex-shrink-0 w-1/3 md:w-40 lg:w-48 flex justify-center items-center"
          >
          <img
            src={logo}
            alt="Entreprise partenaire"
            className="h-20 md:h-24 lg:h-28 object-contain grayscale hover:grayscale-0 transition"
            
          />
          </div>
              ))}
              </motion.div>
        </div>

      
      </div>
    </section>
  );
}
