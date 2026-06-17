import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure réseau & IT",
  description:
    "Installation réseau, câblage structuré, serveurs, vidéosurveillance et contrôle d'accès à Dakar. Infrastructure IT sécurisée pour entreprises au Sénégal.",
  keywords: [
    "infrastructure réseau Dakar",
    "câblage informatique entreprise",
    "vidéosurveillance IP",
    "configuration serveur",
    "contrôle d'accès",
  ],
  alternates: {
    canonical: "/services/infrastructure",
  },
  openGraph: {
    title: "Infrastructure réseau & IT | Forge",
    description:
      "Installation réseau, câblage structuré, serveurs, vidéosurveillance et contrôle d'accès à Dakar. Infrastructure IT sécurisée pour entreprises au Sénégal.",
    url: "/services/infrastructure",
  },
};

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
