"use client";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";

const emailLink = "mailto:arsalanloq@gmail.com";

const contactLinks = [
  {
    label: "Email",
    value: "arsalanloq@gmail.com",
    href: emailLink,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thearsalan1",
    href: "https://www.linkedin.com/in/thearsalan1/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/thearsalan1",
    href: "https://github.com/thearsalan1",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    value: "+91 6307764094",
    href: "https://api.whatsapp.com/send?phone=916307764094&text=Hi%20Arsalan!",
    icon: FaWhatsapp,
  },
];

export default function Connect() {
  return (
    <section
      id="contact"
      className="w-full bg-transparent px-5 py-15 text-white sm:px-8 lg:pt-10 pb-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 border-t border-white/10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-indigo-400">
              Get In Touch
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let's build something
              <span className="text-indigo-400"> meaningful.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              I'm open to software engineering opportunities, collaborations,
              and connecting with people who love building useful things.
            </p>

            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              <FaEnvelope />
              Get in touch
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          <div className="w-full">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-500">
              Connect with me
            </p>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={
                      item.label === "Email" ? undefined : "noopener noreferrer"
                    }
                    className="group flex items-center justify-between gap-4 py-5 transition"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-300 transition group-hover:border-indigo-400/40 group-hover:text-indigo-400">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-200">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-xs text-gray-500 transition group-hover:text-gray-300">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <FaExternalLinkAlt className="shrink-0 text-xs text-gray-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Arsalan. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with React & Next.js
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          </p>
        </div>
      </div>
    </section>
  );
}
