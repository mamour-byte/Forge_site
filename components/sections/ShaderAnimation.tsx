"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from 'react';


type FloatingHeroIcon = React.ComponentType<{ className?: string }>;

// Interface for the props of each individual icon.
interface IconProps {
  id: number;
  icon: FloatingHeroIcon;
  className: string; // Used for custom positioning of the icon.
  iconClassName?: string;
  wrapperClassName?: string;
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
}

// A single icon component with its own motion logic
const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const IconComponent = iconData.icon;

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        // If the cursor is close enough, repel the icon
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('absolute', iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation */}
      <motion.div
        className={cn(
          "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3 rounded-3xl shadow-xl backdrop-blur-md border",
          iconData.wrapperClassName ?? "bg-card/80 border-border/10"
        )}
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + (index % 5),
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <IconComponent
          className={cn(
            "w-8 h-8 md:w-10 md:h-10",
            iconData.iconClassName ?? "text-foreground"
          )}
        />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
  // Refs to track the raw mouse position
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background',
        className
      )}
      {...props}
    >
      {/* Container for the background floating icons */}
      <div className="absolute inset-0 w-full h-full">
        {icons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>

      {/* Container for the foreground content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
        <div className="mt-10">
          <a
            href={ctaHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "px-8 py-6 text-base font-semibold"
            )}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };











interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  index: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, index, images }: ShowImageListItemProps) {
  return (
    <div
      className={cn(
        "group relative flex cursor-pointer items-center justify-between",
        "border-t border-[var(--border)] py-5",
        "last:border-b",
      )}
      tabIndex={0}
      role="listitem"
      aria-label={text}
    >
      {/* Index */}
      <span className="font-sans min-w-[2rem] self-start pt-1 text-[11px] font-light tracking-widest text-[var(--muted-foreground)]">
        {index}
      </span>

      {/* Title */}
      <span
        className={cn(
          "font-display flex-1 select-none text-[clamp(2.5rem,7vw,4.5rem)]",
          "font-extrabold leading-none tracking-tight text-[var(--foreground)]",
          "transition-all duration-500 ease-out",
          "group-hover:tracking-wide group-hover:opacity-20",
        )}
      >
        {text}
      </span>

      {/* Image stack — revealed on hover */}
      <div
        className="pointer-events-none absolute right-14 top-1/2 h-28 w-36 -translate-y-1/2"
        aria-hidden="true"
      >
        {/* Back image */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-[5.5rem] w-[7rem] overflow-hidden rounded-md",
            "-translate-x-[30%] -translate-y-[60%]",
            "scale-75 -rotate-[8deg] opacity-0",
            "transition-all delay-[50ms] duration-[450ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
            "group-hover:scale-100 group-hover:opacity-100",
          )}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Front image */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 z-10 h-[4.5rem] w-[5.5rem] overflow-hidden rounded-md",
            "-translate-x-[60%] -translate-y-[40%]",
            "scale-75 rotate-[4deg] opacity-0",
            "transition-all delay-[100ms] duration-[450ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
            "group-hover:rotate-[6deg] group-hover:scale-100 group-hover:opacity-100",
          )}
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "shrink-0 text-[var(--muted-foreground)]",
          "-translate-x-2 opacity-0",
          "transition-all duration-300 ease-out",
          "group-hover:translate-x-0 group-hover:opacity-100",
        )}
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  );
}

function RevealImageList() {
  const items: Omit<ShowImageListItemProps, never>[] = [
    {
      text: "Branding",
      index: "01",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=400&auto=format&fit=crop&q=80",
          alt: "Branding visuel 1",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=400&auto=format&fit=crop&q=80",
          alt: "Branding visuel 2",
        },
      ],
    },
    {
      text: "Web design",
      index: "02",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&auto=format&fit=crop&q=80",
          alt: "Web design visuel 1",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&auto=format&fit=crop&q=80",
          alt: "Web design visuel 2",
        },
      ],
    },
    {
      text: "Illustration",
      index: "03",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=400&auto=format&fit=crop&q=80",
          alt: "Illustration visuel 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=400&auto=format&fit=crop&q=80",
          alt: "Illustration visuel 2",
        },
      ],
    },
  ];

  return (
    <section
      className="bg-[var(--background)] px-10 py-10"
      aria-label="Nos services"
    >
      {/* Header */}
      <div className="mb-8">
        <p className="font-sans mb-3 text-[11px] font-normal uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
          Nos services
        </p>
        <div className="h-px w-8 bg-[var(--border)]" />
      </div>

      {/* List */}
      <div role="list" className="flex flex-col">
        {items.map((item) => (
          <RevealImageListItem
            key={item.index}
            text={item.text}
            index={item.index}
            images={item.images}
          />
        ))}
      </div>

      {/* Footer hint */}
      <div className="mt-4 flex items-center gap-2">
        <span className="font-sans text-[12px] text-[var(--muted-foreground)]">
          Survolez pour explorer
        </span>
        <span className="inline-block h-1 w-1 rounded-full bg-[var(--muted-foreground)] opacity-40" />
        <span className="font-sans text-[12px] text-[var(--muted-foreground)]">
          {items.length} expertises
        </span>
      </div>
    </section>
  );
}

export { RevealImageList };
