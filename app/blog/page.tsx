"use client";

import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Pourquoi chaque PME sénégalaise a besoin d’un site web en 2026",
    category: "Digitalisation",
    date: "12 Juin 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    excerpt:
      "Découvrez comment un site web professionnel peut améliorer votre visibilité et augmenter vos ventes.",
  },
  {
    id: 2,
    title: "5 outils pour automatiser votre entreprise",
    category: "Productivité",
    date: "08 Juin 2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    excerpt:
      "Les meilleures solutions pour gagner du temps et optimiser vos opérations quotidiennes.",
  },
  {
    id: 3,
    title: "Cybersécurité : les erreurs les plus fréquentes des PME",
    category: "Infrastructure IT",
    date: "02 Juin 2026",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    excerpt:
      "Protégez vos données et celles de vos clients grâce à quelques bonnes pratiques essentielles.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />

        <div className="container mx-auto px-6 py-28 relative z-10">
          <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Blog Forge
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl md:text-6xl font-bold leading-tight">
            Actualités, conseils et ressources pour accélérer votre
            transformation numérique.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Découvrez nos articles sur le développement web, le marketing
            digital, l'infrastructure IT et les technologies qui façonnent
            l'avenir des entreprises africaines.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-6 pb-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="grid lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Article principal"
              className="h-full w-full object-cover"
            />

            <div className="p-10 lg:p-14">
              <span className="rounded-full bg-orange-500/20 px-4 py-2 text-sm text-orange-400">
                Article à la une
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                Comment réussir la digitalisation de votre PME au Sénégal ?
              </h2>

              <p className="mt-6 text-slate-400 leading-relaxed">
                La transformation numérique n'est plus une option. Découvrez
                les étapes essentielles pour moderniser vos processus,
                améliorer votre productivité et développer votre activité.
              </p>

              <button className="mt-8 flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition">
                Lire l'article
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Derniers articles</h2>
          <p className="mt-2 text-slate-400">
            Explorez nos dernières publications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-orange-500/30 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-400">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  {article.title}
                </h3>

                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <button className="mt-6 flex items-center gap-2 text-orange-400 hover:text-orange-300">
                  Lire plus
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Restez informé des dernières tendances digitales
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Recevez nos conseils, études de cas et ressources directement dans
            votre boîte mail.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-orange-500"
            />

            <button className="rounded-xl bg-orange-500 px-8 py-4 font-medium text-white hover:bg-orange-600 transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}