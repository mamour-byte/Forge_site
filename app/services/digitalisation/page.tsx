"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  Cloud,
  Cog,
  FileText,
  Globe,
  Link2,
  MessageCircle,
  Smartphone,
  Truck,
  Users,
} from "lucide-react"
import  CyberMatrixHero  from "@/components/sections/DigitalHero"

export default function DigitalisationPage() {
  const services = [
    {
      icon: Globe,
      tag: "Web",
      title: "Sites Web & Vitrines",
      description:
        "Conception de sites modernes, rapides et optimisés SEO — vitrine, landing page ou portail client — qui reflètent l'identité de votre marque et convertissent vos visiteurs.",
      details: ["Design responsive", "Optimisation SEO & performance", "CMS intégré (Notion, Sanity…)"],
    },
    {
      icon: Cog,
      tag: "Métier",
      title: "Applications Métier & ERP",
      description:
        "Digitalisation de vos processus internes : gestion des commandes, suivi de stock, tableaux de bord RH, facturation automatisée et CRM sur mesure.",
      details: ["Remplacement des tableurs Excel", "Workflow de validation automatisé", "Accès multi-rôles sécurisé"],
    },
    {
      icon: Smartphone,
      tag: "Mobile",
      title: "Applications Mobiles",
      description:
        "Transformation de vos services en applications iOS et Android : prise de rendez-vous, suivi de livraison, fidélisation client ou outil de terrain pour vos équipes.",
      details: ["iOS & Android cross-platform", "Mode hors-ligne disponible", "Notifications push & alertes"],
    },
    {
      icon: Link2,
      tag: "Automatisation",
      title: "Automatisation & Intégrations",
      description:
        "Connexion de vos outils existants (Stripe, HubSpot, WhatsApp, ERP…) via des API robustes, pour supprimer les ressaisies manuelles et gagner en efficacité.",
      details: ["Webhooks & API REST", "Synchronisation temps réel", "Alertes & rapports automatiques"],
    },
    {
      icon: Cloud,
      tag: "Cloud",
      title: "Infrastructure Cloud",
      description:
        "Migration, déploiement et maintenance de vos applications sur le cloud. Haute disponibilité, sauvegardes automatiques et monitoring 24/7.",
      details: ["AWS / GCP / Vercel", "CI/CD & déploiements continus", "Monitoring & uptime garanti"],
    },
    {
      icon: BarChart3,
      tag: "Données",
      title: "Tableaux de Bord & BI",
      description:
        "Centralisation et visualisation de vos données métier en temps réel — ventes, KPIs, performances — pour des décisions rapides et éclairées.",
      details: ["Connexion multi-sources de données", "Rapports automatisés", "Alertes sur seuils critiques"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Cadrage",
      desc: "Nous analysons vos processus actuels, identifions les tâches chronophages à automatiser et définissons la solution la plus adaptée.",
    },
    {
      step: "02",
      title: "Design UI/UX",
      desc: "Conception de maquettes fonctionnelles soumises à validation — interface épurée, ergonomique et alignée sur votre identité visuelle.",
    },
    {
      step: "03",
      title: "Développement",
      desc: "Développement sur mesure en sprints courts avec démonstrations régulières. Technologies modernes, code documenté et tests inclus.",
    },
    {
      step: "04",
      title: "Déploiement & Support",
      desc: "Mise en production, formation de vos équipes, maintenance évolutive et support réactif pour faire évoluer votre solution dans le temps.",
    },
  ]

  const stats = [
    { value: "42+", label: "Projets livrés" },
    { value: "18+", label: "Clients accompagnés" },
    { value: "3", label: "Pôles d'expertise" },
    { value: "24h", label: "Délai de réponse" },
  ]

  const usecases = [
    { icon: Boxes, label: "Suivi de commandes automatisé" },
    { icon: FileText, label: "Facturation sans ressaisie" },
    { icon: CalendarDays, label: "Prise de RDV en ligne" },
    { icon: BarChart3, label: "Dashboard de performance live" },
    { icon: MessageCircle, label: "Chatbot de support client" },
    { icon: Truck, label: "Tracking livraison temps réel" },
    { icon: Users, label: "Portail RH collaborateur" },
    { icon: Bell, label: "Alertes & rapports automatiques" },
  ]

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--color-background, #FFFFFF)",
        color: "var(--color-text, #090A0A)",
        fontFamily: "'DM Sans', 'Outfit', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
    <CyberMatrixHero/>
        

      {/* STATS BAND */}
      <section
        style={{
          background: "#090A0A",
          padding: "3rem clamp(1.5rem, 6vw, 6rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#090A0A",
                padding: "2rem 1.5rem",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#fff" }}>{s.value}</p>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES TICKER */}
      <section
        style={{
          padding: "2.5rem 0",
          background: "#F8FAFC",
          overflow: "hidden",
          borderTop: "1px solid rgba(9,10,10,0.05)",
          borderBottom: "1px solid rgba(9,10,10,0.05)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            animation: "ticker 28s linear infinite",
            width: "max-content",
          }}
        >
          {[...usecases, ...usecases].map((u, i) => (
            (() => {
              const UsecaseIcon = u.icon as LucideIcon
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: "#fff",
                    border: "1px solid rgba(9,10,10,0.07)",
                    borderRadius: "99px",
                    padding: "0.55rem 1.25rem",
                    whiteSpace: "nowrap",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  <UsecaseIcon size={16} color="#2C519E" />
                  <span>{u.label}</span>
                </div>
              )
            })()
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.85); }
          }
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "6rem clamp(1.5rem, 6vw, 6rem)",
          background: "#F8FAFC",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem", maxWidth: "640px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2C519E",
              }}
            >
              Nos Expertises
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginTop: "0.75rem",
              }}
            >
              Ce que nous digitalisons,
              <span style={{ color: "#2C519E" }}> concrètement.</span>
            </h2>
            <p style={{ color: "rgba(9,10,10,0.6)", fontSize: "1.05rem", lineHeight: 1.65, marginTop: "1rem" }}>
              Pas de vague promesse de "transformation digitale". Voici les solutions précises que nous livrons.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {services.map((service, index) => (
              (() => {
                const ServiceIcon = service.icon as LucideIcon
                return (
                  <div
                    key={index}
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(9,10,10,0.06)",
                      borderRadius: "24px",
                      padding: "2rem",
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(44,81,158,0.22)"
                      e.currentTarget.style.boxShadow = "0 16px 48px rgba(44,81,158,0.08)"
                      e.currentTarget.style.transform = "translateY(-4px)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(9,10,10,0.06)"
                      e.currentTarget.style.boxShadow = "none"
                      e.currentTarget.style.transform = "translateY(0)"
                    }}
                  >
                    {/* Tag + icon */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          background: "rgba(44,81,158,0.08)",
                          color: "#2C519E",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "99px",
                        }}
                      >
                        {service.tag}
                      </span>
                      <ServiceIcon size={24} color="#2C519E" />
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.75rem", lineHeight: 1.3 }}>{service.title}</h3>

                    <p style={{ color: "rgba(9,10,10,0.62)", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "1.5rem" }}>{service.description}</p>

                    {/* Detail pills */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {service.details.map((d, di) => (
                        <div key={di} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "rgba(9,10,10,0.55)" }}>
                          <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(109,183,88,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6DB758", display: "block" }} />
                          </span>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        style={{
          padding: "6rem clamp(1.5rem, 6vw, 6rem)",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6DB758",
              }}
            >
              Notre Process
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginTop: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              De l'idée au déploiement, en 4 étapes claires.
            </h2>
            <p style={{ color: "rgba(9,10,10,0.6)", fontSize: "1.05rem", lineHeight: 1.65 }}>
              Une méthode rigoureuse, des livrables à chaque étape et une communication transparente tout au long du projet.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {process.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  border: "1px solid rgba(9,10,10,0.06)",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  transition: "all 0.25s",
                  background: "#fff",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(44,81,158,0.2)"
                  e.currentTarget.style.background = "rgba(44,81,158,0.02)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(9,10,10,0.06)"
                  e.currentTarget.style.background = "#fff"
                }}
              >
                <div
                  style={{
                    minWidth: "44px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#2C519E",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    letterSpacing: "0.04em",
                    boxShadow: "0 6px 16px rgba(44,81,158,0.2)",
                    flexShrink: 0,
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, marginBottom: "0.35rem" }}>{step.title}</h3>
                  <p style={{ margin: 0, fontSize: "0.88rem", color: "rgba(9,10,10,0.58)", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 clamp(1.5rem, 6vw, 6rem) 6rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            background: "#090A0A",
            borderRadius: "32px",
            padding: "clamp(3rem, 6vw, 5rem)",
            position: "relative",
            overflow: "hidden",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-5rem",
              right: "-5rem",
              width: "30rem",
              height: "30rem",
              background: "radial-gradient(circle, rgba(44,81,158,0.35) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-4rem",
              left: "10rem",
              width: "20rem",
              height: "20rem",
              background: "radial-gradient(circle, rgba(109,183,88,0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }} className="hero-grid">
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6DB758" }}>
                Forge — Digitalisation
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                Prêt à digitaliser votre prochaine tâche manuelle ?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "560px" }}>
                Parlez-nous de votre processus le plus chronophage. En 72h, nous vous proposons une solution concrète.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", minWidth: "220px" }}>
              <Link
                href="/contact"
                style={{
                  background: "var(--color-accent)",
                  color: "#fff",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(109,183,88,0.25)",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "1rem 2rem",
                  borderRadius: "14px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Planifier un appel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
