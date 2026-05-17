"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

const CyberMatrixHero = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !gridRef.current) return;

    const grid = gridRef.current;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/?;:\"[]{}\\|!@#$%^&*()_+-=";
    let columns = 0;
    let rows = 0;

    const createTile = () => {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      tile.onclick = (e) => {
        const target = e.target as HTMLElement;
        target.textContent = chars[Math.floor(Math.random() * chars.length)];
        target.classList.add("glitch");
        setTimeout(() => target.classList.remove("glitch"), 200);
      };

      return tile;
    };

    const createTiles = (quantity: number) => {
      Array.from(Array(quantity)).forEach(() => {
        grid.appendChild(createTile());
      });
    };

    const createGrid = () => {
      grid.innerHTML = "";

      const size = 60;
      columns = Math.floor(window.innerWidth / size);
      rows = Math.floor(window.innerHeight / size);

      grid.style.setProperty("--columns", String(columns));
      grid.style.setProperty("--rows", String(rows));

      createTiles(columns * rows);

      for (const tile of grid.children) {
        (tile as HTMLElement).textContent = chars[Math.floor(Math.random() * chars.length)];
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const radius = window.innerWidth / 4;

      for (const tile of grid.children) {
        const rect = (tile as HTMLElement).getBoundingClientRect();
        const tileX = rect.left + rect.width / 2;
        const tileY = rect.top + rect.height / 2;

        const distance = Math.sqrt(Math.pow(mouseX - tileX, 2) + Math.pow(mouseY - tileY, 2));
        const intensity = Math.max(0, 1 - distance / radius);

        (tile as HTMLElement).style.setProperty("--intensity", String(intensity));
      }
    };

    window.addEventListener("resize", createGrid);
    window.addEventListener("mousemove", handleMouseMove);

    createGrid();

    return () => {
      window.removeEventListener("resize", createGrid);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isClient]);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div ref={gridRef} id="tiles" />

      <style>{`
        #tiles {
          --intensity: 0;
          display: grid;
          grid-template-columns: repeat(var(--columns), 1fr);
          grid-template-rows: repeat(var(--rows), 1fr);
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
        }
        .tile {
          position: relative;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Courier New', Courier, monospace;
          font-size: 1.2rem;
          opacity: calc(0.08 + var(--intensity) * 0.85);
          color: color-mix(in srgb, var(--color-accent) calc(var(--intensity) * 100%), var(--color-primary));
          text-shadow: 0 0 calc(var(--intensity) * 12px) color-mix(in srgb, var(--color-accent) 80%, transparent);
          transform: scale(calc(1 + var(--intensity) * 0.2));
          transition: color 0.2s ease, text-shadow 0.2s ease, transform 0.2s ease;
        }
        .tile.glitch {
          animation: glitch-anim 0.2s ease;
        }
        @keyframes glitch-anim {
          0% { transform: scale(1); color: var(--color-accent); }
          50% { transform: scale(1.2); color: var(--color-secondary); text-shadow: 0 0 10px var(--color-primary); }
          100% { transform: scale(1); color: var(--color-accent); }
        }
      `}</style>

            {/* Overlay HTML Content */}
            <div className="relative z-10 text-center p-6 bg-background backdrop-blur-md rounded-xl border border-white/10">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--color-accent)_32%,var(--color-background))] bg-[color-mix(in_srgb,var(--color-accent)_12%,var(--color-background))] px-4 py-1.5"
        >
          <Code className="h-4 w-4 text-[var(--color-accent)]" />
          <span className="text-sm font-medium text-[var(--color-primary)]">Digitalisation & développement</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl"
        >
          Digitalisez vos processus métier
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-lg text-[var(--text-muted)]"
        >
          Sites web, applications sur mesure, ERP et automatisation à Dakar : nous transformons vos tâches manuelles en
          outils performants, évolutifs et adaptés à votre activité.
        </motion.p>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto">
                        Contactez-nous
            <ArrowRight className="h-5 w-5" />
                    </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CyberMatrixHero;
