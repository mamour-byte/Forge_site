"use client";

import { useState, type ChangeEvent, type ComponentType, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    CheckCircle,
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

type ContactForm = {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    message: string;
    timeline: string;
};

type ContactMethod = {
    icon: ReactNode;
    title: string;
    description: string;
    contact: string;
    iconClassName: string;
    iconWrapClassName: string;
};

type SocialLink = {
    icon: ComponentType<{ className?: string; size?: number }>;
    label: string;
    href: string;
    className: string;
};

const initialForm: ContactForm = {
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
};

const projectTypes = [
    "Site web / landing page",
    "Application web",
    "Application mobile",
    "Consulting / audit",
    "Installation systeme de securite",
    "Installation reseau",
    "Autre",
];

const budgetRanges = [
    "Moins de 150k F CFA",
    "150k - 500k F CFA",
    "500k - 1M F CFA",
    "1M - 2M F CFA",
    "Plus de 2 M F CFA",
    "A discuter",
];

const timelines = [
    "Urgent, moins de 1 mois",
    "Court terme, 1 a 3 mois",
    "Moyen terme, 3 a 6 mois",
    "Long terme, 6 mois et plus",
    "Pas de contrainte",
];

const contactMethods: ContactMethod[] = [
    {
        icon: <Mail size={30} />,
        title: "Email",
        description: "Envoyez-nous un message detaille.",
        contact: "contact@forge.dev",
        iconClassName: "text-primary",
        iconWrapClassName: "bg-primary/10",
    },
    {
        icon: <Phone size={30} />,
        title: "Telephone",
        description: "Discutons directement de votre projet.",
        contact: "+221 77 856 98 23",
        iconClassName: "text-accent",
        iconWrapClassName: "bg-accent/10",
    },
    {
        icon: <Calendar size={30} />,
        title: "Rendez-vous",
        description: "Planifions une reunion en visio.",
        contact: "Sur reservation",
        iconClassName: "text-primary",
        iconWrapClassName: "bg-primary/10",
    },
    {
        icon: <MessageCircle size={30} />,
        title: "Discussion",
        description: "Posez vos questions avant de lancer.",
        contact: "Reponse rapide",
        iconClassName: "text-accent",
        iconWrapClassName: "bg-accent/10",
    },
];

const faqs = [
    {
        question: "Quel est le delai moyen pour un projet ?",
        answer: "Entre 4 et 12 semaines selon la complexite du besoin.",
    },
    {
        question: "Proposez-vous de la maintenance ?",
        answer: "Oui, nous pouvons assurer le support, la maintenance et les evolutions.",
    },
    {
        question: "Travaillez-vous avec des startups ?",
        answer: "Oui, nous accompagnons les startups, PME et organisations deja etablies.",
    },
];

// Remplacez ces href par les liens officiels de vos reseaux sociaux.
const socialLinks: SocialLink[] = [
    {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/votre-compte",
        className:
            "text-[var(--primary)] hover:border-[var(--primary)]/30 hover:bg-[color-mix(in_srgb,var(--primary)_10%,var(--card))]",
    },
    {
        icon: FaFacebookF,
        label: "Facebook",
        href: "https://www.facebook.com/votre-page",
        className:
            "text-[color-mix(in_srgb,var(--primary)_82%,var(--accent))] hover:border-[var(--primary)]/30 hover:bg-[color-mix(in_srgb,var(--primary)_10%,var(--card))]",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/votre-entreprise",
        className:
            "text-[var(--accent)] hover:border-[var(--accent)]/35 hover:bg-[color-mix(in_srgb,var(--accent)_12%,var(--card))]",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        href: "https://wa.me/221778569823",
        className:
            "text-[color-mix(in_srgb,var(--accent)_72%,var(--primary))] hover:border-[var(--accent)]/35 hover:bg-[color-mix(in_srgb,var(--accent)_12%,var(--card))]",
    },
];

const inputClassName =
    "w-full rounded-[8px] border border-border bg-background px-4 py-3.5 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-3 focus:ring-primary/15";

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactForm>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Erreur lors de l'envoi");
            setIsSubmitted(true);
            setFormData(initialForm);
            window.setTimeout(() => setIsSubmitted(false), 3000);
        } catch {
            alert("Erreur lors de l'envoi du message. Merci de réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="relative overflow-hidden bg-[var(--foreground)] px-4 pt-32 pb-20 text-white sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
                    <div className="absolute bottom-0 right-0 size-[420px] rounded-full bg-accent/20 blur-3xl" />
                </div>

                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mx-auto max-w-5xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/80">
                        <MessageCircle size={18} className="text-accent" />
                        Prenons contact
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Demarrons votre projet
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                        Vous avez une idee, un besoin technique ou une question strategique ? Notre equipe vous aide a transformer
                        votre vision en solution digitale claire, utile et durable.
                    </p>

                    {/* <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
                        {[
                            { icon: Zap, label: "Reponse sous 24h" },
                            { icon: Shield, label: "Devis gratuit" },
                            { icon: Users, label: "Accompagnement personnalise" },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/6 px-4 py-3">
                                <Icon className="size-5 text-accent" />
                                <span className="text-sm font-medium text-white/88">{label}</span>
                            </div>
                        ))}
                    </div> */}
                </motion.div>
            </section>

            <section className="bg-card px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            className="rounded-[8px] border border-border bg-background p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                        >
                            <div className={`mb-5 flex size-14 items-center justify-center rounded-[8px] ${method.iconWrapClassName}`}>
                                <div className={method.iconClassName}>{method.icon}</div>
                            </div>
                            <h2 className="text-lg font-semibold">{method.title}</h2>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{method.description}</p>
                            <p className="mt-4 text-sm font-semibold text-foreground">{method.contact}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                    <motion.div
                        initial={{ x: -24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[8px] border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10"
                    >
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tight">Parlons de votre projet</h2>
                            <p className="mt-3 text-base leading-7 text-muted-foreground">
                                Plus vous nous donnez de details, plus nous pourrons vous proposer une reponse adaptee.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.96, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex min-h-[420px] flex-col items-center justify-center text-center"
                            >
                                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-accent/10">
                                    <CheckCircle size={38} className="text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold">Message envoye</h3>
                                <p className="mt-2 text-muted-foreground">Nous vous recontacterons dans les plus brefs delais.</p>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Field label="Nom complet" required>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Samba Ndiaye"
                                            className={inputClassName}
                                        />
                                    </Field>

                                    <Field label="Email" required>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="samba@gmail.com"
                                            className={inputClassName}
                                        />
                                    </Field>
                                </div>

                                <Field label="Entreprise">
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder="Nom de votre entreprise"
                                        className={inputClassName}
                                    />
                                </Field>

                                <Field label="Type de projet" required>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        required
                                        className={inputClassName}
                                    >
                                        <option value="">Selectionnez un type de projet</option>
                                        {projectTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </Field>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <Field label="Budget estime">
                                        <select name="budget" value={formData.budget} onChange={handleInputChange} className={inputClassName}>
                                            <option value="">Selectionnez une fourchette</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>
                                                    {range}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>

                                    <Field label="Delai souhaite">
                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleInputChange}
                                            className={inputClassName}
                                        >
                                            <option value="">Selectionnez un delai</option>
                                            {timelines.map((timeline) => (
                                                <option key={timeline} value={timeline}>
                                                    {timeline}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>
                                </div>

                                <Field label="Decrivez votre projet" required>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes techniques..."
                                        className={`${inputClassName} resize-none`}
                                    />
                                </Field>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[8px] bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_color-mix(in_srgb,var(--primary)_20%,transparent)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    <aside className="space-y-6">
                        <InfoPanel />
                        <div className="rounded-[8px] border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold">Questions frequentes</h2>
                            <div className="mt-5 space-y-4">
                                {faqs.map((faq) => (
                                    <div key={faq.question} className="rounded-[8px] bg-muted p-4">
                                        <h3 className="text-sm font-semibold">{faq.question}</h3>
                                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}

function Field({
    label,
    required,
    children,
}: {
    label: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-foreground">
                {label}
                {required ? " *" : ""}
            </span>
            {children}
        </label>
    );
}

function InfoPanel() {
    const infos = [
        {
            icon: MapPin,
            label: "Adresse",
            value: "173 YF Nord Foire, 12500 Dakar, Senegal",
            color: "bg-primary/10 text-primary",
        },
        {
            icon: Phone,
            label: "Telephone",
            value: "+221 77 856 98 23",
            color: "bg-accent/10 text-accent",
        },
        {
            icon: Mail,
            label: "Email",
            value: "contact@forge.dev",
            color: "bg-primary/10 text-primary",
        },
        {
            icon: Clock,
            label: "Horaires",
            value: "Lundi - Vendredi, 9h - 18h",
            color: "bg-accent/10 text-accent",
        },
    ];

    return (
        <div className="rounded-[8px] border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold">Informations de contact</h2>
            <div className="mt-6 space-y-5">
                {infos.map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex gap-4">
                        <div className={`flex size-11 shrink-0 items-center justify-center rounded-[8px] ${color}`}>
                            <Icon size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{label}</h3>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">{value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-7 border-t border-border pt-6">
                <h3 className="text-sm font-semibold">Suivez-nous</h3>
                <div className="mt-4 flex gap-3">
                    {socialLinks.map(({ icon: Icon, label, href, className }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex size-10 items-center justify-center rounded-[8px] border border-border bg-muted transition duration-200 hover:-translate-y-0.5 ${className}`}
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}






