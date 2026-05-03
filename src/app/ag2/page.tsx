"use client";

// ─── Install ──────────────────────────────────────────────────────────────────
// npm install gsap @gsap/react
//
// fonts → add to layout.tsx:
// import { Bebas_Neue, DM_Sans } from "next/font/google"
// const bebas  = Bebas_Neue({ subsets:["latin"], weight:"400", variable:"--font-bebas" })
// const dmSans = DM_Sans({ subsets:["latin"], weight:["300","400","500"], variable:"--font-dm" })
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "01",
    name: "Sawi",
    sub: "Multivendor Platform",
    desc: "Subdomain-based vendor routing, bilingual AR/EN, AI invoice extraction.",
    tags: ["Next.js", "Supabase", "RTL"],
    color: "#C8F135",
    bg: "#0D1A00",
  },
  {
    id: "02",
    name: "Magic Upload",
    sub: "AI Invoice Parser",
    desc: "Multi-step OCR extraction, Zod validation, dual invoice type handling.",
    tags: ["TypeScript", "Zod", "OCR"],
    color: "#F1C835",
    bg: "#1A1400",
  },
  {
    id: "03",
    name: "Scrubs",
    sub: "E-commerce Platform",
    desc: "Full bilingual storefront, cart, COD & bank transfer, Next.js 14.",
    tags: ["Prisma", "NextAuth", "i18n"],
    color: "#35C8F1",
    bg: "#001A1A",
  },
];

const STACK = [
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "TanStack Query",
  "Supabase",
  "next-intl",
  "Recharts",
  "NextAuth",
  "Zod",
  "Axios",
  "RTL / Arabic",
];

// ─── Animated counter ─────────────────────────────────────────────────────────

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.from(
      { val: 0 },
      {
        val: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
        onUpdate: function () {
          el.textContent = Math.round(this.targets()[0].val) + suffix;
        },
      },
    );
  }, []);

  return <span ref={ref}>0{suffix}</span>;
}

// ─── Magnetic button ─────────────────────────────────────────────────────────

