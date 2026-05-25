"use client";

import AnimateText from "@/components/AnimateText";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  year: string;
  type: string;
  image: string;
  link?: string;
  country: string;
}

const projects: Project[] = [
  {
    title: "Sawi",
    year: "2026",
    type: "Invoices Platform",
    image: "/projectsLogos/sawi.svg",
    link: "https://sawi.me",
    country: "Saudi Arabia",
  },
  {
    title: "Conch",
    year: "2026",
    type: "Motorcycles and parts e-commerce",
    image: "/projectsLogos/conch.svg",
    country: "Qatar",
  },
  {
    title: "Infinity rent a car",
    year: "2025",
    type: "Car rental system",
    image: "/projectsLogos/infinity-car-rental.png",
    link: "https://infinityrentacar.qa",
    country: "Qatar",
  },
  {
    title: "RM Edilizia",
    year: "2025",
    type: "Workers Dashboard",
    image: "/projectsLogos/rm-edilizia.png",
    link: "https://rmedilizia.com",
    country: "Italy",
  },
  {
    title: "Qaws",
    year: "2025",
    type: "Interviewing and hiring platform",
    image: "/projectsLogos/qaws.png",
    link: "https://qaws.ai",
    country: "Saudi Arabia",
  },
  {
    title: "Infinity car services",
    year: "2025",
    type: "Car services website",
    image: "/projectsLogos/infinity-car-services.png",
    link: "https://infinitycarservices.qa",
    country: "Qatar",
  },
];

function Projects() {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".project-row");

      // Start each row from bottom and invisible
      gsap.set(rows, { opacity: 0, y: 50 });

      rows.forEach((row) => {
        gsap.to(row, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row, // The element that triggers the animation
            start: "top 85%", // When the top of the row reaches 85% of the screen
          },
        });
      });
    },
    { scope: listRef },
  );

  return (
    <section className="px-6 py-20">
      <div className="mb-20">
        <AnimateText>
          <h1 className="font-thought mt-4 text-[12vw] uppercase leading-[0.9]">
            Selected Projects
          </h1>
        </AnimateText>
        <AnimateText>
          <p className="text-sm opacity-40">
            My selected projects, I hope you like them
          </p>
        </AnimateText>
      </div>

      <div ref={listRef} className="flex flex-col">
        {projects.map((project, index) => (
          <Link
            href={project.link ?? "#"}
            target="_blank"
            key={project.title}
            className="project-row group relative flex cursor-pointer items-center justify-between border-t border-white/10 py-10"
          >
            {/* LEFT */}
            <div>
              <p className="mb-3 text-sm opacity-40">
                {index < 9 ? "0" + (index + 1) : index + 1}
              </p>
              <h2 className="text-[9vw] font-tought uppercase leading-none tracking-[-0.08em] transition duration-500 group-hover:translate-x-4">
                {project.title}
              </h2>
            </div>

            {/* RIGHT */}
            <div className="text-end">
              <p className="text-sm uppercase opacity-60">{project.type}</p>
              <p className="text-sm uppercase opacity-40">{project.country}</p>
              <p className="text-sm opacity-40">{project.year}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ms-auto opacity-40 transition-all duration-300 group-hover:-rotate-45 group-hover:opacity-100"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            {/* FLOATING IMAGE */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-[300px] w-[240px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 md:block">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
