// app/page.tsx  (أو أي route تحبه)
// Fonts: أضف في layout.tsx
// import { DM_Mono, Fraunces } from 'next/font/google'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Momen — Frontend Developer",
  description:
    "Frontend Developer based in Cairo, building performant bilingual web experiences.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const STACK = [
  { name: "Next.js 14", type: "Framework" },
  { name: "TypeScript", type: "Language" },
  { name: "Tailwind CSS", type: "Styling" },
  { name: "shadcn/ui", type: "Components" },
  { name: "TanStack Query", type: "Data fetching" },
  { name: "Supabase", type: "Backend" },
  { name: "next-intl", type: "i18n" },
  { name: "Recharts", type: "Data viz" },
  { name: "NextAuth", type: "Auth" },
] as const;

const PROJECTS = [
  {
    num: "01",
    name: "Sawi — Multivendor Platform",
    desc: "Subdomain-based vendor routing, bilingual AR/EN support, full vendor dashboard with analytics and order management.",
    tags: ["Next.js", "Supabase", "RTL", "Middleware"],
    activeTags: ["Next.js", "Supabase", "RTL"],
    href: "#",
  },
  {
    num: "02",
    name: "Magic Upload — AI Invoice Parser",
    desc: "Multi-step invoice extraction powered by OCR + AI. Dual invoice types with Zod validation and FormData handling.",
    tags: ["TypeScript", "Zod", "AI/OCR", "Forms"],
    activeTags: ["TypeScript"],
    href: "#",
  },
  {
    num: "03",
    name: "Medical Scrubs E-commerce",
    desc: "Full e-commerce platform with bilingual support, cart via localStorage, COD and bank transfer flows.",
    tags: ["Next.js 14", "Prisma", "NextAuth", "i18n"],
    activeTags: ["Next.js 14", "i18n"],
    href: "#",
  },
] as const;

const MARQUEE_ITEMS = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "TanStack Query",
  "shadcn/ui",
];

