"use client";

import AnimateText from "../components/AnimateText";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AnimateText delay={0.6}>
        <h1 className="text-[10vw] font-aalto uppercase tracking-[-0.05rem] leading-none">
          Momen Helmy
        </h1>
      </AnimateText>
    </div>
  );
}
