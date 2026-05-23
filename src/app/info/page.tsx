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

      text.lines.forEach((line: any) => {
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

      <div className="col">
        {/* <AnimateText> */}
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur
          adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
          metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
          nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
        </p>
        {/* </AnimateText> */}
      </div>
    </div>
  );
}

export default Info;
