import {
  BsBuilding,
  BsCalendar3,
  BsArrowUpRight,
  BsDatabase,
  BsGlobe,
  BsGithub,
  BsWallet2,
} from "react-icons/bs";

const projects = [
  {
    name: "OEMS",
    type: "Backend Development",
    icon: <BsDatabase />,
    description:
      "Developed backend services for an online examination platform, including APIs, authentication, database architecture and result processing.",
    technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT"],
  },
  {
    name: "Main Company Website",
    type: "Frontend Development",
    icon: <BsGlobe />,
    description:
      "Developed responsive website interfaces by translating UI/UX designs into reusable React components.",
    technologies: ["React.js", "JavaScript", "CSS", "Tailwind CSS"],
  },
  {
    name: "GitHub Analyser",
    type: "Full Stack Development",
    icon: <BsGithub />,
    description:
      "Built a GitHub profile analysis platform with repository insights and a customizable README generator.",
    technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
  },
  {
    name: "QuickMoney",
    type: "Frontend Development",
    icon: <BsWallet2 />,
    description:
      "Developed a financial application interface focused on usability and a clean user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

function ProjectItem({ project, index }) {
  return (
    <article className="group grid grid-cols-1 gap-4 border-t border-white/10 py-6 sm:grid-cols-[40px_minmax(180px,0.8fr)_minmax(260px,1.5fr)_minmax(180px,1fr)] sm:gap-6 lg:gap-10">
      <span className="pt-1 font-mono text-xs text-indigo-400">
        0{index + 1}
      </span>

      <div>
        <div className="mb-2 flex items-center gap-2 text-indigo-400">
          <span>{project.icon}</span>
          <span className="text-xs text-gray-500">{project.type}</span>
        </div>

        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-indigo-300">
          {project.name}
        </h3>
      </div>

      <p className="text-sm leading-7 text-gray-400">{project.description}</p>

      <div className="flex flex-wrap content-start gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="border border-white/10 px-2 py-1 text-[11px] text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <main
      id="experience"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#080b16] text-white"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-indigo-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto w-full px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
        {/* Heading */}
        <header className="mb-14">
          <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-7 bg-indigo-400" />
            Career
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience<span className="text-indigo-400">.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
            My professional journey, development experience and selected work.
          </p>
        </header>

        {/* Company details */}
        <section className="border-y border-white/10 py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-indigo-400/20 bg-indigo-400/[0.07] text-lg text-indigo-300">
                  <BsBuilding />
                </div>

                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Professional Experience
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white">
                MAT Nite Pvt. Ltd.
              </h2>

              <p className="mt-2 text-sm font-medium text-indigo-300">
                Full Stack Engineer
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
                Working on web applications and software products, contributing
                to backend development, frontend implementation and building
                practical solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-400 md:flex-col md:items-end">
              <span className="flex items-center gap-2">
                <BsCalendar3 className="text-indigo-400" />
                April 2026 – Present
              </span>

              <span className="text-green-400">● Currently Working</span>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Portfolio Highlights
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Selected Work
              </h2>
            </div>

            <span className="text-xs text-gray-500">04 Projects</span>
          </div>

          {projects.map((project, index) => (
            <ProjectItem key={project.name} project={project} index={index} />
          ))}

          <div className="border-t border-white/10" />
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500">
            Building, learning and growing through development.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs text-indigo-300 transition-colors hover:text-white"
          >
            Explore all projects
            <BsArrowUpRight />
          </a>
        </footer>
      </div>
    </main>
  );
}
