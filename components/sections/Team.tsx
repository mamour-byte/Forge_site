"use client";
import { useState, useRef } from "react";
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { cn } from "../../lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Mamour Fall",
    role: "Fullstack Developer — Founder & CEO",
    image: "/assets/images/Mamour Fall.png",
    social: { twitter: "#", linkedin: "#", behance: "#" },
  },
  {
    id: "2",
    name: "Abdoul Aziz Seye",
    role: "IT Technician",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vnSxNNVGZV2MXRjlGELl-NgLl5kXdpDR6A&s",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "Henry Etienne Ba",
    role: "Graphic Designer — Motion",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Fama Ndiaye",
    role: "Community Manager",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQE-Z7-S1LSYNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724143166545?e=2147483647&v=beta&t=6IPCwgOzblGt4p2fEdnY74gMbLyRHii5Ite3A39qQsY",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Youga Fall",
    role: "Sales & Business Dev",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "Ami Fall",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/400?img=16",
    social: { instagram: "#" },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

/* ─── Layout constants ─── */
const CARD_SIZES = [
  { w: 160, h: 200 },
  { w: 180, h: 220 },
  { w: 155, h: 190 },
];

const COL_OFFSETS = [0, 56, 28]; // vertical stagger per column

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const cols = [
    members.filter((_, i) => i % 3 === 0),
    members.filter((_, i) => i % 3 === 1),
    members.filter((_, i) => i % 3 === 2),
  ];

  const activeMember = members.find((m) => m.id === activeId) ?? null;

  return (
    <section
      className="relative w-full max-w-5xl mx-auto px-6 py-16 overflow-hidden font-sans"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[420px] h-[420px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, currentColor 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      {/* Section header */}
      <header className="mb-12">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-foreground/40 mb-3">
          L'équipe
        </p>
        <h2
          className="text-[40px] md:text-[52px] font-semibold leading-[1.05] tracking-tight text-foreground"
          style={{ letterSpacing: "-0.03em" }}
        >
          Les visages
          <br />
          <span className="text-foreground/25">derrière le projet</span>
        </h2>
      </header>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* ── Photo mosaic ── */}
        <div className="flex gap-3 flex-shrink-0 relative overflow-x-auto pb-4 w-full lg:w-auto snap-x" style={{ height: 520, scrollbarWidth: "none" }}>
          {cols.map((colMembers, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-3 snap-center"
              style={{ marginTop: COL_OFFSETS[colIdx] }}
            >
              {colMembers.map((member) => {
                const size = CARD_SIZES[colIdx];
                const isActive = activeId === member.id;
                const isDimmed = activeId !== null && !isActive;
                return (
                  <PhotoCard
                    key={member.id}
                    member={member}
                    width={size.w}
                    height={size.h}
                    isActive={isActive}
                    isDimmed={isDimmed}
                    onEnter={() => setActiveId(member.id)}
                    onLeave={() => setActiveId(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* ── Member list ── */}
        <div className="flex-1 flex flex-col justify-center pt-2 w-full">
          {/* Inline preview card */}
          <div
            className="mb-8 overflow-hidden rounded-2xl transition-all duration-500"
            style={{
              height: activeMember ? 88 : 0,
              opacity: activeMember ? 1 : 0,
              marginBottom: activeMember ? 32 : 0,
            }}
          >
            {activeMember && (
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-foreground text-base leading-tight">
                    {activeMember.name}
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-foreground/40 mt-1">
                    {activeMember.role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* List */}
          <ul className="space-y-0 w-full">
            {members.map((member, idx) => {
              const isActive = activeId === member.id;
              const isDimmed = activeId !== null && !isActive;
              return (
                <MemberRow
                  key={member.id}
                  member={member}
                  index={idx}
                  isActive={isActive}
                  isDimmed={isDimmed}
                  onEnter={() => setActiveId(member.id)}
                  onLeave={() => setActiveId(null)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */
function PhotoCard({
  member,
  width,
  height,
  isActive,
  isDimmed,
  onEnter,
  onLeave,
}: {
  member: TeamMember;
  width: number;
  height: number;
  isActive: boolean;
  isDimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0"
      style={{
        width,
        height,
        opacity: isDimmed ? 0.45 : 1,
        transform: isActive ? "scale(1.025) translateY(-3px)" : "scale(1) translateY(0)",
        transition: "opacity 0.35s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        style={{
          filter: isActive
            ? "grayscale(0) brightness(1) contrast(1.02)"
            : "grayscale(0.85) brightness(0.75)",
          transition: "filter 0.5s ease",
        }}
      />
      {/* Hover overlay with name */}
      <div
        className="absolute inset-0 flex items-end p-3"
        style={{
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)"
            : "transparent",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <span className="text-white text-[11px] font-semibold tracking-wide leading-tight drop-shadow">
          {member.name.split(" ")[0]}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Member row
───────────────────────────────────────── */
function MemberRow({
  member,
  index,
  isActive,
  isDimmed,
  onEnter,
  onLeave,
}: {
  member: TeamMember;
  index: number;
  isActive: boolean;
  isDimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const hasSocial =
    member.social?.twitter ||
    member.social?.linkedin ||
    member.social?.instagram ||
    member.social?.behance;

  return (
    <li
      className="group relative cursor-pointer select-none"
      style={{
        opacity: isDimmed ? 0.3 : 1,
        transition: "opacity 0.3s ease",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Top border line */}
      <div
        className="h-px w-full mb-3"
        style={{
          background: isActive
            ? "linear-gradient(to right, currentColor 0%, transparent 80%)"
            : "rgba(127,127,127,0.12)",
          transition: "background 0.3s ease",
        }}
      />

      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-4">
          {/* Index */}
          <span
            className="text-[11px] font-mono tabular-nums w-5 text-right flex-shrink-0"
            style={{
              color: isActive ? "currentColor" : "rgba(127,127,127,0.35)",
              transition: "color 0.3s ease",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Name */}
          <span
            className="text-[17px] md:text-[19px] font-semibold leading-none tracking-tight"
            style={{
              color: isActive ? "currentColor" : "rgba(127,127,127,0.65)",
              transform: isActive ? "translateX(4px)" : "translateX(0)",
              display: "inline-block",
              transition: "color 0.3s ease, transform 0.3s ease",
              letterSpacing: "-0.02em",
            }}
          >
            {member.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Role pill — shows on hover */}
          <span
            className="text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(127,127,127,0.08)",
              color: "rgba(127,127,127,0.55)",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateX(0)" : "translateX(8px)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
              whiteSpace: "nowrap",
            }}
          >
            {member.role}
          </span>

          {/* Social icons */}
          {hasSocial && (
            <div
              className="flex items-center gap-1"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(6px)",
                transition: "opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s",
              }}
            >
              {member.social?.twitter && (
                <SocialLink href={member.social.twitter} label="Twitter">
                  <FaTwitter size={9} />
                </SocialLink>
              )}
              {member.social?.linkedin && (
                <SocialLink href={member.social.linkedin} label="LinkedIn">
                  <FaLinkedinIn size={9} />
                </SocialLink>
              )}
              {member.social?.instagram && (
                <SocialLink href={member.social.instagram} label="Instagram">
                  <FaInstagram size={9} />
                </SocialLink>
              )}
              {member.social?.behance && (
                <SocialLink href={member.social.behance} label="Behance">
                  <FaBehance size={9} />
                </SocialLink>
              )}
            </div>
          )}

          {/* Arrow */}
          <span
            className="text-sm"
            style={{
              opacity: isActive ? 0.5 : 0,
              transform: isActive ? "translateX(0) rotate(0deg)" : "translateX(-4px) rotate(-45deg)",
              transition: "opacity 0.25s ease, transform 0.3s ease",
              display: "inline-block",
            }}
          >
            →
          </span>
        </div>
      </div>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={label}
      className="w-6 h-6 flex items-center justify-center rounded-md text-foreground/40 hover:text-foreground hover:bg-foreground/[0.06] transition-all duration-150"
    >
      {children}
    </a>
  );
}