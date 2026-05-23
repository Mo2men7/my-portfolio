"use client";

import AnimateText from "../components/AnimateText";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AnimateText delay={0.6}>
        <h1 className="font-aalto text-[20rem] font-medium uppercase tracking-[-0.05rem] leading-none">
          Momen Helmy
        </h1>
      </AnimateText>
    </div>

    // <section className="flex flex-col justify-between h-screen p-8">
    //   <AnimateText>
    //     <span className="block uppercase text-[0.75rem] font-medium text-foreground">
    //       Design and Strategy for the Vision
    //     </span>
    //   </AnimateText>

    //   <div>
    //     <AnimateText>
    //       <h1 className="font-thought text-[3.5rem] font-medium tracking-[-0.05rem] leading-none indent-[25%]">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
    //         nesciunt quibusdam totam vero quaerat obcaecati id vitae expedita
    //         sit ea, ex aliquam at porro quam? Inventore at aut a magni?
    //       </h1>
    //     </AnimateText>
    //   </div>
    // </section>
  );
}
