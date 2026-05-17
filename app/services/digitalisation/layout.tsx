import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitalisation & développement web | Forge",
  description:
    "Agence de digitalisation à Dakar : sites web, applications métier, ERP, mobiles, automatisation et cloud. Solutions sur mesure pour PME et entreprises au Sénégal.",
  keywords: [
    "digitalisation entreprise Dakar",
    "développement web Sénégal",
    "application métier sur mesure",
    "ERP PME Afrique",
    "automatisation processus",
  ],
};

export default function DigitalisationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
