"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Configuration for the image sequence
// Ensure they follow the naming convention: ezgif-frame-001.jpg, ezgif-frame-002.jpg, etc.
const FRAME_COUNT = 197;
const SEQUENCE_PATH = "/assets/animation/ezgif-frame-";
const SEQUENCE_EXTENSION = ".png";

export const Animation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Refs for text content to animate them in sync with scroll
    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const text3Ref = useRef<HTMLDivElement>(null);

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    // 1. Preload images to ensure fluid playback without stuttering
    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const index = i.toString().padStart(3, "0");
            img.src = `${SEQUENCE_PATH}${index}${SEQUENCE_EXTENSION}`;

            const onImageLoadOrError = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };

            img.onload = onImageLoadOrError;
            img.onerror = onImageLoadOrError; // Continue even if an image is missing

            images.push(img);
        }
        imagesRef.current = images;
    }, []);

    // 2. Set up GSAP animations and Canvas drawing
    useGSAP(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Canvas drawing function
        const renderFrame = (rawIndex: number) => {
            const safeIndex = Math.min(Math.max(Math.round(rawIndex), 0), FRAME_COUNT - 1);
            const img = imagesRef.current[safeIndex];

            if (img && img.complete && img.naturalWidth > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate aspect ratio to cover canvas (like object-cover)
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                );
            } else {
                // Fallback: render the closest previous loaded frame to avoid blank canvas
                for (let i = safeIndex; i >= 0; i--) {
                    const fallbackImg = imagesRef.current[i];
                    if (fallbackImg && fallbackImg.complete && fallbackImg.naturalWidth > 0) {
                        const hRatio = canvas.width / fallbackImg.width;
                        const vRatio = canvas.height / fallbackImg.height;
                        const ratio = Math.max(hRatio, vRatio);
                        const centerShift_x = (canvas.width - fallbackImg.width * ratio) / 2;
                        const centerShift_y = (canvas.height - fallbackImg.height * ratio) / 2;

                        ctx.drawImage(
                            fallbackImg,
                            0, 0, fallbackImg.width, fallbackImg.height,
                            centerShift_x, centerShift_y, fallbackImg.width * ratio, fallbackImg.height * ratio
                        );
                        break;
                    }
                }
            }
        };

        // Playhead object to store the current frame value
        const playhead = { frame: 0 };

        // Keep canvas size synced with window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(playhead.frame);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Try to render the first frame as soon as it's available
        let initialRenderAttempt = 0;
        const initialRender = setInterval(() => {
            if (imagesRef.current[0]?.complete && imagesRef.current[0]?.naturalWidth > 0) {
                renderFrame(0);
                clearInterval(initialRender);
            }
            if (initialRenderAttempt++ > 50) { // Timeout to avoid infinite loop
                clearInterval(initialRender);
            }
        }, 100);

        // Create master timeline for the scroll section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${FRAME_COUNT * 25}`, // Extend scroll length for smoother pacing
                pin: true,
                scrub: 0.8, // Smooth interpolation between scroll events
                anticipatePin: 1,
            }
        });

        // Animate the playhead from frame 0 to the last frame
        tl.to(playhead, {
            frame: FRAME_COUNT - 1,
            snap: "frame",
            ease: "none",
            onUpdate: () => renderFrame(playhead.frame),
            duration: 1 // Baseline for relative positioning in the timeline
        }, 0);

        // Sync Text 1: Headline
        tl.fromTo(text1Ref.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" },
            0.05 // Starts early
        )
            .to(text1Ref.current, { opacity: 0, y: -40, duration: 0.1, ease: "power2.in" }, 0.25); // Fades out

        // Sync Text 2: Supporting Detail
        tl.fromTo(text2Ref.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" },
            0.40 // Appears during laptop opening animation
        )
            .to(text2Ref.current, { opacity: 0, y: -40, duration: 0.1, ease: "power2.in" }, 0.65);

        // Sync Text 3: CTA
        tl.fromTo(text3Ref.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
            0.80 // Appears at the final stage
        );

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            clearInterval(initialRender);
        };
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden text-white font-sans">

            {/* 3. Canvas Layer */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 4. Cinematic Overlays for aesthetics and text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/90 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.04] to-transparent z-10 pointer-events-none" />

            {/* Loading Indicator (Optional dev/ux feedback) */}
            {imagesLoaded < FRAME_COUNT && (
                <div className="absolute bottom-6 right-6 text-white/30 text-xs tracking-widest uppercase z-50 font-mono">
                    Loading Sequence: {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
                </div>
            )}

            {/* 5. Typography Content Container */}
            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 pointer-events-none">

                {/* Text Group 1 */}
                <div
                    ref={text1Ref}
                    className="absolute top-[25%] left-6 lg:left-12 max-w-2xl opacity-0"
                >
                    <h2 className="text-5xl md:text-7xl text-black font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6 leading-tight">
                        Qui Sommes Nous ? <br />  Forge Group
                    </h2>
                    <p className="text-lg md:text-xl text-black font-light leading-relaxed max-w-md">
                        Experience the next generation of computational power. Designed with absolute precision, built for boundless creativity.
                    </p>
                </div>

                {/* Text Group 2 */}
                <div
                    ref={text2Ref}
                    className="absolute top-[35%] right-6 lg:right-12 max-w-xl opacity-0 text-right md:text-left"
                >
                    <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Flawless <br className="hidden md:block" /> Architecture.
                    </h3>
                    <p className="text-white/60 text-lg font-light max-w-sm ml-auto md:ml-0">
                        Every curve, every pixel, every line of code harmonized into a seamless ecosystem. Zero compromises.
                    </p>
                </div>

                {/* Text Group 3: CTA */}
                <div
                    ref={text3Ref}
                    className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-full text-center px-6 opacity-0 pointer-events-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                        The Future is Open.
                    </h2>
                    <button className="px-8 py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer">
                        Discover the Series
                    </button>
                </div>

            </div>
        </section>
    );
};
