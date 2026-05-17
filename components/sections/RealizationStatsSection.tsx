import { ArrowUpRight, CheckCircle2, Clock3, Layers3, UsersRound } from "lucide-react";

const stats = [
  {
    value: "42",
    suffix: "+",
    label: "projets livres",
    description: "Sites, plateformes, identites et outils metier deployes pour des equipes locales.",
    icon: CheckCircle2,
  },
  {
    value: "18",
    suffix: "+",
    label: "clients accompagnes",
    description: "PME, startups et organisations qui avancent avec un partenaire technique stable.",
    icon: UsersRound,
  },
  {
    value: "3",
    suffix: "",
    label: "poles d'expertise",
    description: "Digitalisation, marketing digital et infrastructure reunis dans une meme approche.",
    icon: Layers3,
  },
  {
    value: "24",
    suffix: "h",
    label: "delai de reponse",
    description: "Un premier retour rapide pour cadrer vos besoins et clarifier les prochaines etapes.",
    icon: Clock3,
  },
];

export function RealizationStatsSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-16 size-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-8 size-72 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Nos chiffres
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Nos chiffres de realisation
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              Des indicateurs simples pour mesurer notre experience terrain, notre reactivite et la diversite des
              projets que nous accompagnons.
            </p>
          </div>

          <div className="rounded-[8px] border border-border bg-background p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-[8px] bg-primary text-primary-foreground">
                <ArrowUpRight className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Une croissance construite avec clarte</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Chaque projet est pense pour etre utile, maintenable et coherent avec les objectifs metier.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, suffix, label, description, icon: Icon }) => (
            <article
              key={label}
              className="rounded-[8px]  p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-8 flex size-12 items-center justify-center rounded-[8px] bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>

              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold leading-none tracking-tight text-foreground">{value}</span>
                {suffix ? <span className="pb-1 text-2xl font-bold text-accent">{suffix}</span> : null}
              </div>

              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary">{label}</h3>
              {/* <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
