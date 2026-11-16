"use client";

import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaExpand,
  FaGlobe,
  FaCircle,
  FaCodeBranch,
  FaSyncAlt,
} from "react-icons/fa";

const projects = [
  {
    id: "hirehub",
    number: "01",
    title: "HireHub",
    subtitle: "AI-Powered Job Portal",
    description:
      "An AI-powered recruitment platform for resume analysis, job management, and streamlined hiring workflows.",
    features: [
      "AI-powered resume parsing",
      "65+ REST APIs",
      "LLaMA 3.3 integration",
      "Docker-based deployment",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express",
      "MongoDB",
      "Groq API",
      "Docker",
    ],
    live: "https://hire-hub-ai-job-portal.vercel.app/",
    github: null,
    status: "Live",
  },
  {
    id: "shopnosis",
    number: "02",
    title: "Shopnosis",
    subtitle: "E-Commerce Platform",
    description:
      "A full-stack shopping platform with PayPal payments, checkout workflows, and Redux-powered cart management.",
    features: [
      "PayPal payment gateway",
      "Complete checkout workflow",
      "30+ REST APIs",
      "Redux cart management",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "PayPal API",
    ],
    live: "https://shopnosis-x9qr.vercel.app/",
    github: null,
    status: "Live",
  },
  {
    id: "back2u",
    number: "03",
    title: "Back2U",
    subtitle: "Lost & Found Management System",
    description:
      "A lost and found management system with secure authentication, item tracking, and proof-based claim approvals.",
    features: [
      "JWT authentication and bcrypt",
      "Admin and user permissions",
      "Item management and filtering",
      "Proof-based claim approval",
      "Dashboard analytics",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Zod",
      "JWT",
    ],
    live: "https://back2u-kappa.vercel.app/",
    github:
      "https://github.com/thearsalan1/Lost-and-Found-Management-System-Backend",
    status: "Live",
  },
  {
    id: "campusconnect",
    number: "04",
    title: "CampusConnect",
    subtitle: "Social Media & Marketplace",
    description:
      "A microservices-based social platform combining community features, marketplace tools, and real-time communication.",
    features: [
      "6-service microservices architecture",
      "60+ REST API endpoints",
      "Real-time chat and notifications",
      "BullMQ background workers",
      "Database isolation",
    ],
    tech: [
      "React 19",
      "Express 5",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Docker",
    ],
    live: null,
    github:
      "https://github.com/thearsalan1/CampusConnect_Microservices-socialMedia",
    status: "Building",
  },
];

