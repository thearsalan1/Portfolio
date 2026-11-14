
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import GitHubActivity from "./components/Github";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0d0d1a] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-black"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 flex w-full flex-col gap-20">
        <Hero />
        <AboutMe />
        <Experience />
        <MySkills />
        <MyProjects />
        <Education />
        <GitHubActivity />
        <Connect/>
      </div>
    </main>
  );
}
