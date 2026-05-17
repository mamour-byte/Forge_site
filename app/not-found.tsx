"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import notFoundAnimation from "../public/assets/lotties/not_found.json";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="mb-8 w-full max-w-xs md:max-w-md">
        <Lottie animationData={notFoundAnimation} loop className="h-auto w-full" />
      </div>
      <h1 className="mb-4 text-center text-3xl font-bold text-primary md:text-5xl">Page non trouvée</h1>
      <p className="mb-8 max-w-md text-center text-lg text-muted-foreground">
        Oups, cette page est introuvable ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-block rounded-[8px] bg-primary px-6 py-3 font-semibold text-primary-foreground shadow transition-colors hover:bg-accent"
      >
        Retour a l&apos;accueil
      </Link>
    </section>
  );
}
