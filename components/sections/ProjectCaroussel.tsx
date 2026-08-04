"use client";

import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  url: string;
  thumbnail: string; // URL or local path
  tags?: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Oryx Studios",
    description: "Site vitrine Audiovisuelle ",
    url: "https://oryx-studios.com",
    thumbnail: "",
    tags: ["Vitrine", "Audiovisuel"],
  },
  {
    title: "Suntech 3",
    description: "Ecole privée de formation dans les métier de l'art du cinema et de l'audiovisuel",
    url: "https://hitech3.com",
    thumbnail: "",
    tags: ["Cinema", "Education", "Audiovisuel"],
  },
  {
    title: "Hollywood University",
    description: "Ecole privée de formation dans les métier de l'art du cinema et de l'audiovisuel",
    url: "https://hollywood-university.com",
    thumbnail: "",
    tags: ["Education", "Cinema", "Audiovisuel"],
  },
  {
    title: "Iris fragrance",
    description: "Boutique en ligne de parfums et cosmétiques",
    url: "https://irisfragrance.com",
    thumbnail: "",
    tags: ["E-commerce", "Branding"],
  },
  {
    title: "Misericorde Alu",
    description: "Application de gestion pour de quincallerie multi boutiuques",
    url: "https://misericorde-alu.com",
    thumbnail: "",
    tags: ["Gestion", "Application"],
  },
  {
    title: "Video Surveillance System & Interphone - Bayakh",
    description: "Système de vidéosurveillance avec interphone pour domicile a Bayakh",
    url: "#",
    thumbnail: "",
    tags: ["Caméra de surveillance", "Interphone"],
  },
  {
    title: "Video Surveillance  & Controle d'acces - Yaseelay Sea Food",
    description: "Système de vidéosurveillance avec contrôle d'accès pour Yaseelay Sea Food",
    url: "#",
    thumbnail: "",
    tags: ["Caméra de surveillance", "Contrôle d'accès"],
  },
  {
    title: "Flow - Application Mobile ",
    description: "Application cross platform de point de vente pour les commerces et boutiques",
    url: "#",
    thumbnail: "",
    tags: ["Application", "Contrôle de ventes" , "Mobile"],
  },
];

const getProjectCategory = (project: Project) => {
  const tags = project.tags?.map((tag) => tag.toLowerCase()) ?? [];

  if (tags.some((tag) => ["vitrine", "e-commerce", "branding", "site", "website" , "education",, "cinema"].includes(tag))) {
    return "sites";
  }

  if (tags.some((tag) => ["application", "gestion",  "app", "logiciel"].includes(tag))) {
    return "applications";
  }

  if (tags.some((tag) => ["caméra de surveillance", "interphone", "contrôle d'accès", "réseau", "infrastructure", "server", "network"].includes(tag))) {
    return "infrastructure";
  }

  return "sites";
};

