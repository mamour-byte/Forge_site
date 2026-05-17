"use client";

import { ArrowRight, Sparkles, Layers, PenTool, Layout, Video, Megaphone, Target, BarChart3, Palette } from "lucide-react";
import { FloatingIconsHero, RevealImageList } from "@/components/sections/ShaderAnimation";
import IntegrationHero from "@/components/sections/Tools";

const marketingHeroIcons = [
    { id: 1, icon: Sparkles, className: "left-[8%] top-[18%]" },
    { id: 2, icon: Layers, className: "right-[12%] top-[16%]" },
    { id: 3, icon: PenTool, className: "left-[18%] bottom-[22%]" },
    { id: 4, icon: Layout, className: "right-[18%] bottom-[24%]" },
    { id: 5, icon: Megaphone, className: "left-[42%] top-[12%]" },
    { id: 6, icon: Target, className: "right-[34%] bottom-[14%]" },
    { id: 7, icon: BarChart3, className: "left-[6%] top-[52%]" },
    { id: 8, icon: Palette, className: "right-[7%] top-[50%]" },
];

export default function MarketingBrandingPage() {

    return (
        <>             
        {/* 1. Hero Section */}
            <FloatingIconsHero
                title="Branding & Marketing Digital"
                subtitle="Créez une identité forte, lancez des campagnes ciblées et transformez votre présence en ligne en moteur de croissance."
                ctaText="Démarrer votre projet"
                ctaHref="/contact"
                icons={marketingHeroIcons}
            />
            <RevealImageList />
            <IntegrationHero />

            {/* 3. Section Expertise */}
            {/* Index Z supérieur et bg-card solide pour recouvrir le modèle 3D lors du scroll down */}
            <section className="py-32 bg-[var(--card)] relative z-20 px-6 border-t border-[var(--line-subtle)] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">Expertise en Branding et Marketing Digital</h2>
                        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light">
                            Développez la visibilité de votre entreprise avec notre agence experte en stratégie de marque, création d&apos;identité visuelle et marketing digital orienté résultats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Stratégie de Marque & Branding", icon: <Layers size={28} />, desc: "Audit de marque, positionnement sur le marché et architecture de marque pour une identité forte et cohérente." },
                            { title: "Création de Logotype et Identité Visuelle", icon: <PenTool size={28} />, desc: "Conception de logos professionnels et chartes graphiques sur-mesure pour vous démarquer de la concurrence." },
                            { title: "Acquisition & Marketing Digital", icon: <Target size={28} />, desc: "Stratégies SEO, campagnes publicitaires (Ads) et Inbound marketing pour attirer un trafic qualifié." },
                            { title: "Social Media & Community Management", icon: <Megaphone size={28} />, desc: "Gestion des réseaux sociaux, création de contenu viral et fidélisation de votre communauté en ligne." },
                            { title: "Direction Artistique & UX/UI", icon: <Palette size={28} />, desc: "Conception d'interfaces web ergonomiques, moodboards et design system premium centrés sur l'utilisateur." },
                            { title: "Motion Design & Vidéo", icon: <Video size={28} />, desc: "Animations dynamiques, vidéos promotionnelles et contenus interactifs pour maximiser l'engagement." },
                        ].map((service, i) => (
                            <div key={i} className="group p-10 rounded-3xl bg-[var(--background)] border border-[var(--line-subtle)] hover:border-[var(--primary)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--primary)]/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--surface-soft)] flex items-center justify-center text-[var(--primary)] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[var(--primary)] group-hover:text-white shadow-sm">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">{service.title}</h3>
                                    <p className="text-[var(--text-muted)] leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Section Process */}
            <section className="py-32 bg-[var(--background)] relative z-20 px-6">
                <div className="max-w-5xl mx-auto relative">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">Notre Méthodologie Marketing & Création</h2>
                        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light">
                            Une approche data-driven et créative pour transformer votre présence en ligne et accélérer votre croissance.
                        </p>
                    </div>

                    {/* Ligne verticale de la timeline */}
                    <div className="absolute left-6 md:left-1/2 top-80 bottom-10 w-px bg-[var(--line-subtle)] md:-translate-x-1/2"></div>

                    <div className="space-y-16 md:space-y-32">
                        {[
                            { step: "01", title: "Audit & Stratégie Digitale", desc: "Analyse approfondie de votre marché, étude de vos concurrents et définition des KPIs pour élaborer un plan d'action marketing sur-mesure." },
                            { step: "02", title: "Conception & Direction Artistique", desc: "Création des concepts visuels, choix des axes de communication et élaboration d'une identité de marque premium." },
                            { step: "03", title: "Déploiement Multicanal", desc: "Lancement de vos campagnes marketing, intégration de votre nouvelle identité et optimisation sur tous les points de contact." },
                            { step: "04", title: "Analyse & Optimisation", desc: "Suivi des performances, analyse des données (analytics) et itérations continues pour maximiser votre retour sur investissement (ROI)." },
                        ].map((process, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`flex-1 pl-20 md:pl-0 md:text-right ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                                    <h3 className="text-3xl font-bold mb-4 text-[var(--foreground)]">{process.title}</h3>
                                    <p className="text-lg text-[var(--text-muted)] font-light leading-relaxed">{process.desc}</p>
                                </div>

                                {/* Numéro de l'étape */}
                                <div className="absolute left-0 md:relative md:left-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--primary)] flex items-center justify-center text-[var(--color-secondary)] font-bold text-sm md:text-xl z-10 shadow-lg shadow-[var(--primary)]/20 shrink-0 border-4 border-[var(--background)]">
                                    {process.step}
                                </div>

                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-40 relative z-20 px-6 bg-[var(--foreground)] text-[var(--background)] overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem]">
                {/* Effet d'arrière-plan premium */}
                <div className="absolute inset-0 bg-linear-to-tr from-[var(--primary)]/30 to-transparent opacity-40"></div>
                <div className="absolute -top-80 -right-80 w-200 h-200 bg-[var(--accent)]/20 rounded-full blur-[10rem]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white">
                        Propulsez Votre Marque Dès Aujourd&apos;hui
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Vous cherchez une agence de branding et marketing digital pour concrétiser votre vision ? Discutons de votre projet et élaborons ensemble une stratégie gagnante.
                    </p>
                    <a href="/contact" className="group mx-auto flex transform items-center gap-3 rounded-full bg-[var(--primary)] px-10 py-5 text-lg font-medium text-white shadow-2xl shadow-[var(--primary)]/40 transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)]/90">
                        Démarrer votre projet
                        <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </section>

        </>
    );
}
