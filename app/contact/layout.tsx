import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & devis gratuit",
  description:
    "Contactez Forge à Dakar pour un audit gratuit : digitalisation, marketing digital ou infrastructure IT. Réponse sous 24 h pour PME et startups.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & devis gratuit | Forge",
    description:
      "Contactez Forge à Dakar pour un audit gratuit : digitalisation, marketing digital ou infrastructure IT. Réponse sous 24 h pour PME et startups.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
