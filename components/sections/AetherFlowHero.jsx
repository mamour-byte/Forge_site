"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const hexToRgb = (hex) => {
    const sanitized = hex.replace('#', '').trim();
    const normalized = sanitized.length === 3
        ? sanitized.split('').map((char) => char + char).join('')
        : sanitized;
    const value = Number.parseInt(normalized, 16);

    return {
        r: (value >> 16) & 255,
        g: (value >> 8) & 255,
        b: value & 255,
    };
};

const rgba = (hex, alpha) => {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// The main hero component
const AetherFlowHero = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const mouse = { x: null, y: null, radius: 200 };
        const styles = getComputedStyle(document.documentElement);
        const theme = {
            primary: styles.getPropertyValue('--color-primary').trim() || '#2C519E',
            accent: styles.getPropertyValue('--color-accent').trim() || '#6DB758',
            background: styles.getPropertyValue('--color-background').trim() || '#FFFFFF',
            text: styles.getPropertyValue('--color-text').trim() || '#090A0A',
        };

        // Moved Particle class definition here to avoid initialization errors
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision detection
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = rgba(theme.primary, 0.9);
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); 
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        
                        let dx_mouse_a = particles[a].x - mouse.x;
                        let dy_mouse_a = particles[a].y - mouse.y;
                        let distance_mouse_a = Math.sqrt(dx_mouse_a*dx_mouse_a + dy_mouse_a*dy_mouse_a);

                        if (mouse.x !== null && distance_mouse_a < mouse.radius) {
                             ctx.strokeStyle = rgba(theme.accent, Math.min(opacityValue, 0.98));
                             ctx.lineWidth = 1.65;
                        } else {
                             ctx.strokeStyle = rgba(theme.primary, Math.min(opacityValue, 0.58));
                             ctx.lineWidth = 1.15;
                        }

                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            // Set the background color inside the canvas draw loop
            ctx.fillStyle = theme.background;
            ctx.fillRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };
        
        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* The canvas is now the primary background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full"></canvas>
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_34%,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_46%)]" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_54%,transparent),transparent_34%,color-mix(in_srgb,var(--background)_72%,transparent))]" />
            
            {/* Overlay HTML Content */}
            <div className="relative z-10 text-center p-6">
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,var(--background))] border border-[color-mix(in_srgb,var(--accent)_32%,var(--background))] mb-6 backdrop-blur-sm shadow-[0_10px_30px_color-mix(in_srgb,var(--primary)_12%,transparent)]"
                >
                    <Zap className="h-4 w-4 text-[var(--accent)]" />
                    <span className="text-sm font-medium text-[var(--foreground)]">
                        Infrastructure & réseau
                    </span>
                </motion.div>

                <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[var(--foreground)] via-[color-mix(in_srgb,var(--foreground)_84%,var(--primary))] to-[var(--primary)]"
                >
                   Des fondations solides pour <br /> votre entreprise
                </motion.h1>

                <motion.p
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl mx-auto text-lg text-[var(--muted-foreground)] mb-10"
                >
                    Câblage structuré, serveurs, routeurs, vidéosurveillance et contrôle d&apos;accès. Nous concevons et déployons des architectures réseaux sécurisées et évolutives.
                    </motion.p>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <button className="px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold rounded-lg shadow-lg shadow-[color-mix(in_srgb,var(--primary)_24%,transparent)] hover:bg-[color-mix(in_srgb,var(--primary)_88%,var(--foreground))] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--ring)] transition-colors duration-300 flex items-center gap-2 mx-auto">
                        Demande une etude
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default AetherFlowHero;
