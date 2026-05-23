"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import AnimateText from "@/components/AnimateText";

gsap.registerPlugin(useGSAP);

function Info() {
  const container = useRef(null);

  useGSAP(
    () => {
      const text = new SplitType(".info p", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      text?.lines?.forEach((line: any) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set(".info p .line span", {
        y: 400,
        display: "block",
      });

      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => {
        if (text) text.revert();
      };
    },
    { scope: container },
  );

  return (
    <div className="info" ref={container}>
      <div className="col">
        <img src="/img1.png" alt="" />
      </div>

      <div className="col flex-col gap-[2em] h-screen">
        {/* <AnimateText> */}
        <p className="text-lg">
          Front-End Developer specializing in React, Next.js, and modern web
          experiences. Passionate about building bold, interactive, and
          performance-focused interfaces with clean architecture, smooth
          animations, and attention to detail. I enjoy turning complex ideas
          into scalable digital products that feel intuitive, modern, and
          visually impactful.
        </p>
        {/* </AnimateText> */}

        <p className="text-lg">
          Beyond code and screens, I enjoy chess, running, gym sessions, and
          meaningful conversations. I believe the best connections don’t always
          start with work — sometimes they start with shared interests, good
          energy, and real friendship.
        </p>
      </div>
    </div>
  );
}

export default Info;
