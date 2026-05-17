"use client";

import dynamic from "next/dynamic";

// Import Lottie dynamically to prevent SSR hydration issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import computerAnimation from "../../public/assets/lotties/computer.json";

export const LottieSection = () => {
  return (
    <section id="about" className="relative mt-10 flex min-h-screen w-full items-center overflow-hidden bg-[var(--background)]">
      
      {/* Decorative background elements using theme colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Text Content */}
        <div className="relative flex items-center justify-center perspective-[1500px]">
          <div 
            className="w-full max-w-lg relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 3D Drop Shadow effect for Lottie */}
            <div 
              className="absolute inset-0 bg-[var(--primary)] opacity-20 blur-[80px] rounded-full translate-y-20" 
              style={{ transform: "translateZ(-100px)" }} 
            />
            
            {/* The Lottie Player Container */}
            <div 
              className="relative z-10 bg-white/40 backdrop-blur-md rounded-3xl p-6 lg:p-10 border border-white/50 shadow-2xl" 
              style={{ transform: "translateZ(30px)" }}
            >
              <Lottie 
                animationData={computerAnimation} 
                loop={true} 
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            
            {/* Floating 3D abstract decorative elements */}
            <div 
              className="absolute -top-12 -right-8 w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl shadow-xl opacity-90 animate-pulse" 
              style={{ transform: "translateZ(120px) rotate(20deg)" }} 
            />
            <div 
              className="absolute -bottom-8 -left-6 w-16 h-16 bg-[var(--card)] border border-[var(--border)] shadow-lg rounded-full flex items-center justify-center" 
              style={{ transform: "translateZ(80px)" }}
            >
               <div className="w-6 h-6 bg-[var(--accent)]/30 rounded-full animate-ping" />
               <div className="w-3 h-3 bg-[var(--accent)] rounded-full absolute" />
            </div>
          </div>
        </div>


        {/* Right: Text Content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--surface-soft)] text-[var(--primary)] text-sm font-semibold w-max border border-[var(--line-subtle)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] mr-2 animate-pulse" />
            Qui sommes-nous ?
          </div>
          <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] md:text-3xl lg:text-4xl">
            Une expertise digitale <br />
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              complète pour accélérer votre croissance.
            </span>
          </h2>
          <p className="mt-2 max-w-lg text-lg leading-relaxed text-[var(--text-muted)]">
            Forge est une agence digitale basée à Dakar. Nous accompagnons les PME, startups et organisations dans leur
            transformation numérique grâce au développement web, au marketing digital et à l&apos;infrastructure IT —
            des solutions modernes, performantes et adaptées aux réalités du Sénégal et de l&apos;Afrique de l&apos;Ouest.
          </p>
          
          <div className="grid grid-cols-2 gap-5 mt-6">
            {[
              { title: "PME & startups", desc: "Solutions sur mesure pour entreprises en croissance au Sénégal" },
              { title: "Résultats mesurables", desc: "Performance, visibilité et retour sur investissement concrets" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--primary)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--surface-soft)] flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-[var(--primary)] rounded-md opacity-80" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--card-foreground)]">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)] mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        
        
      </div>
    </section>
  );
};
