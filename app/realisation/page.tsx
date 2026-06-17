import type { Metadata } from "next";
import RealisationContent from "@/components/sections/RealisationContent";
import { ParticleTextEffect } from "@/components/sections/TextComponent";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez les réalisations Forge en digitalisation, infrastructure réseau, vidéosurveillance, contrôle d'accès et solutions web pour entreprises.",
  alternates: {
    canonical: "/realisation",
  },
  openGraph: {
    title: "Nos réalisations | Forge",
    description:
      "Découvrez les réalisations Forge en digitalisation, infrastructure réseau, vidéosurveillance, contrôle d'accès et solutions web pour entreprises.",
    url: "/realisation",
  },
};

export default function RealisationPage() {
  return (
    <> 
      <ParticleTextEffect/>
      <RealisationContent/>;     
    </>
  );
  
  
}
