import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaTerminal,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiPostgresql } from "react-icons/si";

const Hero = () => {
  const stats = [
    { number: "04+", label: "Projects Built" },
     { number: "Full Stack", label: "Developer" },
    { number: "1+ yr", label: "Experience" },
  ];

  const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <FaDocker /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#080812] text-white lg:h-[100dvh] lg:min-h-[650px] lg:max-h-[100dvh] lg:overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-indigo-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Main container */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-5 py-24 sm:px-8 lg:h-full lg:min-h-0 lg:px-14 lg:py-10 xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Availability */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.06] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="font-mono text-[11px] tracking-wider text-green-300">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            <p className="mb-3 font-mono text-sm tracking-[0.2em] text-indigo-400">
              HELLO, I'M
            </p>

            {/* Name */}
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-[82px]">
              Mohd
              <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arsalan.
              </span>
            </h1>

            {/* Role */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white/60 sm:text-base lg:justify-start">
              <span className="text-white">Full Stack Engineer</span>
              <span className="text-indigo-400">/</span>
              <span>Backend Developer</span>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[540px] text-sm leading-7 text-white/50 sm:text-base">
              I build scalable web applications, robust backend systems, and
              AI-powered products. My focus is on clean architecture, API
              development, microservices, and reliable software that solves
              real-world problems.
            </p>

            {/* Technologies */}
            <div className="mt-6 flex max-w-[540px] flex-wrap justify-center gap-2 lg:justify-start">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60 transition hover:border-indigo-400/40 hover:text-indigo-300 sm:text-sm"
                >
                  <span className="text-indigo-400">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Explore My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="/resume.pdf"
                download="Mohd_Arsalan_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/10"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid w-full max-w-[540px] grid-cols-3 gap-3 border-t border-white/10 pt-6 lg:mt-11">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.number}
                  </h3>
                  <p className="mt-1.5 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: DEVELOPER CONSOLE */}
          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-indigo-500/15 blur-[90px]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d18] shadow-2xl shadow-black/40">
              {/* Window bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <div className="flex items-center gap-2 text-xs text-white/40">
                  <FaCode className="text-indigo-400" />
                  developer.ts
                </div>

                <span className="text-xs text-white/20">TS</span>
              </div>

              {/* File header */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
                <SiTypescript className="text-blue-400" />
                <span className="text-xs text-white/60">
                  src / developer.ts
                </span>
                <span className="ml-auto text-[10px] text-white/25">UTF-8</span>
              </div>

              {/* Code editor */}
              <div className="overflow-x-auto px-5 py-7 sm:px-8 sm:py-9">
                <div className="min-w-[300px] space-y-3 font-mono text-xs leading-6 sm:text-sm">
                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">01</span>
                    <span>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">developer</span>{" "}
                      <span className="text-white/50">= {"{"}</span>
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">02</span>
                    <span className="pl-5">
                      <span className="text-indigo-300">name</span>
                      <span className="text-white/50">: </span>
                      <span className="text-green-300">"Mohd Arsalan"</span>
                      <span className="text-white/50">,</span>
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">03</span>
                    <span className="pl-5">
                      <span className="text-indigo-300">role</span>
                      <span className="text-white/50">: </span>
                      <span className="text-green-300">
                        "Full Stack Engineer"
                      </span>
                      <span className="text-white/50">,</span>
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">04</span>
                    <span className="pl-5">
                      <span className="text-indigo-300">focus</span>
                      <span className="text-white/50">: </span>
                      <span className="text-green-300">"Backend Systems"</span>
                      <span className="text-white/50">,</span>
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">05</span>
                    <span className="pl-5">
                      <span className="text-indigo-300">stack</span>
                      <span className="text-white/50">: [</span>
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">06</span>
                    <span className="pl-10 text-green-300">
                      "React", "Node.js",
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">07</span>
                    <span className="pl-10 text-green-300">
                      "TypeScript", "PostgreSQL"
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">08</span>
                    <span className="pl-5 text-white/50">],</span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">09</span>
                    <span className="pl-5">
                      <span className="text-indigo-300">learning</span>
                      <span className="text-white/50">: </span>
                      <span className="text-green-300">"System Design"</span>
                    </span>
                  </div>

                  <div className="flex gap-6">
                    <span className="w-4 text-right text-white/20">10</span>
                    <span className="text-white/50">{"};"}</span>
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.025] px-5 py-4">
                <div className="flex items-center gap-2 text-xs text-white/45">
                  <FaTerminal className="text-indigo-400" />
                  <span>Ready to build</span>
                </div>

                <div className="flex items-center gap-4 text-[10px] text-white/30">
                  <span>TypeScript</span>
                  <span>UTF-8</span>
                  <span>Ln 10, Col 2</span>
                </div>
              </div>
            </div>

            {/* Architecture strip */}
            <div className="relative mt-5 grid grid-cols-3 gap-3">
              {[
                {
                  name: "Frontend",
                  detail: "React & Next.js",
                  icon: <FaReact />,
                },
                {
                  name: "Backend",
                  detail: "Node & APIs",
                  icon: <FaServer />,
                },
                {
                  name: "Database",
                  detail: "SQL & NoSQL",
                  icon: <FaDatabase />,
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-[#11111e] p-3 sm:p-4"
                >
                  <div className="mb-2 text-lg text-indigo-400">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-white/80">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Small focus label */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/40 lg:justify-end">
              <FaDocker className="text-indigo-400" />
              Currently exploring backend architecture & system design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
