"use client";

import { ReactLenis } from "lenis/react";
import AnimateText from "./components/AnimateText";

export default function Home() {
  return (
    <ReactLenis root>
      {/* HERO2 */}
      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src="/land2.png"
            alt="Hero"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full px-8 py-10">
          <div className="flex justify-between text-xs uppercase tracking-widest text-white/60">
            <span>Momen Helmy</span>
            <span>Front-end Developer</span>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <AnimateText>
                <h1 className="max-w-5xl text-[50px] md:text-[100px] leading-[0.9] tracking-[-0.04em] font-semibold">
                  Crafting
                  <br />
                  Modern Digital
                  <br />
                  Experiences
                </h1>
              </AnimateText>

              <AnimateText delay={0.8}>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto">
                  I design & build high-performance web interfaces with smooth
                  interactions and clean user experience.
                </p>
              </AnimateText>
            </div>
          </div>

          <div className="flex justify-between items-end text-sm text-white/60">
            <span>Scroll down</span>

            <div className="flex flex-col items-end">
              <span>Based in Egypt</span>
              <span>Available for freelance</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-white/30 overflow-hidden">
            <div className="w-full h-1/2 bg-white animate-[scroll_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

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
