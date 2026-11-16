import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaCode, FaTerminal } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#080812] px-5 py-16 text-white">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-indigo-600/15 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[130px]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.06] px-4 py-2">
          <FaTerminal className="text-xs text-indigo-400" />
          <span className="font-mono text-[11px] tracking-wider text-indigo-300">
            ERROR 404 · PAGE NOT FOUND
          </span>
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="select-none bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-[130px] font-extrabold leading-none tracking-tighter text-transparent sm:text-[190px] md:text-[230px]">
            404
          </h1>

          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-40 w-72 rounded-full bg-indigo-500/20 blur-[100px] sm:h-60 sm:w-96" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-4xl">
          Looks like you're lost in{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            cyberspace.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
          The page you're looking for doesn't exist, may have been moved, or is
          temporarily unavailable. Let's get you back on track.
        </p>

        {/* Terminal Card */}
        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#0d0d18] text-left shadow-2xl shadow-black/40">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>

            <div className="flex items-center gap-2 text-xs text-white/30">
              <FaCode className="text-indigo-400" />
              terminal.ts
            </div>
          </div>

          {/* Terminal Content */}
          <div className="space-y-3 px-5 py-5 font-mono text-xs sm:text-sm">
            <p className="text-white/30">
              <span className="text-green-400">➜</span> portfolio / route
            </p>

            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">status</span>{" "}
              <span className="text-white/40">=</span>{" "}
              <span className="text-green-300">404</span>;
            </p>

            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">message</span>{" "}
              <span className="text-white/40">=</span>{" "}
              <span className="text-green-300">"Route not found"</span>;
            </p>

            <p className="border-t border-white/[0.06] pt-3 text-red-400/80">
              Error: Requested resource does not exist.
            </p>

            <p className="text-white/30">
              <span className="text-green-400">➜</span> Waiting for navigation
              <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-indigo-400 align-middle" />
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]"
          >
            Explore Projects
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/[0.07] pt-6">
          <p className="font-mono text-xs tracking-wide text-white/25">
            <span className="text-indigo-400">{"<"}</span>
            Designed & Developed by Mohd Arsalan
            <span className="text-indigo-400">{"/>"}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
