import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing digital & branding | Forge",
  description:
    "Stratégie de marque, identité visuelle, SEO, réseaux sociaux et campagnes publicitaires à Dakar. Agence marketing digital pour entreprises au Sénégal.",
  keywords: [
    "marketing digital Dakar",
    "agence branding Sénégal",
    "création logo charte graphique",
    "community management",
    "SEO entreprise",
  ],
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
