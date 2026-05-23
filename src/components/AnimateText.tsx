"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";

interface AnimateTextProps {
  children: any;
  animateOnScroll?: boolean;
  delay?: number;
}

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AnimateText({
  children,
  animateOnScroll = true,
  delay = 0,
}: AnimateTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<any>([]);
  const splitRef = useRef<any>([]);
  const linesRef = useRef<any>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      linesRef.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("animate-text-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const el = element as HTMLElement;
        elementRef.current.push(el);

        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(el);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            const firstLine = split.lines[0] as HTMLElement;
            firstLine.style.paddingLeft = textIndent;
          }
          el.style.textIndent = "0px";
        }

        linesRef.current.push(...split.lines);
      });

      gsap.set(linesRef.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(linesRef.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split: any) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] },
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} animate-text-wrapper="true">
      {children}
    </div>
  );
}