export default function ProjectsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [thumbnailMap, setThumbnailMap] = useState<Record<string, string>>({});
  const [showUploader, setShowUploader] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>(PROJECTS[0]?.title ?? "");
  const [inputUrl, setInputUrl] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);

  // create refs and drag state per track (3 sections)
  const trackRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isDragging = useRef<boolean[]>([]);
  const startX = useRef<number[]>([]);
  const scrollLeft = useRef<number[]>([]);

  const ensureIndex = (i: number) => {
    if (isDragging.current[i] === undefined) isDragging.current[i] = false;
    if (startX.current[i] === undefined) startX.current[i] = 0;
    if (scrollLeft.current[i] === undefined) scrollLeft.current[i] = 0;
  };

  const onMouseDown = (e: React.MouseEvent, idx: number) => {
    ensureIndex(idx);
    isDragging.current[idx] = true;
    const el = trackRefs.current[idx];
    startX.current[idx] = e.pageX - (el?.offsetLeft ?? 0);
    scrollLeft.current[idx] = el?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent, idx: number) => {
    const el = trackRefs.current[idx];
    if (!isDragging.current[idx] || !el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft.current[idx] - (x - startX.current[idx]);
  };
  const stopDrag = (idx: number) => {
    isDragging.current[idx] = false;
  };

  const sections = [
    {
      id: "sites",
      title: "Sites Web",
      subtitle: "Sites vitrine, e-commerce et portails",
      items: PROJECTS.filter((project) => getProjectCategory(project) === "sites"),
    },
    {
      id: "apps",
      title: "Applications & Logiciels",
      subtitle: "Solutions métiers, applications mobiles et SaaS",
      items: PROJECTS.filter((project) => getProjectCategory(project) === "applications"),
    },
    {
      id: "networks",
      title: "Installations Réseaux & Config.",
      subtitle: "Réseau, serveurs et configurations techniques",
      items: PROJECTS.filter((project) => getProjectCategory(project) === "infrastructure"),
    },
  ];

  return (
    <section style={styles.section}>
      {/* <div style={{ padding: "0 24px", marginBottom: 16, textAlign: "center" }}>
        <button
          onClick={() => setShowUploader((s) => !s)}
          style={{
            background: "var(--primary)",
            color: "white",
            padding: "10px 14px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          {showUploader ? "Fermer l'uploader" : "Ajouter une capture"}
        </button>

        {showUploader && (
          <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)} style={{ padding: 8, borderRadius: 8 }}>
              {PROJECTS.map((p) => (
                <option key={p.title} value={p.title}>{p.title}</option>
              ))}
            </select>

            <input
              placeholder="URL image (ou laisser vide pour uploader)"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              style={{ padding: 8, borderRadius: 8, minWidth: 220 }}
            />

            <label style={{ background: "var(--card)", padding: 8, borderRadius: 8, cursor: "pointer" }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const url = URL.createObjectURL(f);
                  setFilePreview(url);
                  setInputUrl("");
                }}
              />
              Charger un fichier
            </label>

            <button
              onClick={() => {
                const key = selectedProject;
                const value = inputUrl || filePreview || "";
                if (!value) return alert("Fournis une URL ou un fichier");
                setThumbnailMap((m) => ({ ...m, [key]: value }));
                setShowUploader(false);
                setInputUrl("");
                setFilePreview(null);
              }}
              style={{ background: "var(--accent)", color: "white", padding: "8px 12px", borderRadius: 8, fontWeight: 700 }}
            >
              Ajouter
            </button>

            {filePreview && <img src={filePreview} alt="preview" style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 6 }} />}
          </div>
        )}
      </div> */}
      <div style={{ padding: "0 24px", marginBottom: 32  , textAlign: "center" }}>
        <span style={styles.eyebrow}>Nos réalisations</span>
        <h2 style={{ ...styles.heading, marginBottom: 8 }}>Projets par catégorie</h2>
        <p style={styles.sub}>Parcourez nos réalisations selon le type de solution — sites, applications, et infrastructures réseau.</p>
      </div>

      {sections.map((sec, idx) => (
        <div key={sec.id} style={{ marginBottom: 48 , textAlign: "center" }}>
          <div style={{ padding: "0 24px", marginBottom: 16 }}>
            <h3 style={{ fontSize: 20, margin: 0, fontWeight: 800 }}>{sec.title}</h3>
            {/* <p style={{ marginTop: 6, color: "var(--text-muted)", fontSize: 14 }}>{sec.subtitle}</p> */}
          </div>

          <div
            ref={(el) => { trackRefs.current[idx] = el }}
            style={styles.track}
            onMouseDown={(e) => onMouseDown(e, idx)}
            onMouseMove={(e) => onMouseMove(e, idx)}
            onMouseUp={() => stopDrag(idx)}
            onMouseLeave={() => stopDrag(idx)}
          >
            {sec.items.map((project, i) => (
              <ProjectCard
                key={`${sec.id}-${i}`}
                project={{ ...project, thumbnail: thumbnailMap[project.title] ?? project.thumbnail }}
                isHovered={hoveredIndex === i}
                onHover={() => setHoveredIndex(i)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>

          <p style={styles.scrollHint}>← faites glisser pour explorer →</p>
        </div>
      ))}
    </section>
  );
}

/* ── Card ── */
function ProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHovered : {}),
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* thumbnail */}
      <div style={styles.imgWrap}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            draggable={false}
            style={{
              ...styles.img,
              transform: isHovered ? "scale(1.06)" : "scale(1)",
            }}
          />
        ) : (
          <div style={{
            ...styles.img,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'color-mix(in srgb, var(--border) 8%, transparent)'
          }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>Aperçu manquant</span>
          </div>
        )}
        {/* overlay on hover */}
        <div
          style={{
            ...styles.overlay,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <span style={styles.visitBtn}>Visiter le site ↗</span>
        </div>
      </div>

      {/* card body */}
      <div style={styles.cardBody}>
        <div style={styles.tagRow}>
          {project.tags?.map((t) => (
            <span key={t} style={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <h3 style={styles.cardTitle }>{project.title}</h3>
        <p style={styles.cardDesc}>{project.description}</p>
        <span
          style={{
            ...styles.arrow,
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
}

/* ── Styles (inline, no external dep) ── */
const styles: Record<string, React.CSSProperties> = {
  section: {
    background: "var(--background)",
    padding: "var(--space-2xl) 0 var(--space-xl)",
    overflow: "hidden",
    fontFamily: "var(--font-sans)",
  },
  headingWrap: {
    textAlign: "center",
    marginBottom: "56px",
    padding: "0 24px",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "var(--primary)",
    marginBottom: "14px",
  },
  heading: {
    color: "var(--foreground)",
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
    lineHeight: 1.05,
  },
  sub: {
    color: "var(--text-muted)",
    fontSize: "15px",
    maxWidth: "480px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  /* track */
  track: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "clamp(16px, 2vw, 24px)",
    overflowX: "auto",
    overflowY: "visible",
    padding: "0 24px 32px",
    margin: "0 auto",
    maxWidth: "1320px",
    scrollSnapType: "x mandatory",
    cursor: "grab",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch",
  } as React.CSSProperties,

  /* card */
  card: {
    flex: "0 0 340px",
    scrollSnapAlign: "start",
    borderRadius: "16px",
    background: "var(--card-bg)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--border)",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), border-color 0.25s, box-shadow 0.35s",
    boxShadow: "var(--shadow-sm)",
  },
  cardHovered: {
    transform: "translateY(-8px) scale(1.015)",
    borderColor: "var(--primary)",
    boxShadow: "var(--shadow-lg)",
    background: "var(--card-hover)",
  },

  /* image area */
  imgWrap: {
    position: "relative",
    overflow: "hidden",
    height: "210px",
    background: "var(--border)",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s cubic-bezier(.22,.68,0,1.2)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(26,26,26,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s",
    backdropFilter: "blur(2px)",
  },
  visitBtn: {
    background: "var(--primary)",
    color: "#fff",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    padding: "10px 20px",
    borderRadius: "40px",
    textTransform: "uppercase" as const,
  },

  /* card body */
  cardBody: {
    padding: "20px 22px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-sm)",
    flex: 1,
  },
  tagRow: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap" as const,
  },
  tag: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--primary)",
    background: "color-mix(in srgb, var(--primary) 12%, transparent)",
    padding: "3px 8px",
    borderRadius: "4px",
  },
  cardTitle: {
    color: "var(--foreground)",
    fontFamily: "var(--font-display)",
    fontSize: "18px",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  cardDesc: {
    color: "var(--text-muted)",
    fontSize: "13px",
    lineHeight: 1.55,
    margin: 0,
    flex: 1,
  },
  arrow: {
    color: "var(--primary)",
    fontSize: "18px",
    fontWeight: 700,
    transition: "transform 0.25s",
    alignSelf: "flex-end",
    marginTop: "4px",
  },

  scrollHint: {
    textAlign: "center" as const,
    color: "var(--text-light)",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginTop: "8px",
  },
};