export default function MyProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loading, setLoading] = useState(true);

  const active = projects[activeIndex];

  const refreshPreview = () => {
    if (!active.live) return;
    setLoading(true);
    setRefreshKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    const element = document.getElementById("project-browser");

    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#080b16] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-indigo-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
              Things I've{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Built.
              </span>
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">
              A selection of projects showcasing my approach to full-stack
              development and practical problem-solving.
            </p>
          </div>

          <a
            href="https://github.com/thearsalan1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 text-sm text-gray-300 transition hover:text-indigo-400"
          >
            <FaGithub className="text-base" />
            GitHub Profile
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/*
          mobile: tiles, details, preview stacked
          lg:     tiles on top, details + preview side by side
          xl:     tiles | details | preview
        */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.6fr)] xl:grid-cols-[190px_minmax(230px,0.75fr)_minmax(0,2fr)]">
          {/* Project tiles */}
          <aside className="min-w-0 lg:col-span-2 xl:col-span-1">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-1">
              {projects.map((project, index) => {
                const selected = activeIndex === index;

                return (
                  <button
                    key={project.id}
                    onClick={() => {
                      setActiveIndex(index);
                      setLoading(Boolean(project.live));
                    }}
                    aria-pressed={selected}
                    className={`relative rounded-xl border p-4 text-left transition-colors duration-200 ${
                      selected
                        ? "border-indigo-400/40 bg-gradient-to-br from-[#1b2340] to-[#11182b]"
                        : "border-white/[0.08] bg-[#0d1220] hover:border-white/20 hover:bg-[#121a2c]"
                    }`}
                  >
                    {selected && (
                      <span className="absolute bottom-3 left-0 top-3 w-[2px] rounded-r bg-indigo-400" />
                    )}

                    <h3
                      className={`text-sm font-semibold xl:text-base ${
                        selected ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-gray-500">
                      {project.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Selected project details */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl xl:text-[28px]">
                {active.title}
              </h3>

              <span
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] ${
                  active.live
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-amber-400/10 text-amber-300"
                }`}
              >
                <FaCircle className="text-[5px]" />
                {active.status}
              </span>
            </div>

            <p className="mt-1 text-sm text-indigo-300">{active.subtitle}</p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
              {active.description}
            </p>

            {/* Technologies */}
            <div className="mt-8">
              <p className="mb-3 text-xs text-gray-500">Built with</p>

              <div className="flex flex-wrap gap-2">
                {active.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8">
              <p className="mb-3 text-xs text-gray-500">Highlights</p>

              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {active.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-5 text-gray-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project links */}
            <div className="mt-8 flex flex-wrap gap-2">
              {active.live && (
                <a
                  href={active.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-600"
                >
                  Live Website
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              )}

              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs text-gray-300 transition hover:border-indigo-400/40 hover:text-white"
                >
                  <FaGithub />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Live preview */}
          <div className="min-w-0 lg:sticky lg:top-6">
            <div className="mx-auto w-full max-w-[920px]">
              <div
                id="project-browser"
                className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0e1423] shadow-[0_18px_55px_rgba(0,0,0,0.3)]"
              >
                {/* Browser toolbar */}
                <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#141b2c] px-3.5 py-2.5 sm:px-4">
                  <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/[0.06] bg-[#090e19] px-3 py-1.5">
                    <FaGlobe className="shrink-0 text-[10px] text-gray-500" />

                    <span className="truncate text-[11px] text-gray-400">
                      {active.live
                        ? new URL(active.live).hostname
                        : "github.com/thearsalan1/CampusConnect"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={refreshPreview}
                    disabled={!active.live}
                    title="Refresh preview"
                    aria-label="Refresh preview"
                    className="text-xs text-gray-400 transition hover:text-white disabled:opacity-30"
                  >
                    <FaSyncAlt />
                  </button>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    title="Fullscreen"
                    aria-label="Toggle fullscreen"
                    className="text-xs text-gray-400 transition hover:text-white"
                  >
                    <FaExpand />
                  </button>
                </div>

                {/* Preview  */}
                <div className="project-preview relative aspect-[16/10] w-full bg-white">
                  {active.live ? (
                    <>
                      {loading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#0d1322]">
                          <div className="h-7 w-7 animate-spin rounded-full border-2 border-indigo-400/20 border-t-indigo-400" />

                          <p className="text-xs text-gray-400">
                            Loading {active.title}...
                          </p>
                        </div>
                      )}

                      <iframe
                        key={`${active.id}-${refreshKey}`}
                        src={active.live}
                        title={`${active.title} preview`}
                        loading="lazy"
                        onLoad={() => setLoading(false)}
                        onError={() => setLoading(false)}
                        referrerPolicy="strict-origin-when-cross-origin"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
                        className="absolute inset-0 h-full w-full border-0 bg-white"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c1221] px-5 text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-300">
                        <FaCodeBranch />
                      </div>

                      <span className="mb-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1 text-[10px] text-amber-300">
                        Currently in development
                      </span>

                      <h3 className="text-xl font-bold text-white">
                        CampusConnect
                      </h3>

                      <p className="mt-2 max-w-sm text-xs leading-6 text-gray-400">
                        A social platform and marketplace built around
                        microservices and real-time features.
                      </p>

                      {active.github && (
                        <a
                          href={active.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-600"
                        >
                          <FaGithub />
                          View Repository
                          <FaArrowRight />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
