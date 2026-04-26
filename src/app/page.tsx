"use client";

import { ReactLenis } from "lenis/react";
import AnimateText from "./components/AnimateText";

export default function Home() {
  return (
    <ReactLenis root>
      <section className="flex flex-col justify-between h-screen p-8">
        <AnimateText>
          <span className="block uppercase text-[0.75rem] font-medium text-black">
            Design and Strategy for the Vision
          </span>
        </AnimateText>

        <div>
          <AnimateText>
            <h1 className="text-[3.5rem] font-medium tracking-[-0.05rem] leading-none indent-[25%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nesciunt quibusdam totam vero quaerat obcaecati id vitae expedita
              sit ea, ex aliquam at porro quam? Inventore at aut a magni?
            </h1>
          </AnimateText>
        </div>
      </section>
    </ReactLenis>
  );
}
