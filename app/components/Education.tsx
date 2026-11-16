"use client";

import {
  BsMortarboard,
  BsBook,
  BsGeoAlt,
  BsAward,
  BsTrophy,
  BsCodeSlash,
  BsRobot,
  BsLaptop,
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
      className="relative w-full overflow-hidden bg-[#080b16] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-pink-600/[0.05] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
            Education <span className="text-indigo-400">&</span> Achievements
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
            My academic background, technical certifications, and
            extracurricular achievements.
          </p>
        </div>

        {/* Row 1: Education + Achievements */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* Education */}
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <BsMortarboard className="text-lg text-indigo-400" />
              <h3 className="text-lg font-semibold">Academic Background</h3>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#101525]">
              {education.map((item, index) => (
                <article
                  key={item.degree}
                  className={`flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                    index !== education.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  } ${item.current ? "bg-indigo-500/[0.05]" : ""}`}
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-lg text-indigo-300">
                      {item.current ? <BsMortarboard /> : <BsBook />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-white">
                          {item.degree}
                        </h4>

                        {item.current && (
                          <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] text-emerald-300">
                            Currently Pursuing
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm text-gray-300">
                        {item.institution}
                      </p>

                      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <BsGeoAlt />
                          {item.location}
                        </span>
                        <span>{item.level}</span>
                      </p>
                    </div>
                  </div>

                  <p className="shrink-0 pl-14 text-xs text-gray-500 sm:pl-0 sm:text-right">
                    {item.duration}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <BsTrophy className="text-lg text-amber-300" />
              <h3 className="text-lg font-semibold">Achievements</h3>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#101525] p-5 lg:min-h-[calc(100%-2.75rem)]">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/[0.08] text-xl text-amber-300">
                  <BsTrophy />
                </div>

                <h4 className="font-semibold text-white">
                  Sports & Other Achievements
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Recognized through participation and achievements in sports,
                  extracurricular activities, and other areas beyond academics.
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-2 border-t border-white/[0.08] pt-4">
                <span className="text-3xl font-bold text-amber-300">10+</span>
                <span className="text-xs text-gray-500">Trophies & Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Certifications */}
        <div className="mt-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <BsAward className="text-lg text-indigo-400" />
              <h3 className="text-lg font-semibold">
                Technical Certifications
              </h3>
            </div>

            <span className="text-xs text-gray-500">
              + 17 more certificates across other extracurricular areas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {certifications.map((certificate) => (
              <article
                key={certificate.name}
                className="group flex items-start gap-4 rounded-xl border border-white/[0.08] bg-[#101525] p-5 transition-colors duration-200 hover:border-indigo-400/30 hover:bg-[#131b30]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-lg text-indigo-300">
                  {certificate.icon}
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold leading-5 text-white">
                    {certificate.name}
                  </h4>

                  <p className="mt-1 text-xs text-gray-400">
                    {certificate.issuer}
                  </p>

                  <p className="mt-2 text-xs text-indigo-300">
                    {certificate.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
