"use client";

import { useTransitionRouter } from "next-view-transitions";

function Navbar() {
  const router = useTransitionRouter();

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

  return (
    // nav
    <nav
      className="fixed top-0 left-0 z-50 w-screen flex justify-between items-center"
      style={{ padding: "1.75em" }}
    >
      {/* logo */}
      <div className="">
        {/* link */}
        <div className="">
          <a
            className="uppercase text-foreground text-[12px] font-bold p-[0.5em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/"
          >
            Momen.
          </a>
        </div>
      </div>

      {/* links */}
      <div className="flex gap-[2em]">
        {/* <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/archive", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/archive"
          >
            Archive
          </a>
        </div> */}

        {/* link */}
        <div className="">
          <a
            className="uppercase text-foreground text-[12px] font-bold p-[0.5em]"
            onClick={(e) => {
              e.preventDefault();
              router.push("/info", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/info"
          >
            Info
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
