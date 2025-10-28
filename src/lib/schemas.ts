import { Schema } from "@effect/schema";

// GitHub PR User Schema
export const GitHubUserSchema = Schema.Struct({
  login: Schema.String,
  avatar_url: Schema.String,
  html_url: Schema.String,
});

// GitHub PR Repository Schema
export const GitHubRepoSchema = Schema.Struct({
  name: Schema.String,
  full_name: Schema.String,
  owner: Schema.Struct({
    login: Schema.String,
  }),
});

// GitHub PR Head/Base Schema
export const GitHubRefSchema = Schema.Struct({
  ref: Schema.String,
  repo: GitHubRepoSchema,
});

// GitHub Pull Request Schema
export const GitHubPullRequestSchema = Schema.Struct({
  id: Schema.Number,
  number: Schema.Number,
  title: Schema.String,
  body: Schema.NullOr(Schema.String),
  html_url: Schema.String,
  state: Schema.Union(Schema.Literal("open"), Schema.Literal("closed")),
  created_at: Schema.String,
  updated_at: Schema.String,
  closed_at: Schema.NullOr(Schema.String),
  merged_at: Schema.NullOr(Schema.String),
  user: GitHubUserSchema,
  head: GitHubRefSchema,
  base: GitHubRefSchema,
});

// Contribution Type Schema
export const ContributionTypeSchema = Schema.Union(
  Schema.Literal("feature"),
  Schema.Literal("fix"),
  Schema.Literal("perf"),
  Schema.Literal("docs"),
  Schema.Literal("refactor"),
  Schema.Literal("test"),
  Schema.Literal("chore"),
);

// Contribution State Schema
export const ContributionStateSchema = Schema.Union(
  Schema.Literal("open"),
  Schema.Literal("closed"),
  Schema.Literal("merged"),
);

// Processed Contribution Schema
export const ProcessedContributionSchema = Schema.Struct({
  title: Schema.String,
  description: Schema.String,
  repository: Schema.String,
  link: Schema.String,
  date: Schema.String,
  type: ContributionTypeSchema,
  state: ContributionStateSchema,
});

// API Response Schema
export const ContributionsResponseSchema = Schema.Struct({
  success: Schema.Boolean,
  contributions: Schema.Array(ProcessedContributionSchema),
  count: Schema.Number,
});

// GitHub Search Response Schema
export const GitHubSearchResponseSchema = Schema.Struct({
  total_count: Schema.Number,
  items: Schema.Array(Schema.Unknown),
});

// Types inferred from Schemas
export type GitHubUser = Schema.Schema.Type<typeof GitHubUserSchema>;
export type GitHubRepo = Schema.Schema.Type<typeof GitHubRepoSchema>;
export type GitHubPullRequest = Schema.Schema.Type<
  typeof GitHubPullRequestSchema
>;
export type ProcessedContribution = Schema.Schema.Type<
  typeof ProcessedContributionSchema
>;
export type ContributionsResponse = Schema.Schema.Type<
  typeof ContributionsResponseSchema
>;
export type ContributionType = Schema.Schema.Type<
  typeof ContributionTypeSchema
>;
export type ContributionState = Schema.Schema.Type<
  typeof ContributionStateSchema
>;
