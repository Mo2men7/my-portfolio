"use client";

import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav
      className="navbar-links fixed top-0 left-0 z-50 w-screen flex justify-between items-center"
      style={{ padding: "1.75em" }}
    >
      <div>
        <NavbarLink href="/" label="Momen." />
      </div>

      <div className="flex gap-[2em]">
        <div>
          <NavbarLink href="/projects" label="Projects" />
        </div>
        <div>
          <NavbarLink href="/info" label="Info" />
        </div>
        <div>
          <NavbarLink href="/mates" label="Mates" />
        </div>
        <div>
          <NavbarLink href="/contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
