"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaUsers, FaBook } from "react-icons/fa";

const USERNAME = "thearsalan1";

type User = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
};

type FeaturedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  color: string | null;
};

type GitHubData = {
  user: User;
  recent: FeaturedRepo[];
  pinned: FeaturedRepo[];
  languages: Record<string, number>;
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#663399",
  SCSS: "#c6538c",
  HTML: "#e34c26",
  Go: "#00ADD8",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Other: "#8b8b9a",
};

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // All GitHub requests happen on the server (/api/github), using the token
  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/github");
        const json = await response.json();

        if (!response.ok) {
          console.warn("GitHub route error:", json.error);
          throw new Error(json.error);
        }

        setData(json as GitHubData);
      } catch {
        setError("GitHub data is currently unavailable.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const user = data?.user ?? null;
  const showingPinned = (data?.pinned.length ?? 0) > 0;
  const featuredRepos: FeaturedRepo[] = data
    ? showingPinned
      ? data.pinned
      : data.recent
    : [];

  // Top 6 languages + "Other"
  const sortedLanguages = Object.entries(data?.languages ?? {}).sort(
    (a, b) => b[1] - a[1],
  );
  const topLanguages = sortedLanguages.slice(0, 6);
  const otherTotal = sortedLanguages
    .slice(6)
    .reduce((total, [, value]) => total + value, 0);

  const languageList: [string, number][] =
    otherTotal > 0 ? [...topLanguages, ["Other", otherTotal]] : topLanguages;

  const totalLanguageValue = languageList.reduce(
    (total, [, value]) => total + value,
    0,
  );

  const stats = [
    { label: "Repositories", value: user?.public_repos ?? 0, icon: FaBook },
    { label: "Followers", value: user?.followers ?? 0, icon: FaUsers },
  ];

  return (
    <section
      id="github"
      className="relative w-full overflow-hidden bg-[#080b16] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-indigo-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
            GitHub <span className="text-indigo-400">Overview</span>
          </h2>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs font-medium text-gray-300 transition hover:border-indigo-400/40 hover:text-white"
          >
            <FaGithub size={15} />
            <span>Profile</span>
            <FaExternalLinkAlt size={10} />
          </a>
        </div>

        {loading ? (
          <div className="rounded-xl border border-white/[0.08] bg-[#101525] p-8 text-center text-sm text-gray-400">
            Loading GitHub overview...
          </div>
        ) : error || !user ? (
          <div className="rounded-xl border border-white/[0.08] bg-[#101525] p-8 text-center text-sm text-gray-400">
            {error || "Unable to load GitHub profile."}
          </div>
        ) : (
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            {/* LEFT: profile + languages */}
            <div className="flex min-w-0 flex-col gap-4">
              {/* Profile */}
              <div className="rounded-xl border border-white/[0.08] bg-[#101525] p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login} avatar`}
                    className="h-16 w-16 shrink-0 rounded-full border border-white/10 object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-white">
                      {user.name || user.login}
                    </h3>
                    <p className="mt-0.5 text-sm text-indigo-400">
                      @{user.login}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-gray-400">
                      {user.bio || "Full Stack Developer"}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-8 border-t border-white/[0.08] pt-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div key={stat.label} className="flex items-center gap-3">
                        <Icon className="text-sm text-indigo-400" />
                        <div>
                          <p className="text-xl font-bold leading-none text-white">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Languages */}
              <div className="flex-1 rounded-xl border border-white/[0.08] bg-[#101525] p-5 sm:p-6">
                <h3 className="mb-4 text-sm font-semibold text-gray-200">
                  Top Languages
                </h3>

                {languageList.length > 0 ? (
                  <>
                    <div className="flex h-2.5 overflow-hidden rounded-full bg-white/10">
                      {languageList.map(([language, value]) => (
                        <div
                          key={language}
                          title={language}
                          style={{
                            width: `${(value / totalLanguageValue) * 100}%`,
                            backgroundColor:
                              languageColors[language] || "#8b8b9a",
                          }}
                        />
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {languageList.map(([language, value]) => (
                        <li
                          key={language}
                          className="flex items-center justify-between gap-3 text-sm"
                        >
                          <span className="flex items-center gap-2 text-gray-300">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{
                                backgroundColor:
                                  languageColors[language] || "#8b8b9a",
                              }}
                            />
                            {language}
                          </span>

                          <span className="text-xs text-gray-500">
                            {((value / totalLanguageValue) * 100).toFixed(1)}%
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-xs text-gray-500">
                    No language data available.
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT: pinned repositories */}
            <div className="flex min-w-0 flex-col rounded-xl border border-white/[0.08] bg-[#101525] p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-200">
                  {showingPinned
                    ? "Pinned Repositories"
                    : "Recent Repositories"}
                </h3>
                <a
                  href={`https://github.com/${USERNAME}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 transition hover:text-indigo-300"
                >
                  View all
                </a>
              </div>

              <div className="grid flex-1 auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
                {featuredRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 flex-col rounded-lg border border-white/[0.06] bg-white/[0.025] p-4 transition-colors hover:border-indigo-400/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-medium text-gray-200 transition group-hover:text-indigo-400">
                        {repo.name}
                      </p>

                      <FaExternalLinkAlt className="mt-1 shrink-0 text-[10px] text-gray-600 transition group-hover:text-indigo-400" />
                    </div>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
                      {repo.description || "No description"}
                    </p>

                    {repo.language && (
                      <p className="mt-auto flex items-center gap-1.5 pt-3 text-xs text-gray-400">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor:
                              repo.color ||
                              languageColors[repo.language] ||
                              "#8b8b9a",
                          }}
                        />
                        {repo.language}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
