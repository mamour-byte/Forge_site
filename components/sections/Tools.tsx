"use client";

import Link from "next/link";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/128/5440/5440029.png",
  "https://cdn-icons-png.flaticon.com/128/12617/12617914.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968520.png",
  "https://cdn-icons-png.flaticon.com/128/5611/5611129.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
  "https://cdn-icons-png.flaticon.com/128/888/888839.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968482.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968510.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-primary)_6%,transparent)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full border border-[var(--line-subtle)] bg-[var(--card)] px-3 py-1 text-sm text-[var(--primary)]">
          Outils & plateformes
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] lg:text-6xl">
          Des outils marketing connectés à votre croissance
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--text-muted)]">
          Meta Ads, Google Analytics, Canva, HubSpot et bien d&apos;autres : nous intégrons les plateformes qui
          alimentent votre stratégie digitale au Sénégal.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--primary-foreground)] transition hover:bg-[var(--primary)]/90"
        >
          Parler de votre stratégie
        </Link>

        <div className="relative mt-12 overflow-hidden pb-2">
          <div className="flex animate-scroll-left gap-10 whitespace-nowrap">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[var(--card)] shadow-md"
              >
                <img src={src} alt="Outil marketing digital" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-6 flex animate-scroll-right gap-10 whitespace-nowrap">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[var(--card)] shadow-md"
              >
                <img src={src} alt="Plateforme digitale" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
