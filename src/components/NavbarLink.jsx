"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

function slideInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
}

export default function NavbarLink({ href, label }) {
  const router = useTransitionRouter();

  return (
    <Link
      href={`/${href}`}
      className="uppercase text-foreground text-[12px] font-bold p-[0.5em]"
      style={{ fontFamily: "'DM Mono', monospace" }}
      onClick={(e) => {
        e.preventDefault();
        router.push(`/${href}`, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      {/*  style={{ animationDelay: `${index * 0.03}s` }} */}
      {label.split("").map((letter, index) => (
        <span
          id={index}
          key={index}
          style={{ animationDelay: `${index * 0.03}s` }}
        >
          {letter}
        </span>
      ))}
    </Link>
  );
}