const GIT_LOG = [
  { hash: "a3f91c2", msg: "feat: subdomain routing middleware" },
  { hash: "b7e4d01", msg: "fix: RTL sidebar CSS variable conflict" },
  { hash: "c12a884", msg: "feat: magic upload invoice extraction" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusPill() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white/40">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8F135] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C8F135]" />
      </span>
      Available for work
    </div>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden border-y border-white/[0.07] py-2.5">
      {/* marquee 18s linear infinite */}
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 text-[11px] uppercase tracking-[0.15em] text-white/40"
          >
            <span className="mr-12 text-[#C8F135]">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Terminal() {
  return (
    <div className="overflow-hidden rounded-md border border-white/[0.07] bg-[#141414]">
      {/* Bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="flex-1 text-center text-[11px] tracking-wide text-white/30">
          ~/momen — zsh
        </span>
      </div>

      {/* Body */}
      <div className="space-y-0.5 p-6 font-mono text-[13px] leading-loose">
        <div className="flex gap-3">
          <span className="text-[#C8F135]">❯</span>
          <span className="text-white/80">cat about.json</span>
        </div>
        <div className="pl-6 text-white/40">
          {"{ "}
          <span className="text-[#F1C835]">&quot;role&quot;</span>
          {": "}
          <span className="text-white/60">&quot;Frontend Developer&quot;</span>
          {","}
        </div>
        <div className="pl-6 text-white/40">
          &nbsp;&nbsp;<span className="text-[#F1C835]">&quot;focus&quot;</span>
          {": "}
          <span className="text-white/60">
            [&quot;Next.js&quot;, &quot;App Router&quot;, &quot;RTL/i18n&quot;]
          </span>
          {","}
        </div>
        <div className="pl-6 text-white/40">
          &nbsp;&nbsp;
          <span className="text-[#F1C835]">&quot;location&quot;</span>
          {": "}
          <span className="text-white/60">&quot;Cairo 🇪🇬&quot;</span>
          {","}
        </div>
        <div className="pl-6 text-white/40">
          &nbsp;&nbsp;
          <span className="text-[#F1C835]">&quot;status&quot;</span>
          {": "}
          <span className="text-white/60">
            &quot;building sawi.me multivendor platform&quot;
          </span>
          {" }"}
        </div>

        <div className="flex gap-3 pt-3">
          <span className="text-[#C8F135]">❯</span>
          <span className="text-white/80">git log --oneline -3</span>
        </div>
        {GIT_LOG.map((entry) => (
          <div key={entry.hash} className="pl-6 text-white/40">
            <span className="text-[#F1C835]">{entry.hash}</span> {entry.msg}
          </div>
        ))}

        <div className="flex gap-3 pt-3">
          <span className="text-[#C8F135]">❯</span>
          <span className="inline-block h-3.5 w-2 animate-[blink_1.1s_step-end_infinite] bg-[#C8F135]" />
        </div>
      </div>
    </div>
  );
}

function StackGrid() {
  const primary = ["Next.js 14", "TypeScript", "Tailwind CSS"];
  return (
    <div
      className="grid border border-white/[0.07] bg-white/[0.07]"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: "1px",
      }}
    >
      {STACK.map((item) => (
        <div
          key={item.name}
          className="group bg-[#0D0D0D] px-4 py-4 transition-colors hover:bg-[#141414]"
        >
          <p
            className={`text-[13px] transition-colors ${
              primary.includes(item.name)
                ? "text-[#C8F135]"
                : "text-white/70 group-hover:text-white/90"
            }`}
          >
            {item.name}
          </p>
          <p className="mt-0.5 text-[11px] text-white/30">{item.type}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({
  num,
  name,
  desc,
  tags,
  activeTags,
  href,
}: (typeof PROJECTS)[number]) {
  return (
    <a
      href={href}
      className="group flex items-start justify-between gap-4 border border-white/[0.07] p-6 transition-all hover:border-[#C8F135]/30 hover:bg-[#C8F135]/[0.02]"
    >
      <div>
        <p className="mb-1.5 text-[11px] tracking-wide text-white/30">{num}</p>
        <h3 className="mb-2 font-serif text-lg font-light tracking-tight text-white/90">
          {name}
        </h3>
        <p className="max-w-md text-[13px] leading-relaxed text-white/40">
          {desc}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-sm border px-2 py-0.5 text-[10px] uppercase tracking-wide transition-colors ${
                activeTags.includes(tag as never)
                  ? "border-[#C8F135]/40 bg-[#C8F135]/[0.06] text-[#C8F135]"
                  : "border-white/[0.07] text-white/30"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className="mt-0.5 shrink-0 text-lg text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C8F135]">
        ↗
      </span>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] font-mono text-[#E8E8E2]">
      {/* ── Nav ── */}
      <div className="mx-auto max-w-4xl px-6">
        <nav className="flex items-center justify-between border-b border-white/[0.07] py-5">
          <span className="font-serif text-lg italic">
            <span className="text-[#C8F135]">M</span>.dev
          </span>
          <ul className="hidden items-center gap-8 sm:flex">
            {["Work", "Stack", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[0.12em] text-white/40 transition-colors hover:text-[#C8F135]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <StatusPill />
        </nav>
      </div>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Hero ── */}
      <div className="px-6! mx-auto max-w-4xl space-y-10!">
        <section className="pb-14 pt-20">
          <p className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.15em] text-white/40">
            Frontend Developer — Cairo, EG
            <span className="h-px w-14 bg-white/[0.07]" />
          </p>

          <h1 className="mb-6 font-serif text-[clamp(3.5rem,8vw,6rem)] font-bold leading-none tracking-tight">
            Momen
            <br />
            <span className="[-webkit-text-stroke:1px_rgba(232,232,226,0.25)] text-transparent">
              Builds{" "}
              <em className="italic text-[#C8F135] [-webkit-text-stroke:0px]">
                interfaces
              </em>
            </span>
            <br />
            <span className="[-webkit-text-stroke:1px_rgba(232,232,226,0.25)] text-transparent">
              that matter
            </span>
          </h1>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-white/40">
            Crafting performant, bilingual web experiences with{" "}
            <code className="rounded bg-[#C8F135]/10 px-1 py-0.5 text-[13px] text-[#C8F135]">
              Next.js
            </code>{" "}
            &amp;{" "}
            <code className="rounded bg-[#C8F135]/10 px-1 py-0.5 text-[13px] text-[#C8F135]">
              TypeScript
            </code>
            . Focused on multivendor platforms, admin dashboards, and everything
            in between.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-sm bg-[#C8F135] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#0D0D0D] transition-all hover:-translate-y-px hover:bg-[#d4f545]"
            >
              View my work →
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] text-white/40 transition-colors hover:text-white/80"
            >
              Read about me ↗
            </a>
          </div>
        </section>

        {/* ── Terminal ── */}
        <section className="pb-12">
          <Terminal />
        </section>

        {/* ── Stack ── */}
        <section id="stack" className="pb-12">
          <p className="mb-5 text-[11px] uppercase tracking-[0.15em] text-white/40 before:mr-2 before:text-[#C8F135] before:content-['//']">
            Tech stack
          </p>
          <StackGrid />
        </section>

        {/* ── Projects ── */}
        <section id="work" className="pb-16">
          <p className="mb-5 text-[11px] uppercase tracking-[0.15em] text-white/40 before:mr-2 before:text-[#C8F135] before:content-['//']">
            Selected work
          </p>
          <div className="flex flex-col gap-px">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="flex items-center justify-between border-t border-white/[0.07] py-8">
          <p className="text-[11px] tracking-wide text-white/30">
            © 2026 — Momen
          </p>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-white/30 transition-colors hover:text-[#C8F135]"
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}

{
  /*
  
    // tailwind.config.ts
theme: {
  extend: {
    animation: {
      marquee: 'marquee 18s linear infinite',
      blink: 'blink 1.1s step-end infinite',
    },
    keyframes: {
      marquee: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-50%)' },
      },
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' },
      },
    },
    fontFamily: {
      mono: ['DM Mono', 'monospace'],
      serif: ['Fraunces', 'serif'],
    },
  },
}
    
    */
}
