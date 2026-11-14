import { NextResponse } from "next/server";

const USERNAME = "thearsalan1";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GitHub token is not configured." },
      { status: 500 },
    );
  }

  const query = `
    query {
      user(login: "${USERNAME}") {
        name
        login
        avatarUrl
        bio
        url
        followers {
          totalCount
        }
        repositories(privacy: PUBLIC, first: 100, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
      return NextResponse.json(
        { error: "Unable to fetch GitHub profile." },
        { status: 502 },
      );
    }

    const data = result.data.user;

    return NextResponse.json({
      user: {
        name: data.name,
        login: data.login,
        avatar_url: data.avatarUrl,
        bio: data.bio,
        html_url: data.url,
        followers: data.followers.totalCount,
        public_repos: data.repositories.totalCount,
      },
      repos: data.pinnedItems.nodes,
      languages: data.repositories.nodes.reduce(
        (acc: Record<string, { count: number; color: string }>, repo: any) => {
          const language = repo.primaryLanguage;

          if (language) {
            if (!acc[language.name]) {
              acc[language.name] = {
                count: 0,
                color: language.color || "#64748b",
              };
            }

            acc[language.name].count++;
          }

          return acc;
        },
        {},
      ),
    });
  } catch {
    return NextResponse.json(
      { error: "GitHub service is unavailable." },
      { status: 500 },
    );
  }
}
