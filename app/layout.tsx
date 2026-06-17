import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.forge.sn";
const siteName = "Forge";
const defaultTitle = "Forge | Agence digitale à Dakar - Web, Marketing & Infrastructure";
const defaultDescription =
  "Forge accompagne les entreprises au Sénégal en digitalisation, marketing digital et infrastructure IT : sites web, applications, branding et réseaux sécurisés.";
const ogImage = "/assets/images/bg-hero.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Forge",
  },
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "M7NUGdzHnXP2Ftb6uVhH6W_W-anjf6ogxPGp3WYU4Ow",
  },
  description:
    "Forge accompagne les entreprises au Sénégal en digitalisation, marketing digital et infrastructure IT : sites web, applications, branding et réseaux sécurisés.",
  keywords: [
    "agence digitale Dakar",
    "transformation digitale Sénégal",
    "développement web",
    "marketing digital",
    "infrastructure réseau",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName,
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Forge, agence digitale à Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  logo: new URL("/assets/logo/logo.png", siteUrl).toString(),
  image: new URL(ogImage, siteUrl).toString(),
  description: defaultDescription,
  email: "contact@forge-sn.com",
  telephone: "+221706186027",
  address: {
    "@type": "PostalAddress",
    streetAddress: "173 YF Nord Foire",
    addressLocality: "Dakar",
    postalCode: "12500",
    addressCountry: "SN",
  },
  areaServed: ["Dakar", "Sénégal", "Afrique de l'Ouest"],
  sameAs: [
    "https://www.instagram.com/forge_group_sn",
    "https://www.facebook.com/share/18ZqetxDMf/",
    "https://www.linkedin.com/company/forgesn/",
  ],
  serviceType: [
    "Digitalisation",
    "Développement web",
    "Marketing digital",
    "Branding",
    "Infrastructure réseau",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
