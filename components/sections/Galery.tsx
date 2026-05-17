"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="mb-4 block text-xs font-medium text-primary md:text-sm">
          Nos réalisations
        </span>
        <h2 className="text-4xl font-semibold text-foreground md:text-6xl">
          Des projets concrets, livrés sur le terrain
        </h2>
        <p className="my-4 text-base text-muted-foreground md:my-6 md:text-lg">
          Sites web, applications métier, réseaux et sécurité : découvrez comment Forge accompagne les entreprises au
          Sénégal avec des solutions utiles, maintenables et orientées résultats.
        </p>
        <Link
          href="/realisation"
          className={cn(
            "inline-block rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground",
            "transition-all hover:bg-primary/90 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          Voir nos réalisations
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1612010167108-3e6b327405f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1673300496788-34658d22944e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFya2V0aW5nfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ldHdvcmt8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VydmVyfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1499540633125-484965b60031?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    src: "https://plus.unsplash.com/premium_vector-1717082060641-5d649cb834aa?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    src: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    src: "https://plus.unsplash.com/premium_vector-1682309081920-d2725d3e620c?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5kcm9pZGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
  },
];

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(squareData);

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(shuffle([...squareData]));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    // Initialize shuffle only on client to prevent hydration mismatch
    timeoutRef.current = setTimeout(shuffleSquares, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full rounded-md overflow-hidden bg-muted"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
  imageAlt: string;
}

const slides: SlideData[] = [
  {
    title: "Vidéosurveillance professionnelle",
    subtitle: "Installation, maintenance et supervision",
    description:
      "Installation de caméras IP, enregistreurs NVR et accès distant sécurisé pour protéger vos locaux professionnels avec une solution fiable, évolutive et maintenue dans la durée.",
    accent: "var(--color-primary)",
    imageUrl: "/assets/images/camera.jpg",
    imageAlt:
      "Installation de vidéosurveillance professionnelle avec caméra IP pour locaux d'entreprise",
  },
  {
    title: "Câblage réseau informatique",
    subtitle: "Infrastructure cuivre, fibre et baie de brassage",
    description:
      "Création et optimisation de câblage réseau structuré pour garantir une connexion rapide, stable et conforme aux besoins de votre entreprise, du poste utilisateur à la baie technique.",
    accent: "var(--color-accent)",
    imageUrl: "/assets/images/cablage.png",
    imageAlt:
      "Câblage réseau informatique structuré avec baie de brassage et connectivité professionnelle",
  },
  {
    title: "Contrôle d'accès et interphonie",
    subtitle: "Sécurité des accès et gestion des entrées",
    description:
      "Déploiement de badges, interphones, serrures connectées et solutions de contrôle d'accès pour sécuriser vos bâtiments et simplifier la gestion des visiteurs et du personnel.",
    accent: "color-mix(in srgb, var(--color-primary) 65%, var(--color-accent))",
    imageUrl: "/assets/images/acces.png",
    imageAlt:
      "Système de contrôle d'accès et interphonie pour sécuriser les locaux professionnels",
  },
  {
    title: "Configuration serveur",
    subtitle: "Déploiement, virtualisation et maintenance",
    description:
      "Installation, paramétrage et maintenance de serveurs Windows, Linux, locaux ou cloud pour centraliser vos données, fiabiliser vos services et soutenir la croissance de votre activité.",
    accent: "color-mix(in srgb, var(--color-accent) 70%, var(--color-primary))",
    imageUrl: "/assets/images/server.jpg",
    imageAlt:
      "Configuration serveur professionnel Windows Linux pour infrastructure réseau d'entreprise",
  },
];

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="carousel-inner">
        <div className="carousel-content">
          <div className="carousel-content-inner">
            <div
              className={`carousel-collection-num ${isTransitioning ? "transitioning" : "visible"}`}
            >
              <span className="carousel-num-line" />
              <span className="carousel-num-text">
                {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <h2
              className={`carousel-title ${isTransitioning ? "transitioning" : "visible"}`}
            >
              {currentSlide.title}
            </h2>

            <p
              className={`carousel-subtitle ${isTransitioning ? "transitioning" : "visible"}`}
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </p>

            <p
              className={`carousel-description ${isTransitioning ? "transitioning" : "visible"}`}
            >
              {currentSlide.description}
            </p>

            <div className="carousel-nav-arrows">
              <button
                onClick={goPrev}
                className="carousel-arrow-btn"
                aria-label="Slide précédente"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="carousel-arrow-btn"
                aria-label="Slide suivante"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-image-container">
          <div
            className={`carousel-image-frame ${isTransitioning ? "transitioning" : "visible"}`}
          >
            <Image
              src={currentSlide.imageUrl}
              alt={currentSlide.imageAlt}
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 520px"
              className="carousel-image"
            />
            <div
              className="carousel-image-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
              }}
            />
          </div>

          <div className="carousel-frame-corner carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
          <div className="carousel-frame-corner carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
        </div>
      </div>

      <div className="carousel-progress-bar">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => goToSlide(index)}
            className={`carousel-progress-item ${index === currentIndex ? "active" : ""}`}
            aria-label={`Voir ${slide.title}`}
          >
            <div className="carousel-progress-track">
              <div
                className="carousel-progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%",
                  backgroundColor: index === currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
            <span className="carousel-progress-label">{slide.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
