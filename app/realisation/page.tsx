import type { Metadata } from "next";
import RealisationContent from "@/components/sections/RealisationContent";

export const metadata: Metadata = {
  title: "Nos réalisations | Forge",
  description:
    "Découvrez les réalisations Forge en digitalisation, infrastructure réseau, vidéosurveillance, contrôle d'accès et solutions web pour entreprises.",
};

export default function RealisationPage() {
  return <RealisationContent />;
}
