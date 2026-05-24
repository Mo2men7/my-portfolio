import AnimateText from "../components/AnimateText";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <AnimateText delay={1}>
        <p className="text-center font-medium text-lg tracking-[0.3em]">
          Hello — I'm
        </p>
      </AnimateText>

      <AnimateText delay={1}>
        <h1 className="font-thought text-[15vw] uppercase tracking-[-0.05rem] leading-none">
          Momen Helmy
        </h1>
      </AnimateText>

      <AnimateText delay={1}>
        <p className="max-w-[700px] text-center text-lg font-medium">
          A front-end developer crafting <span className="uppercase">bold</span>
          , interactive, and performance-focused digital experiences.
        </p>
      </AnimateText>
    </div>
  );
}
