import { NextResponse } from "next/server";

const USERNAME = "thearsalan1";
const TTL = 60 * 60 * 1000;

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

type PinnedNode = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  primaryLanguage: { name: string; color: string | null } | null;
};

const pinnedQuery = `
  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            primaryLanguage { name color }
          }
        }
      }
    }
  }
`;

// Simple in-memory cache. Only successful responses are stored.
let cache: { time: number; data: unknown } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.time < TTL) {
    return NextResponse.json(cache.data);
  }

  // Server-only token. Best name: GITHUB_TOKEN (no NEXT_PUBLIC_ prefix).
  const token =
    process.env.GITHUB_TOKEN ??
    process.env.GH_TOKEN ??
    process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-site",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const github = (url: string) => fetch(url, { headers, cache: "no-store" });

  try {
    const [userRes, reposRes] = await Promise.all([
      github(`https://api.github.com/users/${USERNAME}`),
      github(
        `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      const failed = !userRes.ok ? userRes : reposRes;
      const body = await failed.json().catch(() => null);

      return NextResponse.json(
        {
          error: `GitHub said (${failed.status}): ${
            body?.message ?? "request failed"
          }`,
        },
        { status: 502 },
      );
    }

    const userData = await userRes.json();
    const allRepos: GitHubRepo[] = await reposRes.json();

    const originalRepos = allRepos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      );

    const languageResults = await Promise.all(
      originalRepos.map(async (repo) => {
        try {
          const res = await github(
            `https://api.github.com/repos/${USERNAME}/${repo.name}/languages`,
          );
          return res.ok ? ((await res.json()) as Record<string, number>) : {};
        } catch {
          return {} as Record<string, number>;
        }
      }),
    );

    const languages: Record<string, number> = {};
    languageResults.forEach((repoLanguages) => {
      Object.entries(repoLanguages).forEach(([language, bytes]) => {
        languages[language] = (languages[language] || 0) + bytes;
      });
    });

    // Fallback: main language per repo, if the language endpoint gave nothing
    if (Object.keys(languages).length === 0) {
      originalRepos.forEach((repo) => {
        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      });
    }

    // Pinned repositories (needs the token; optional)
    let pinned: {
      id: string;
      name: string;
      description: string | null;
      url: string;
      language: string | null;
      color: string | null;
    }[] = [];

    if (token) {
      try {
        const pinnedRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({
            query: pinnedQuery,
            variables: { login: USERNAME },
          }),
          cache: "no-store",
        });

        if (pinnedRes.ok) {
          const json = await pinnedRes.json();
          const nodes: PinnedNode[] =
            json?.data?.user?.pinnedItems?.nodes ?? [];

          pinned = nodes.map((node) => ({
            id: node.id,
            name: node.name,
            description: node.description,
            url: node.url,
            language: node.primaryLanguage?.name ?? null,
            color: node.primaryLanguage?.color ?? null,
          }));
        }
      } catch {
        // pinned stays empty, the UI falls back to recent repositories
      }
    }

    const data = {
      user: {
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        bio: userData.bio,
        html_url: userData.html_url,
        public_repos: userData.public_repos,
        followers: userData.followers,
      },
      recent: originalRepos.slice(0, 4).map((repo) => ({
        id: String(repo.id),
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        color: null,
      })),
      pinned,
      languages,
    };

    cache = { time: Date.now(), data };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Could not reach GitHub from the server." },
      { status: 500 },
    );
  }
}
