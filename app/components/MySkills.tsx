"use client";

import {
  BsCodeSlash,
  BsWindow,
  BsServer,
  BsDatabase,
  BsLightningCharge,
  BsRobot,
  BsCloud,
  BsActivity,
  BsArrowUpRight,
} from "react-icons/bs";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    icon: <BsCodeSlash />,
    skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Frontend",
    icon: <BsWindow />,
    skills: ["React.js", "Next.js", "Zustand", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Backend",
    icon: <BsServer />,
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "REST API Design",
      "JWT",
      "OAuth",
      "Zod",
      "MVC Architecture",
    ],
  },
  {
    number: "04",
    title: "Database & ORM",
    icon: <BsDatabase />,
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    number: "05",
    title: "Caching & Real-time",
    icon: <BsLightningCharge />,
    skills: ["Redis", "BullMQ", "Socket.IO"],
  },
  {
    number: "06",
    title: "AI & Automation",
    icon: <BsRobot />,
    skills: [
      "OpenAI API",
      "Gemini API",
      "Groq API",
      "Prompt Engineering",
      "LangChain",
      "RAG Systems",
    ],
  },
  {
    number: "07",
    title: "DevOps & Cloud",
    icon: <BsCloud />,
    skills: [
      "Docker",
      "Railway",
      "Vercel",
      "Render",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    number: "08",
    title: "Logging & Monitoring",
    icon: <BsActivity />,
    skills: ["Winston", "Structured Logging"],
  },
];

type SkillGroupType = (typeof skillGroups)[number];

const SkillGroup = ({ group }: { group: SkillGroupType }) => {
  return (
    <div className="group border-b border-white/[0.09] py-5 transition-colors duration-300 hover:border-indigo-400/40">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg text-indigo-400 transition-transform duration-300 group-hover:scale-110">
            {group.icon}
          </span>

          <h3 className="text-base font-semibold tracking-tight text-white">
            {group.title}
          </h3>
        </div>

        <span className="font-mono text-[11px] text-white/25">
          {group.number}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {group.skills.map((skill, index) => (
          <span
            key={skill}
            className="text-[13px] leading-6 text-gray-400 transition-colors duration-200 hover:text-indigo-300"
          >
            {skill}
            {index !== group.skills.length - 1 && (
              <span className="ml-2 text-indigo-400/40">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

const MySkills = () => {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden bg-[#080b16] px-6 py-10 text-white sm:px-10 lg:px-16"
    >
      {/* Main background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_15%,rgba(79,70,229,0.16),transparent_38%),radial-gradient(ellipse_at_90%_75%,rgba(147,51,234,0.12),transparent_35%),linear-gradient(135deg,#080b16_0%,#0c1020_50%,#090b18_100%)]" />

      {/* Indigo ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-indigo-600/[0.12] blur-[140px]" />

      {/* Purple ambient glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/[0.10] blur-[130px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="mb-14 flex items-center gap-3">
          <span className="h-px w-9 bg-indigo-400" />

          <span className="font-mono text-xs uppercase tracking-[0.22em] text-indigo-400">
            My capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          {/* Left introduction */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
                The tools
                <br />
                behind
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  my work.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-[15px] leading-7 text-gray-400">
                A collection of technologies I work with to design, develop, and
                deliver modern digital products.
              </p>
            </div>

            {/* Primary stack */}
            <div className="mt-12 border-l-2 border-indigo-400/60 pl-5 lg:mt-20">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Primary stack
              </p>

              <p className="text-lg font-semibold text-white">
                React · Next.js · Node.js
              </p>

              <p className="mt-2 text-sm text-gray-500">
                TypeScript · Express · PostgreSQL
              </p>
            </div>

            {/* Bottom detail */}
            <div className="mt-12 flex items-center gap-3 text-sm text-gray-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-indigo-300">
                <BsArrowUpRight />
              </span>

              <span>Always learning, always building.</span>
            </div>
          </div>

          {/* Right technology showcase */}
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup key={group.number} group={group} />
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.08] pt-6">
          <p className="text-xs text-gray-500">Technologies & tools</p>

          <p className="font-mono text-xs tracking-wider text-indigo-300/70">
            BUILD / LEARN / REPEAT
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
