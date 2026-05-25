"use client";

import { useState } from "react";
import NavbarLink from "./NavbarLink";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/info", label: "Info" },
  { href: "/mates", label: "Mates" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar-links fixed top-0 left-0 z-50 w-screen flex justify-between items-center"
        style={{ padding: "1.75em" }}
      >
        <NavbarLink href="/" label="Momen." />

        <div className="hidden md:flex gap-[2em]">
          {links.map((link) => (
            <NavbarLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-end gap-[5px] w-6 h-6 bg-transparent border-none cursor-pointer p-0"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className="block h-px bg-foreground transition-all duration-300 origin-right"
            style={{
              width: open ? "100%" : "100%",
              transform: open ? "rotate(-45deg) translateY(1px)" : "none",
            }}
          />
          <span
            className="block h-px bg-foreground transition-all duration-300"
            style={{
              width: "70%",
              opacity: open ? 0 : 1,
              transform: open ? "translateX(8px)" : "none",
            }}
          />
          <span
            className="block h-px bg-foreground transition-all duration-300 origin-right"
            style={{
              width: open ? "100%" : "50%",
              transform: open ? "rotate(45deg) translateY(-1px)" : "none",
            }}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 md:hidden bg-background ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-full"}`}
      >
        {links.map((link, i) => (
          <div
            key={link.href}
            onClick={() => setOpen(false)}
            className={`transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
            style={{
              transitionDelay: open ? `${i * 0.07 + 0.15}s` : "0s",
            }}
          >
            <span>
              <NavbarLink href={link.href} label={link.label} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
