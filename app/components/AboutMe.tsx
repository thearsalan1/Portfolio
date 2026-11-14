
"use client";

import {
  BsArrowDownRight,
  BsCodeSlash,
  BsGeoAlt,
  BsLayers,
} from "react-icons/bs";

const details = [
  {
    icon: <BsGeoAlt />,
    label: "Location",
    value: "India",
  },
  {
    icon: <BsCodeSlash />,
    label: "Specialization",
    value: "Full Stack Development",
  },
  {
    icon: <BsLayers />,
    label: "Education",
    value: "B.Tech",
  },
  {
    icon: <BsLayers />,
    label: "Currently Exploring",
    value: "AI-powered Applications",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative mx-auto flex min-h-screen w-[90%] items-center overflow-hidden py-12 font-sans text-white"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)",
        }}
      />

      <div className="relative grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0d19]/90 lg:grid-cols-[0.85fr_1.45fr]">

        {/* Left Panel */}
        <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden border-b border-white/[0.08] bg-gradient-to-br from-[#111426] to-[#0b0d19] px-7 py-9 sm:px-10 sm:py-12 lg:min-h-[650px] lg:border-b-0 lg:border-r lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-indigo-500/[0.08] blur-[90px]" />

          <div className="relative">
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-indigo-300">
                Get to know me
              </span>
            </div>

            <p className="mb-4 text-sm text-white/40">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
              Mohd
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arsalan.
              </span>
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-indigo-400 to-pink-400" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                Full Stack Engineer
              </span>
            </div>
          </div>

          <div className="relative mt-14">
            <p className="max-w-xs text-sm leading-7 text-white/45">
              Building scalable systems. Creating meaningful digital
              experiences. Always learning, always improving.
            </p>

            <div className="mt-10 flex items-end justify-between">
              <span className="text-7xl font-black leading-none tracking-tighter text-white/[0.045] sm:text-8xl">
                ME
              </span>

              <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-indigo-300">
                <BsArrowDownRight />
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="mb-7">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-400">
              A little about myself
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Turning ideas into
              <span className="text-indigo-300"> digital products.</span>
            </h2>
          </div>

          <div className="max-w-3xl space-y-4 text-sm leading-7 text-white/55">
            <p>
              I'm a Full Stack Engineer focused on building modern,
              scalable and reliable web applications. I primarily
              work with React, Next.js, Node.js, Express.js and
              TypeScript, developing solutions across both frontend
              and backend.
            </p>

            <p>
              My work involves building responsive interfaces,
              designing REST APIs, implementing authentication and
              working with databases such as PostgreSQL and MongoDB.
            </p>

            <p>
              I enjoy solving engineering problems, exploring system
              architecture and learning new technologies. I'm also
              interested in AI-powered applications and how they can
              improve real-world software.
            </p>
          </div>

          {/* Information Grid */}
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {details.map((item) => (
              <div
                key={item.label}
                className="group flex gap-3 border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-400/[0.04]"
              >
                <span className="mt-0.5 text-base text-indigo-400">
                  {item.icon}
                </span>

                <div className="min-w-0">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-white/35">
                    {item.label}
                  </p>

                  <p className="text-sm font-medium text-white/80">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resume Download */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="/resume.pdf"
              download="Mohd_Arsalan_Resume.pdf"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/30"
            >
              Download Resume
              <BsArrowDownRight />
            </a>

            <span className="text-xs text-white/35">
              Let's build something meaningful.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
