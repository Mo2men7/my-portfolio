const mates = [
  {
    name: "Ahmed Hesham",
    role: "UI/UX Designer",
    stack: "Figma · Design Systems",
    project: "Sawi",
    github: "#",
  },
  {
    name: "Youssef Khaled",
    role: "Backend Developer",
    stack: "Laravel · APIs",
    project: "RM Edelizia",
    github: "#",
  },
];

export default function Mates() {
  return (
    <section className="min-h-screen px-6 py-20 text-white md:px-10">
      {/* HEADER */}
      <div className="mb-24">
        <p className="text-sm uppercase tracking-[0.3em] opacity-50">
          People I’ve built with
        </p>

        <h1 className="mt-4 text-[12vw] uppercase leading-[0.9] tracking-[-0.08em] md:text-[7vw]">
          Mates
        </h1>

        <p className="mt-6 max-w-[600px] text-lg leading-relaxed opacity-70">
          Developers, designers, and engineers I’ve collaborated with across
          different projects and teams.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-10 md:grid-cols-2">
        {mates.map((mate, index) => (
          <div
            key={index}
            className="group border border-white/10 p-8 transition hover:border-white/30"
          >
            {/* TOP */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm uppercase opacity-40">0{index + 1}</p>

              <a
                href={mate.github}
                className="text-sm uppercase opacity-40 transition hover:opacity-100"
              >
                GitHub
              </a>
            </div>

            {/* NAME */}
            <h2 className="text-[5vw] uppercase leading-none tracking-[-0.08em] md:text-[2.5vw]">
              {mate.name}
            </h2>

            {/* ROLE */}
            <p className="mt-4 text-sm uppercase tracking-[0.2em] opacity-60">
              {mate.role}
            </p>

            {/* STACK */}
            <p className="mt-2 text-sm opacity-40">{mate.stack}</p>

            {/* PROJECT */}
            {/* <p className="mt-6 text-lg opacity-70">
              Worked together on{" "}
              <span className="uppercase">{mate.project}</span>
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
