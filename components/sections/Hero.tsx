"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DM_Sans, Syne } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";
import ForgeAnimation from "@/public/assets/lotties/digit.json";
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
    animation: ForgeAnimation,
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

      <div className="mx-auto flex min-h-[75svh] w-full max-w-7xl items-center px-4 pb-20 pt-28 sm:min-h-[80dvh] sm:px-6 sm:pt-40 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-12">
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-2 sm:mb-8 sm:px-4"
            >
              <span className="size-2 shrink-0 rounded-full bg-accent" />
              <span className="truncate text-[10px] font-medium uppercase tracking-[0.14em] text-primary sm:text-[11px]">
                Votre partenaire digital - Sénégal & Afrique
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
                    "mb-4 max-w-3xl text-[30px] font-extrabold leading-[1.02] tracking-normal text-foreground sm:mb-6 sm:text-[54px] sm:leading-[0.98] lg:text-[82px]"
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
                    "max-w-2xl text-[15px] font-medium leading-7 text-muted-foreground sm:text-[20px] sm:leading-9 lg:text-[22px]"
                  )}
                >
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Lottie - appears above buttons for better mobile UI */}
            <div className="my-6 flex w-full items-center justify-center lg:hidden">
              <div className="w-[220px] sm:w-[280px]">
                <div className={cn("aspect-square rounded-[20px] backdrop-blur-xl", currentSlide.accent)}>
                  <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[20px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_58%)]" />
                    <div className="relative z-10 w-[84%] sm:w-[88%]">
                      <Lottie animationData={currentSlide.animation} loop />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-[8px] bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_16px_42px_color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
              >
                Démarrer un projet
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-13 w-full items-center justify-center rounded-[8px] border border-border bg-card px-7 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-muted sm:w-auto"
              >
                Contactez-nous
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4 sm:mt-10 lg:mt-14">
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

          <div className="relative mx-auto hidden lg:flex h-[280px] w-full max-w-[320px] items-center justify-center overflow-hidden sm:h-[360px] sm:max-w-[420px] lg:mt-0 lg:h-[620px] lg:max-w-none">
            <div className="absolute h-[240px] w-[240px] rounded-full border border-primary/8 sm:h-[320px] sm:w-[320px] lg:h-[520px] lg:w-[520px]" />
            <div className="absolute h-[180px] w-[180px] rounded-full border border-primary/8 sm:h-[240px] sm:w-[240px] lg:h-[400px] lg:w-[400px]" />
            <div className="absolute h-[120px] w-[120px] rounded-full border border-primary/8 sm:h-[180px] sm:w-[180px] lg:h-[280px] lg:w-[280px]" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                initial={{ opacity: 0, x: direction === "next" ? 54 : -54, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction === "next" ? -54 : 54, scale: 0.96 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "absolute aspect-square w-[220px] rounded-[24px] backdrop-blur-xl sm:w-[280px] sm:rounded-[28px] lg:w-[420px] lg:rounded-[32px]",
                  currentSlide.accent
                )}
              >
                <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]">
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
                    className="relative z-10 w-[84%] sm:w-[88%] lg:w-[92%]"
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
