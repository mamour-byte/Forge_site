import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  { href: "/services/marketing", label: "Marketing digital" },
  { href: "/services/digitalisation", label: "Digitalisation" },
  { href: "/services/infrastructure", label: "Infrastructure" },
];

const companyLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#about", label: "Notre approche" },
  { href: "/contact", label: "Contact" },
];

const contactItems = [
  {
    icon: Mail,
    label: "contact@forge.dev",
    href: "mailto:contact@forge.dev",
  },
  {
    icon: Phone,
    label: "+221 77 000 00 00",
    href: "tel:+221770000000",
  },
  {
    icon: MapPin,
    label: "Dakar, Senegal",
    href: "https://maps.google.com/?q=Dakar%2C%20Senegal",
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-white/68 transition-colors hover:text-white"
    >
      <ArrowRight className="size-3.5 text-accent transition-transform duration-200 group-hover:translate-x-1" />
      {label}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--foreground)] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />
      <div className="pointer-events-none absolute -right-28 -top-28 size-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 size-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-[8px] bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                F
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">Forge</span>
                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                  Solutions Digitales
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/68">
              Studio digital basé à Dakar. Nous concevons des expériences, outils et infrastructures fiables pour aider
              les entreprises à grandir avec clarté.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-accent px-5 text-sm font-semibold text-accent-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-accent/30"
            >
              Démarrer un projet
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Services</h2>
              <nav className="mt-5 flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Forge</h2>
              <nav className="mt-5 flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Contact</h2>
              <ul className="mt-5 flex flex-col gap-4">
                {contactItems.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-start gap-3 text-sm leading-6 text-white/68 transition-colors hover:text-white"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Forge. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/#privacy" className="transition-colors hover:text-white">
              Confidentialite
            </Link>
            <Link href="/#terms" className="transition-colors hover:text-white">
              Mentions legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
