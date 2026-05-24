function Projects() {
  const projects = [
    {
      title: "Sawi",
      year: "2026",
      type: "Invoices Platform",
      image: "/img1.png",
    },
    {
      title: "RM Edelizia",
      year: "2025",
      type: "Workers Dashboard",
      image: "/img2.png",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mb-20">
        {/* <p className="font-thought uppercase text-lg"> */}
        <h1 className="font-thought mt-4 text-[12vw] uppercase leading-[0.9]">
          Selected Projects
        </h1>
        {/* </p> */}
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex cursor-pointer items-center justify-between border-t border-white/10 py-10"
          >
            {/* LEFT */}
            <div>
              <p className="mb-3 text-sm opacity-40">0{index + 1}</p>

              <h2 className="text-[9vw] font-tought uppercase leading-none tracking-[-0.08em] transition duration-500 group-hover:translate-x-4">
                {project.title}
              </h2>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <p className="text-sm uppercase opacity-60">{project.type}</p>

              <p className="mt-2 text-sm opacity-40">{project.year}</p>
            </div>

            {/* FLOATING IMAGE */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[300px] w-[240px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
