"use client";

import { ArrowRight, Server, Network, Camera, Clock, ShieldCheck, Cable, CheckCircle2, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import AetherFlowHero from "@/components/sections/AetherFlowHero";
import Galery from "@/components/sections/Galery";

export default function InfrastructurePage() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* 1. Custom Hero - Tech / Grid Vibe */}
      <AetherFlowHero />


      {/* 2. Bento Grid Services */}
      <section id="solutions" className="py-24 px-6 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">Nos Solutions Techniques</h2>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl">Une approche modulaire pour répondre à tous vos besoins en infrastructure matérielle et logicielle, avec un design de réseau pensé pour la performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Service 1 - Large */}
            <div className="md:col-span-2 group rounded-[2rem] bg-[var(--surface-soft)] border border-[var(--line-subtle)] p-8 md:p-12 overflow-hidden relative flex flex-col justify-end hover:border-[var(--primary)]/30 transition-all duration-300">
              <div className="absolute -top-10 -right-10 text-[var(--primary)]/5 group-hover:text-[var(--primary)]/10 transition-colors duration-500 group-hover:scale-110 transform">
                <Network size={300} strokeWidth={0.5} />
              </div>
              <div className="relative z-10 max-w-lg mt-24">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--line-subtle)] flex items-center justify-center text-[var(--primary)] mb-6 shadow-sm group-hover:-translate-y-1 transition-transform">
                  <Network size={28} />
                </div>
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-3">Création de LAN & Réseaux</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-lg">
                  Architecture et mise en place de réseaux locaux (LAN/WAN) hautement sécurisés. Installation de baies de brassage, routeurs et switchs pour interconnecter vos équipements sans faille.
                </p>
              </div>
            </div>

            {/* Service 2 - Tall */}
            <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[var(--line-subtle)] bg-[var(--foreground)] p-8 transition-colors hover:border-[var(--primary)]/30 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--accent)] transition-transform group-hover:-translate-y-1">
                  <Server size={28} />
                </div>
                <h3 className="mb-3 mt-auto text-2xl font-bold text-white">Configuration serveur</h3>
                <p className="text-sm leading-relaxed text-white/65">
                  Déploiement, paramétrage Windows/Linux, virtualisation, et maintenance de vos serveurs (locaux ou cloud) pour une gestion optimale de vos données.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group rounded-[2rem] bg-[var(--card)] border border-[var(--line-subtle)] p-8 overflow-hidden relative hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-soft)] flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
                <Cable size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Câblage Structuré</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Câblage réseau performant (cuivre, fibre optique) respectant les normes pour une connectivité très haut débit dans vos locaux.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group rounded-[2rem] bg-[var(--card)] border border-[var(--line-subtle)] p-8 overflow-hidden relative hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-soft)] flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Vidéosurveillance</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Installation de caméras IP HD/4K avec enregistrement NVR et accès distant sécurisé sur smartphone et PC 24/7.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group rounded-[2rem] bg-[var(--card)] border border-[var(--line-subtle)] p-8 overflow-hidden relative hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-soft)] flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Contrôle d'Accès</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Pointeuses biométriques, badges RFID et serrures connectées pour la gestion de la sécurité et du temps de présence du personnel.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Galery />

      {/* 3. Stats / Why us */}
      <section className="py-24 bg-[var(--primary)] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">La performance technique au service de votre productivité.</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Une infrastructure défaillante coûte cher. Nous concevons des réseaux tolérants aux pannes, sécurisés contre les intrusions et prêts à évoluer avec la croissance de votre entreprise.
              </p>
              <ul className="space-y-4">
                {[
                  "Matériel professionnel certifié",
                  "Tests de charge et certification de câblage",
                  "Garantie et maintenance proactive sur site",
                  "Documentation complète de l'architecture"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[var(--accent)] shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-white/70 text-sm">Disponibilité réseau garantie sur nos installations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 transition-colors translate-y-8">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/70 text-sm">Supervision et monitoring de vos équipements critiques</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-4xl font-bold mb-2">10G</div>
                <div className="text-white/70 text-sm">Prêt pour le très haut débit (Fibre & Cat6a)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 transition-colors translate-y-8">
                <div className="text-4xl font-bold mb-2"><ShieldCheck size={36} /></div>
                <div className="text-white/70 text-sm">Sécurité périmétrique (Firewall & VPN)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-32 px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto bg-[var(--surface-soft)] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-[var(--line-subtle)] shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/5 to-[var(--accent)]/5"></div>
          <div className="relative z-10">
            <Zap className="w-12 h-12 text-[var(--primary)] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 tracking-tight">Prêt à moderniser votre infrastructure ?</h2>
            <p className="text-[var(--text-muted)] text-xl mb-10 max-w-2xl mx-auto font-light">
              Prenez rendez-vous avec l'un de nos ingénieurs pour une étude technique de vos locaux et un devis sur-mesure.
            </p>
            <a href="/contact" className="inline-flex bg-[var(--foreground)] hover:bg-[var(--foreground)]/90 text-[var(--background)] px-10 py-5 rounded-full font-medium text-lg transition-all transform hover:scale-105 items-center gap-3 shadow-xl group">
              Demander une étude gratuite
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