function MagneticBtn({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.5)",
    });
  };

  return (
    <button
      ref={btnRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

function Marquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalW = track.scrollWidth / 2;
    gsap.to(track, {
      x: -totalW,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3">
      <div
        ref={trackRef}
        className="flex gap-0 whitespace-nowrap will-change-transform"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-8 text-[11px] uppercase tracking-[0.18em] text-white/30 border-r border-white/[0.06]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-line", {
        yPercent: 110,
        stagger: 0.12,
        duration: 1.1,
      })
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
        .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.2");

      // Subtle parallax on scroll
      gsap.to(".hero-bg-text", {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden"
    >
      {/* Big background text */}
      <div
        className="hero-bg-text absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="text-[22vw] font-['var(--font-bebas)'] font-normal tracking-tight text-white/[0.025] leading-none whitespace-nowrap">
          FRONTEND
        </span>
      </div>

      {/* Eyebrow */}
      <div className="overflow-hidden mb-6">
        <p className="hero-line text-[11px] uppercase tracking-[0.2em] text-white/40 font-['var(--font-dm)']">
          Cairo, Egypt — Frontend Developer
        </p>
      </div>

      {/* Name */}
      <div className="overflow-hidden">
        <h1
          className="hero-line font-['var(--font-bebas)'] text-[clamp(5rem,14vw,13rem)] leading-none tracking-tight text-white"
          style={{ lineHeight: 0.9 }}
        >
          MOMEN
        </h1>
      </div>
      <div className="overflow-hidden">
        <h1
          className="hero-line font-['var(--font-bebas)'] text-[clamp(5rem,14vw,13rem)] leading-none tracking-tight"
          style={{
            lineHeight: 0.9,
            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            color: "transparent",
          }}
        >
          ASHRAF
        </h1>
      </div>

      {/* Sub */}
      <p className="hero-sub mt-8 max-w-md text-sm leading-relaxed text-white/40 font-['var(--font-dm)'] font-light">
        Building performant, bilingual web experiences with{" "}
        <span className="text-[#C8F135]">Next.js</span> &amp;{" "}
        <span className="text-[#C8F135]">TypeScript</span>. Multivendor
        platforms, admin dashboards, and complex UI systems.
      </p>

      {/* CTA */}
      <div className="hero-cta mt-10 flex items-center gap-6">
        <MagneticBtn className="inline-flex items-center gap-3 bg-[#C8F135] text-[#0A0A0A] font-['var(--font-dm)'] text-[12px] font-medium uppercase tracking-[0.1em] px-7 py-3.5 rounded-full transition-transform">
          View work →
        </MagneticBtn>
        <a
          href="#contact"
          className="text-[12px] uppercase tracking-[0.1em] text-white/35 font-['var(--font-dm)'] hover:text-white/70 transition-colors"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll absolute bottom-10 left-8 md:left-16 flex items-center gap-3">
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-4 bg-[#C8F135] animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-['var(--font-dm)']">
          Scroll
        </span>
      </div>
    </section>
  );
}

// ─── Projects section ─────────────────────────────────────────────────────────

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Section title slide-in
      gsap.from(".projects-title", {
        xPercent: -8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 85%",
        },
      });

      // Each card fan-in on scroll
      gsap.utils.toArray<HTMLElement>(".proj-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        });

        // Hover tilt
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
          gsap.to(card, {
            rotateX: y,
            rotateY: x,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "elastic.out(1,0.6)",
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="work" className="px-8 md:px-16 py-28">
      <div className="flex items-end justify-between mb-16">
        <h2 className="projects-title font-['var(--font-bebas)'] text-[clamp(3rem,7vw,6rem)] leading-none text-white tracking-tight">
          SELECTED
          <br />
          WORK
        </h2>
        <span className="text-[11px] uppercase tracking-[0.15em] text-white/25 font-['var(--font-dm)']">
          03 projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className="proj-card relative rounded-2xl p-7 cursor-pointer will-change-transform"
            style={{ background: p.bg, border: `1px solid ${p.color}18` }}
          >
            {/* Number watermark */}
            <span
              className="absolute top-4 right-6 font-['var(--font-bebas)'] text-6xl leading-none opacity-[0.07]"
              style={{ color: p.color }}
            >
              {p.id}
            </span>

            <div
              className="inline-block text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-5 font-['var(--font-dm)']"
              style={{ background: `${p.color}18`, color: p.color }}
            >
              {p.sub}
            </div>

            <h3
              className="font-['var(--font-bebas)'] text-5xl leading-none tracking-tight mb-3"
              style={{ color: p.color }}
            >
              {p.name}
            </h3>

            <p className="text-sm leading-relaxed text-white/40 font-['var(--font-dm)'] font-light mb-6">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-[0.08em] px-2.5 py-1 rounded font-['var(--font-dm)']"
                  style={{
                    border: `1px solid ${p.color}30`,
                    color: `${p.color}90`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div
              className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] font-['var(--font-dm)'] transition-all"
              style={{ color: `${p.color}60` }}
            >
              View project
              <span className="inline-block transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Stats section ────────────────────────────────────────────────────────────

function Stats() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="px-8 md:px-16 py-20 border-y border-white/[0.06]"
    >
      <div className="grid grid-cols-3 gap-8 text-center">
        {[
          { num: 3, suffix: "+", label: "Years building" },
          { num: 10, suffix: "+", label: "Projects shipped" },
          { num: 2, suffix: "", label: "Languages (AR/EN)" },
        ].map((s, i) => (
          <div key={i} className="stat-item">
            <div className="font-['var(--font-bebas)'] text-[clamp(3.5rem,8vw,7rem)] leading-none text-[#C8F135] tracking-tight">
              <Counter to={s.num} suffix={s.suffix} />
            </div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-['var(--font-dm)'] mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Stack section ────────────────────────────────────────────────────────────

function Stack() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stack-title", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stack-title", start: "top 85%" },
      });
      gsap.from(".stack-pill", {
        opacity: 0,
        scale: 0.85,
        stagger: { amount: 0.6, from: "random" },
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="px-8 md:px-16 py-28">
      <p className="stack-title text-[11px] uppercase tracking-[0.2em] text-white/30 font-['var(--font-dm)'] mb-12 before:content-['//'] before:text-[#C8F135] before:mr-3">
        Tech stack
      </p>
      <div className="flex flex-wrap gap-3">
        {STACK.map((item) => (
          <span
            key={item}
            className="stack-pill text-[12px] tracking-wide px-5 py-2.5 rounded-full border border-white/[0.08] text-white/50 font-['var(--font-dm)'] font-light hover:border-[#C8F135]/40 hover:text-[#C8F135] transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Contact section ──────────────────────────────────────────────────────────

function Contact() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      tl.from(".contact-line", {
        yPercent: 110,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      })
        .from(".contact-email", { opacity: 0, y: 20, duration: 0.7 }, "-=0.3")
        .from(
          ".contact-socials",
          { opacity: 0, y: 14, duration: 0.6 },
          "-=0.3",
        );
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      id="contact"
      className="px-8 md:px-16 py-32 border-t border-white/[0.06]"
    >
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-['var(--font-dm)'] mb-10 before:content-['//'] before:text-[#C8F135] before:mr-3">
        Get in touch
      </p>
      <div className="overflow-hidden">
        <div className="contact-line font-['var(--font-bebas)'] text-[clamp(3.5rem,10vw,9rem)] leading-none tracking-tight text-white">
          GOT A PROJECT
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="contact-line font-['var(--font-bebas)'] text-[clamp(3.5rem,10vw,9rem)] leading-none tracking-tight"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            color: "transparent",
          }}
        >
          IN MIND?
        </div>
      </div>

      <div className="contact-email mt-12">
        <MagneticBtn className="group inline-flex items-center gap-4 bg-[#C8F135] text-[#0A0A0A] font-['var(--font-dm)'] text-sm font-medium uppercase tracking-[0.12em] px-10 py-5 rounded-full hover:bg-[#d4f545] transition-colors">
          hello@momen.dev
          <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </MagneticBtn>
      </div>

      <div className="contact-socials mt-16 flex items-center gap-10">
        {["GitHub", "LinkedIn", "Dribbble"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-[11px] uppercase tracking-[0.15em] text-white/25 font-['var(--font-dm)'] hover:text-white/70 transition-colors"
          >
            {s}
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="px-8 md:px-16 py-8 border-t border-white/[0.06] flex items-center justify-between">
      <span className="font-['var(--font-bebas)'] text-lg text-white/20 tracking-wide">
        MOMEN.DEV
      </span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-['var(--font-dm)']">
        © 2026
      </span>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioGSAP() {
  // Custom cursor
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.1 });
    };

    const onEnterLink = () => gsap.to(cursor, { scale: 2.2, duration: 0.3 });
    const onLeaveLink = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C8F135]/60 pointer-events-none z-50 mix-blend-difference will-change-transform hidden md:block"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C8F135] pointer-events-none z-50 will-change-transform hidden md:block"
      />

      <main className="min-h-screen bg-[#0A0A0A] cursor-none">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 py-5 mix-blend-difference">
          <span className="font-['var(--font-bebas)'] text-xl text-white tracking-wider">
            M.DEV
          </span>
          <div className="flex items-center gap-8">
            {["Work", "Stack", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.12em] text-white/50 font-['var(--font-dm)'] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <Hero />
        <Marquee items={[...STACK, ...STACK]} />
        <Projects />
        <Stats />
        <Stack />
        <Contact />
        <Footer />
      </main>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
        html {
          scroll-behavior: smooth;
        }
        * {
          cursor: none;
        }
      `}</style>
    </>
  );
}
