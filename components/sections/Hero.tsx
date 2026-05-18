"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DM_Sans, Syne } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";
import computerAnimation from "@/public/assets/lotties/computer.json";
import digitalisationAnimation from "@/public/assets/lotties/digitalisation.json";
import infrastructureAnimation from "@/public/assets/lotties/infrastructure.json";
import marketingAnimation from "@/public/assets/lotties/marketing.json";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SLIDE_INTERVAL = 20000;

const slides = [
  {
    id: 1,
    title: "Forge",
    description:
      "Agence digitale à Dakar : nous concevons des solutions web, marketing et infrastructure pour aider les PME et entreprises sénégalaises à croître avec clarté.",
    animation: digitalisationAnimation,
    accent: "from-accent/16 to-white/70",
  },
  {
    id: 2,
    title: "Digitalisation",
    description:
      "Sites web, applications métier, ERP et automatisation : des outils sur mesure qui simplifient vos opérations et accélèrent votre productivité.",
    animation: digitalisationAnimation,
    accent: "from-accent/16 to-white/70",
  },
  {
    id: 3,
    title: "Marketing digital",
    description:
      "Branding, SEO, réseaux sociaux et campagnes publicitaires : une stratégie d'acquisition claire pour développer votre visibilité et convertir vos prospects.",
    animation: marketingAnimation,
    accent: "from-primary/16 to-white/70",
  },
  {
    id: 4,
    title: "Infrastructure",
    description:
      "Réseau, serveurs, vidéosurveillance et cybersécurité : des fondations techniques fiables pour connecter, sécuriser et faire évoluer vos services.",
    animation: infrastructureAnimation,
    accent: "from-primary/14 to-accent/10",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const currentSlide = slides[activeIndex];

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection("next");
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className={cn(dmSans.className, "relative isolate overflow-hidden bg-white text-foreground ")}>
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(color-mix(in_srgb,var(--primary)_6%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--primary)_6%,transparent)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />

      <div className="mx-auto flex min-h-[80dvh] w-full max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_520px]">
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2"
            >
              <span className="size-2 shrink-0 rounded-full bg-accent" />
              <span className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                Votre partenaire digital - Senegal & Afrique
              </span>
            </motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                initial={{ opacity: 0, x: direction === "next" ? 36 : -36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "next" ? -36 : 36 }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1
                  className={cn(
                    syne.className,
                    "mb-6 max-w-3xl text-[36px] font-extrabold leading-[1.1] tracking-normal text-foreground sm:text-[54px] sm:leading-[0.98] lg:text-[82px]"
                  )}
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.6px var(--accent)",
                  }}
                >
                  {currentSlide.title}
                </h1>

                <p
                  className={cn(
                    syne.className,
                    "max-w-2xl text-[16px] font-medium leading-relaxed text-muted-foreground sm:text-[20px] sm:leading-9 lg:text-[22px]"
                  )}
                >
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex w-full sm:w-auto h-13 items-center justify-center gap-2 rounded-[8px] bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_16px_42px_color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Démarrer un projet
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto h-13 items-center justify-center rounded-[8px] border border-border bg-card px-7 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-muted"
              >
                Contactez-nous
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 lg:mt-14">
              <button
                type="button"
                onClick={handlePrev}
                className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Slide precedent"
              >
                <ArrowLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Slide suivant"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:flex h-[620px] items-center justify-center overflow-hidden">
            <div className="absolute h-[520px] w-[520px] rounded-full border border-primary/8" />
            <div className="absolute h-[400px] w-[400px] rounded-full border border-primary/8" />
            <div className="absolute h-[280px] w-[280px] rounded-full border border-primary/8" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                initial={{ opacity: 0, x: direction === "next" ? 54 : -54, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction === "next" ? -54 : 54, scale: 0.96 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "absolute aspect-square w-[420px] rounded-[32px]  backdrop-blur-xl",
                  currentSlide.accent
                )}
              >
                <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[32px] ">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_58%)]" />

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 w-[88%]"
                  >
                    <Lottie animationData={currentSlide.animation} loop />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
