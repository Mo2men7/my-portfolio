export default function NotFound() {
  return (
    <section className="relative flex h-screen w-screen overflow-hidden">
      {/* BIG BACKGROUND TEXT */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="translate-y-6 text-[28vw] font-black uppercase leading-none -tracking-widest text-white/3">
          Oops
        </h1>
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-6 md:p-10">
        <div />

        <div className="max-w-[900px]">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-50">
            Unknown Route
          </p>

          <h1 className="text-[11vw] uppercase leading-[0.9] tracking-[-0.08em] md:text-[6vw]">
            I didn’t develop
            <br />
            a page for
            <br />
            this route.
          </h1>

          <p className="mt-8 max-w-[520px] text-lg leading-relaxed opacity-70">
            The page you’re looking for doesn’t exist yet — maybe I forgot to
            build it, maybe it never existed, or maybe you just found a secret
            corner of the internet.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <a
              href="/"
              className="rounded-full border border-white px-6 py-3 text-sm uppercase transition duration-300 hover:bg-white hover:text-black"
            >
              Back Home
            </a>

            <a
              href="/projects"
              className="text-sm uppercase opacity-60 transition hover:opacity-100"
            >
              Explore Projects
            </a>
          </div>
        </div>

        <div className="flex justify-between text-sm uppercase opacity-30">
          <p>404 Error</p>
          <p>Momen Helmy</p>
        </div>
      </div>
    </section>
  );
}
