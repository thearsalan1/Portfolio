
"use client";

import {
  BsMortarboard,
  BsBook,
  BsGeoAlt,
  BsAward,
  BsTrophy,
  BsPatchCheck,
  BsCodeSlash,
  BsRobot,
  BsLaptop,
  BsStars,
} from "react-icons/bs";

const education = [
  {
    degree: "B.Tech",
    level: "Bachelor's Degree",
    institution: "Future Institute of Engineering and Technology",
    location: "Uttar Pradesh, India",
    duration: "2023 – 2027",
    current: true,
  },
  {
    degree: "Class 12th",
    level: "Senior Secondary",
    institution: "Dr. G.L. Kanojia Public School",
    location: "Shahjahanpur, Uttar Pradesh",
    duration: "Higher Secondary Education",
    current: false,
  },
  {
    degree: "Class 10th",
    level: "Secondary",
    institution: "Don and Donna Convent",
    location: "Shahjahanpur, Uttar Pradesh",
    duration: "Secondary Education",
    current: false,
  },
];

const certifications = [
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    category: "Artificial Intelligence",
    icon: <BsRobot />,
  },
  {
    name: "React Bootcamp",
    issuer: "LetsUpgrade",
    category: "Frontend Development",
    icon: <BsCodeSlash />,
  },
  {
    name: "Full Stack Developer Training",
    issuer: "Seventh Sense",
    category: "Full Stack Development",
    icon: <BsLaptop />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-[#080b16] px-5 py-14 text-white sm:px-8 lg:py-16"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-pink-600/[0.05] blur-[120px]" />

      {/* Centered container */}
      <div className="relative mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo-400" />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
                Beyond the Code
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Education <span className="text-indigo-400">&</span> Achievements
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
              My academic background, technical certifications, and
              extracurricular achievements.
            </p>
          </div>

          {/* Statistics */}
          <div className="flex gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#101525] px-4 py-3">
              <BsPatchCheck className="text-xl text-indigo-300" />

              <div>
                <p className="text-xl font-bold">20+</p>
                <p className="text-xs text-gray-500">Certificates</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#101525] px-4 py-3">
              <BsTrophy className="text-xl text-amber-300" />

              <div>
                <p className="text-xl font-bold">10+</p>
                <p className="text-xs text-gray-500">Trophies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <BsMortarboard className="text-lg text-indigo-400" />

            <h3 className="text-lg font-semibold">
              Academic Background
            </h3>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#101525]">
            {education.map((item, index) => (
              <article
                key={item.degree}
                className={`flex flex-col gap-3 px-5 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                  index !== education.length - 1
                    ? "border-b border-white/[0.07]"
                    : ""
                } ${item.current ? "bg-indigo-500/[0.045]" : ""}`}
              >
                <div className="flex min-w-0 items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-lg text-indigo-300">
                    {item.current ? <BsMortarboard /> : <BsBook />}
                  </div>

                  <div className="min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-white">
                        {item.degree}
                      </h4>

                      {item.current && (
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                          Currently Pursuing
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-300">
                      {item.institution}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <BsGeoAlt />
                        {item.location}
                      </span>

                      <span>{item.level}</span>
                    </div>
                  </div>
                </div>

                <p className="shrink-0 text-xs text-gray-500 sm:text-right">
                  {item.duration}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Technical Certifications */}
        <div className="mb-12">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <BsAward className="text-lg text-indigo-400" />

                <h3 className="text-lg font-semibold">
                  Technical Certifications
                </h3>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Selected certifications related to software development
              </p>
            </div>

            <span className="text-xs font-medium text-indigo-300">
              3 Featured Certifications
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {certifications.map((certificate) => (
              <article
                key={certificate.name}
                className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#101525] p-4 transition-all duration-300 hover:border-indigo-400/30 hover:bg-[#131b30]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-lg text-indigo-300">
                  {certificate.icon}
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-indigo-300">
                    {certificate.category}
                  </p>

                  <h4 className="text-sm font-semibold leading-5 text-white">
                    {certificate.name}
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    {certificate.issuer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] px-4 py-3">
            <BsStars className="shrink-0 text-indigo-300" />

            <p className="text-xs leading-5 text-gray-400">
              Also earned{" "}
              <span className="font-semibold text-white">
                17+ additional certificates
              </span>{" "}
              across various learning areas.
            </p>
          </div>
        </div>

        {/* Extracurricular Achievements */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <BsTrophy className="text-lg text-amber-300" />

            <div>
              <h3 className="text-lg font-semibold">
                Extracurricular Achievements
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Sports, competitions, and other activities
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-white/[0.08] bg-[#101525] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/[0.08] text-xl text-amber-300">
                <BsTrophy />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Sports & Other Achievements
                </h4>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">
                  Recognized through participation and achievements in sports,
                  extracurricular activities, and other areas beyond academics.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:border-l sm:border-white/[0.08] sm:pl-6">
              <span className="text-2xl font-bold text-amber-300">
                10+
              </span>

              <span className="text-xs leading-4 text-gray-500">
                Trophies &<br />Awards
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-9 border-t border-white/[0.08] pt-5">
          <p className="text-xs text-gray-500">
            Continuous learning, meaningful experiences, and growth beyond the classroom.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
