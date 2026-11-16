import {
  BsArrowUpRight,
  BsDatabase,
  BsGlobe,
  BsGithub,
  BsWallet2,
} from "react-icons/bs";

import type { ReactNode } from "react";

// Interfaces
interface Project {
  name: string;
  type: "Backend" | "Frontend" | "Full stack";
  icon: ReactNode;
  description: string;
  technologies: string[];
  href?: string;
}

interface ProjectCardProps {
  project: Project;
}

// Projects
const projects: Project[] = [
  {
    name: "OEMS",
    type: "Backend",
    icon: <BsDatabase />,
    description:
      "Backend services for an online examination platform: APIs, authentication, database architecture and result processing.",
    technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT"],
  },
  {
    name: "Main Company Website",
    type: "Frontend",
    icon: <BsGlobe />,
    description:
      "Responsive website interfaces, built by turning UI/UX designs into reusable React components.",
    technologies: ["React.js", "JavaScript", "CSS", "Tailwind CSS"],
  },
  {
    name: "GitHub Analyser",
    type: "Full stack",
    icon: <BsGithub />,
    description:
      "A GitHub profile analysis platform with repository insights and a customizable README generator.",
    technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
  },
  {
    name: "QuickMoney",
    type: "Frontend",
    icon: <BsWallet2 />,
    description:
      "A financial application interface focused on usability and a clean user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

// Project Card
function ProjectCard({ project }: ProjectCardProps) {
  const Wrapper = project.href ? "a" : "div";

  const props = project.href
    ? {
        href: project.href,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...props}
      className="group flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-indigo-400/40 hover:bg-white/[0.05]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-300">
          {project.icon}
        </span>

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-base font-semibold text-white">
            {project.name}
          </h4>
          <p className="text-xs text-gray-500">{project.type}</p>
        </div>

        {project.href && (
          <BsArrowUpRight className="shrink-0 text-gray-500 transition group-hover:text-white" />
        )}
      </div>

      <p className="mt-4 break-words text-sm leading-6 text-gray-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

// Experience Component
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#080b16] text-white [box-shadow:0_0_0_100vmax_#080b16] [clip-path:inset(0_-100vmax)]"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-indigo-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-10 lg:px-16">
        <header className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
            Where I work and what I've built there.
          </p>
        </header>

        <ol className="relative ml-2 border-l border-white/15 sm:ml-3">
          <li className="relative pb-2 pl-6 sm:pl-10">
            <span className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />

              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-4 ring-[#080b16]" />
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
              <span>April 2026 – Present</span>

              <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                Current
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Full Stack Engineer
            </h3>

            <p className="mt-1 text-base text-indigo-300">
              MAT Nite Pvt. Ltd.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
              Building web applications and software products across backend
              development and frontend implementation, with a focus on
              practical solutions that ship.
            </p>

            <h4 className="mb-4 mt-10 text-sm font-medium text-gray-300">
              Selected work
            </h4>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}