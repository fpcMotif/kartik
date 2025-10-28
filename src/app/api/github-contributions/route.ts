import { Effect } from "effect";
import { type NextRequest, NextResponse } from "next/server";
import { type FetchError, logError } from "@/lib/effect-utils";
import {
  fallbackContributions,
  fetchUserPullRequestsEffect,
} from "@/lib/github";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") || "KartikLabhshetwar";
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10);

    // Execute using Effect runtime
    const program = fetchUserPullRequestsEffect(username, limit).pipe(
      Effect.catchAll((error: FetchError) =>
        Effect.gen(function* () {
          // Log error
          yield* logError(error);

          // Return fallback data
          return fallbackContributions;
        }),
      ),
      Effect.map((contributions) => ({
        success: true as const,
        contributions,
        count: contributions.length,
      })),
    );

    const result = await Effect.runPromise(program);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Unexpected error in github-contributions API:", error);

    // Return fallback data on any unexpected error
    return NextResponse.json({
      success: true,
      contributions: fallbackContributions,
      count: fallbackContributions.length,
    });
  }
}
