"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaUsers,
  FaBook,
} from "react-icons/fa";

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

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#663399",
  HTML: "#e34c26",
  Go: "#00ADD8",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
};

export default function GitHubActivity() {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
          ),
        ]);

        if (!userResponse.ok || !repoResponse.ok) {
          throw new Error("Unable to load GitHub profile.");
        }

        const userData: User = await userResponse.json();
        const repoData: Repo[] = await repoResponse.json();

        setUser(userData);

        const originalRepos = repoData
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
          );

        setRepos(originalRepos.slice(0, 4));
      } catch {
        setError("GitHub data is currently unavailable.");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  const totalStars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0,
  );

  const totalForks = repos.reduce((total, repo) => total + repo.forks_count, 0);

  const languages = repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const languageList = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const totalLanguages = languageList.reduce(
    (total, [, count]) => total + count,
    0,
  );

  const stats = [
    {
      label: "Repositories",
      value: user?.public_repos ?? 0,
      icon: FaBook,
    },
    {
      label: "Followers",
      value: user?.followers ?? 0,
      icon: FaUsers,
    },
    {
      label: "Stars",
      value: totalStars,
      icon: FaStar,
    },
    {
      label: "Forks",
      value: totalForks,
      icon: FaCodeBranch,
    },
  ];

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-[#080b16] px-5 py-16 text-white sm:px-8"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
              Open source
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              GitHub <span className="text-indigo-400">Overview</span>
            </h2>
          </div>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-medium text-gray-300 transition hover:border-indigo-400/40 hover:text-white"
          >
            <FaGithub size={15} />
            <span>Profile</span>
            <FaExternalLinkAlt size={10} />
          </a>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-white/[0.08] bg-[#101525] p-8 text-center text-sm text-gray-400">
            Loading GitHub overview...
          </div>
        ) : error || !user ? (
          <div className="rounded-2xl border border-white/[0.08] bg-[#101525] p-8 text-center text-sm text-gray-400">
            {error || "Unable to load GitHub profile."}
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101525]">
            <div className="grid gap-6 p-5 md:grid-cols-[1fr_1fr] md:gap-8 md:p-7">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  className="h-16 w-16 rounded-full border border-white/10 object-cover"
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

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3"
                    >
                      <Icon className="mb-2 text-sm text-indigo-400" />
                      <p className="text-xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[11px] text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid border-t border-white/[0.07] md:grid-cols-2">
              {/* Languages */}
              <div className="border-b border-white/[0.07] p-5 md:border-b-0 md:border-r md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-200">
                    Top Languages
                  </h3>
                  <span className="text-[11px] text-gray-500">
                    Repository distribution
                  </span>
                </div>

                {languageList.length > 0 ? (
                  <>
                    <div className="flex h-2 overflow-hidden rounded-full bg-white/10">
                      {languageList.map(([language, count]) => (
                        <div
                          key={language}
                          style={{
                            width: `${(count / totalLanguages) * 100}%`,
                            backgroundColor:
                              languageColors[language] || "#8b8b9a",
                          }}
                        />
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {languageList.map(([language]) => (
                        <div
                          key={language}
                          className="flex items-center gap-1.5 text-xs text-gray-400"
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor:
                                languageColors[language] || "#8b8b9a",
                            }}
                          />
                          {language}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-xs text-gray-500">
                    No language data available.
                  </p>
                )}
              </div>

              {/* Recent repositories */}
              <div className="p-5 md:p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-200">
                    Recent Repositories
                  </h3>
                  <a
                    href={`https://github.com/${USERNAME}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-400 transition hover:text-indigo-300"
                  >
                    View all
                  </a>
                </div>

                <div className="divide-y divide-white/[0.06]">
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-200 transition group-hover:text-indigo-400">
                          {repo.name}
                        </p>
                        <p className="mt-1 truncate text-[11px] text-gray-500">
                          {repo.language || "Code"}
                          {repo.description ? ` · ${repo.description}` : ""}
                        </p>
                      </div>

                      <FaExternalLinkAlt className="shrink-0 text-[10px] text-gray-600 transition group-hover:text-indigo-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
