import { Octokit } from "@octokit/rest";
import { Effect } from "effect";
import {
  type FetchError,
  GitHubAPIError,
  NetworkError,
  withFallback,
} from "./effect-utils";
import type { ContributionType, ProcessedContribution } from "./schemas";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

// 保留旧接口以兼容现有代码
export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  body: string | null;
  html_url: string;
  state: "open" | "closed";
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  head: {
    ref: string;
    repo: {
      name: string;
      full_name: string;
      owner: {
        login: string;
      };
    };
  };
  base: {
    ref: string;
    repo: {
      name: string;
      full_name: string;
      owner: {
        login: string;
      };
    };
  };
}

// 使用 Schema 推导的类型
export type { ProcessedContribution } from "./schemas";

// Extract PR type from title (conventional commits)
function extractPRType(title: string): ContributionType {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.startsWith("feat")) return "feature";
  if (lowerTitle.startsWith("fix")) return "fix";
  if (lowerTitle.startsWith("perf")) return "perf";
  if (lowerTitle.startsWith("docs")) return "docs";
  if (lowerTitle.startsWith("refactor")) return "refactor";
  if (lowerTitle.startsWith("test")) return "test";
  if (lowerTitle.startsWith("chore")) return "chore";

  return "feature"; // default
}

// Format date to year
function formatDate(dateString: string): string {
  return new Date(dateString).getFullYear().toString();
}

// 处理单个 PR 数据
function processPR(
  pr: GitHubPullRequest,
  username: string,
): ProcessedContribution | null {
  const repoUrl = pr.html_url;
  const repoMatch = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)\/pull/);
  const repoOwner = repoMatch ? repoMatch[1] : "unknown";

  // 只包含其他仓库的 PR
  if (repoOwner === username) {
    return null;
  }

  const repository = repoMatch ? repoMatch[1] : "unknown";

  return {
    title: pr.title,
    description: `Contributed to ${repository}`,
    repository,
    link: pr.html_url,
    date: formatDate(pr.merged_at || pr.created_at),
    type: extractPRType(pr.title),
    state: "merged" as const,
  };
}

// Effect 版本：获取 GitHub PR
export const fetchUserPullRequestsEffect = (
  username: string,
  limit: number = 50,
): Effect.Effect<ProcessedContribution[], FetchError> => {
  const program = Effect.gen(function* () {
    const token =
      process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    if (!token) {
      console.warn("⚠️ GitHub token not found, using fallback data");
      return yield* Effect.fail(
        new GitHubAPIError({
          message: "GitHub token not found",
        }),
      );
    }

    // Try to fetch merged PRs
    const mergedResult = yield* Effect.tryPromise({
      try: () =>
        octokit.request("GET /search/issues", {
          q: `is:pr author:${username} is:merged`,
          sort: "updated",
          order: "desc",
          per_page: limit,
          advanced_search: "true",
        }),
      catch: (error) => {
        console.error("Failed to fetch merged PRs:", error);
        return new NetworkError({
          message: "Failed to fetch merged PRs",
          cause: error,
        });
      },
    });

    // If no merged PRs found, try to fetch closed PRs
    if (mergedResult.data.total_count === 0) {
      const closedResult = yield* Effect.tryPromise({
        try: () =>
          octokit.request("GET /search/issues", {
            q: `is:pr author:${username} is:closed`,
            sort: "updated",
            order: "desc",
            per_page: limit,
            advanced_search: "true",
          }),
        catch: (error) =>
          new NetworkError({
            message: "Failed to fetch closed PRs",
            cause: error,
          }),
      });

      // Filter out truly merged PRs
      const mergedPRs = closedResult.data.items.filter((item: unknown) => {
        const pr = item as { pull_request?: { merged_at: string | null } };
        return pr.pull_request?.merged_at;
      }) as unknown as GitHubPullRequest[];

      const contributions: ProcessedContribution[] = mergedPRs
        .map((pr) => processPR(pr, username))
        .filter((c): c is ProcessedContribution => c !== null);

      return contributions;
    }

    const pullRequests = mergedResult.data
      .items as unknown as GitHubPullRequest[];
    const contributions: ProcessedContribution[] = pullRequests
      .map((pr) => processPR(pr, username))
      .filter((c): c is ProcessedContribution => c !== null);

    return contributions;
  });

  return program as Effect.Effect<ProcessedContribution[], FetchError>;
};

// 带 fallback 的 Effect 版本
export const fetchUserPullRequestsWithFallback = (
  username: string,
  limit: number = 50,
): Effect.Effect<ProcessedContribution[], never> =>
  fetchUserPullRequestsEffect(username, limit).pipe(
    withFallback(fallbackContributions),
  );

// 兼容旧 API 的 Promise 版本（用于现有代码）
export async function fetchUserPullRequests(
  username: string,
  limit: number = 50,
): Promise<ProcessedContribution[]> {
  return Effect.runPromise(fetchUserPullRequestsWithFallback(username, limit));
}

// Fallback data in case API fails
export const fallbackContributions: ProcessedContribution[] = [
  {
    title: "feat(mem0): add complete mcp server with mem0 API integration",
    description:
      "Added mem0 MCP integration to the Klavis AI ecosystem, contributing to tools that other developers actually use.",
    repository: "Klavis-AI",
    link: "https://github.com/Klavis-AI/klavis/pull/251",
    date: "2025",
    type: "feature",
    state: "merged",
  },
  {
    title: "feat: add express.js support to CLI",
    description:
      "Added express.js support to the billingsdk CLI, contributing to tools that other developers actually use.",
    repository: "dodopayments",
    link: "https://github.com/dodopayments/billingsdk/pull/103",
    date: "2025",
    type: "feature",
    state: "merged",
  },
  {
    title: "feat: interactive component playground",
    description:
      "Added an interactive component playground to the Dodopayments billingsdk.",
    repository: "dodopayments",
    link: "https://github.com/dodopayments/billingsdk/pull/96",
    date: "2025",
    type: "feature",
    state: "merged",
  },
];
