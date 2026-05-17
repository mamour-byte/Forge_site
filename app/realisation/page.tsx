import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  Code2,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos réalisations | Forge",
  description:
    "Découvrez les réalisations Forge en digitalisation, infrastructure réseau, vidéosurveillance, contrôle d'accès et solutions web pour entreprises.",
};

const stats = [
  { value: "42+", label: "projets livrés" },
  { value: "18+", label: "clients accompagnés" },
  { value: "3", label: "pôles d'expertise" },
  { value: "24h", label: "délai de réponse" },
];

const categories = [
  "Tous",
  "Infrastructure",
  "Sécurité",
  "Digitalisation",
  "Maintenance",
];

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
    title: "Audit",
    description:
      "Nous analysons l'existant, les contraintes du terrain et les objectifs métiers avant de proposer une solution.",
  },
  {
    title: "Conception",
    description:
      "Nous préparons une architecture claire, un périmètre maîtrisé et des choix techniques durables.",
  },
  {
    title: "Déploiement",
    description:
      "Nous installons, testons et documentons les éléments essentiels pour faciliter l'exploitation.",
  },
];

export default function RealisationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line-subtle)] to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)] shadow-sm">
              <BadgeCheck className="size-4 text-[var(--accent)]" />
              Portfolio Forge
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Nos réalisations
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              Une sélection de projets pensés pour rendre les infrastructures plus fiables, les accès plus sûrs et les
              expériences digitales plus simples à utiliser.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--foreground)]/90"
              >
                Discuter d&apos;un projet
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="#realisations"
                className="inline-flex items-center rounded-full border border-[var(--line-subtle)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)]/35"
              >
                Voir les projets
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--line-subtle)] bg-[var(--card)] shadow-sm">
            <Image
              src="/assets/images/bg-hero.jpg"
              alt="Aperçu d'une réalisation digitale et infrastructure Forge"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium text-white/75">Approche terrain</p>
              <p className="mt-2 max-w-sm text-2xl font-bold leading-tight">
                Des solutions sobres, maintenables et adaptées à vos usages réels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[8px] border border-[var(--line-subtle)] bg-[var(--card)] p-6 shadow-sm"
            >
              <p className="text-4xl font-bold tracking-tight text-[var(--primary)]">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="realisations" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                Projets sélectionnés
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Des livrables concrets, utiles et durables
              </h2>
            </div>

            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <span
                  key={category}
                  className="shrink-0 rounded-full border border-[var(--line-subtle)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--text-muted)]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map(({ title, category, description, image, icon: Icon, results }, index) => (
              <article
                key={title}
                className={index === 0 ? "overflow-hidden rounded-[8px] border border-[var(--line-subtle)] bg-[var(--card)] shadow-sm lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]" : "overflow-hidden rounded-[8px] border border-[var(--line-subtle)] bg-[var(--card)] shadow-sm"}
              >
                <div className="relative min-h-[280px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 680px" : "(max-width: 1024px) 100vw, 560px"}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                      {category}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-[8px] bg-[var(--primary)] text-white">
                      <Icon className="size-5" />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{description}</p>

                  <ul className="mt-6 grid gap-3">
                    {results.map((result) => (
                      <li key={result} className="flex items-center gap-3 text-sm font-medium text-[var(--foreground)]">
                        <CheckCircle2 className="size-4 shrink-0 text-[var(--accent)]" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--card)] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                Notre méthode
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Une réalisation maîtrisée de bout en bout
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
                Chaque mission est cadrée pour rester lisible : comprendre, concevoir, livrer, puis rendre l&apos;exploitation
                simple pour vos équipes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[8px] border border-[var(--line-subtle)] bg-[var(--background)] p-6"
                >
                  <span className="text-sm font-bold text-[var(--accent)]">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--foreground)] p-8 text-center text-[var(--background)] sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Votre projet peut devenir notre prochaine réalisation.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--background)]/75 sm:text-base">
            Parlez-nous de votre besoin : infrastructure, sécurité, digitalisation ou maintenance. Nous vous aidons à
            transformer l&apos;idée en solution concrète.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/90"
          >
            Demander un accompagnement
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
