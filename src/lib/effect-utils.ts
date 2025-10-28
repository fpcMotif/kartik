import { Schema } from "@effect/schema";
import { Data, Effect } from "effect";

// Error type definitions
export class NetworkError extends Data.TaggedError("NetworkError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

export class ParseError extends Data.TaggedError("ParseError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

export class ValidationError extends Data.TaggedError("ValidationError")<{
  readonly message: string;
  readonly errors: ReadonlyArray<unknown>;
}> {}

export class GitHubAPIError extends Data.TaggedError("GitHubAPIError")<{
  readonly message: string;
  readonly statusCode?: number;
  readonly cause?: unknown;
}> {}

// Union error type
export type FetchError =
  | NetworkError
  | ParseError
  | ValidationError
  | GitHubAPIError;

// Type-safe fetch wrapper
export const safeFetch = <A, I, R>(
  url: string,
  schema: Schema.Schema<A, I, R>,
  options?: RequestInit,
): Effect.Effect<A, FetchError, R> => {
  return Effect.gen(function* () {
    // Execute fetch
    const response: Response = yield* Effect.tryPromise({
      try: () => fetch(url, options),
      catch: (error) =>
        new NetworkError({
          message: `Network request failed: ${url}`,
          cause: error,
        }),
    });

    // Check HTTP status
    if (!response.ok) {
      return yield* Effect.fail(
        new GitHubAPIError({
          message: `HTTP error: ${response.status} ${response.statusText}`,
          statusCode: response.status,
        }),
      );
    }

    // Parse JSON
    const data: I = yield* Effect.tryPromise({
      try: () => response.json() as Promise<I>,
      catch: (error) =>
        new ParseError({
          message: "Failed to parse JSON response",
          cause: error,
        }),
    });

    // Schema validation
    const validated: A = yield* Schema.decodeUnknown(schema)(data).pipe(
      Effect.mapError(
        (error) =>
          new ValidationError({
            message: "Schema validation failed",
            errors: [error],
          }),
      ),
    );

    return validated;
  }) as Effect.Effect<A, FetchError, R>;
};

// Fetch with retry (3 attempts)
export const safeFetchWithRetry = <A, I, R>(
  url: string,
  schema: Schema.Schema<A, I, R>,
  options?: RequestInit,
): Effect.Effect<A, FetchError, R> =>
  safeFetch(url, schema, options).pipe(
    Effect.retry({
      times: 3,
    }),
  );

// Logging helper function
export const logError = (error: FetchError): Effect.Effect<void> =>
  Effect.sync(() => {
    console.error(`[Effect Error] ${error._tag}:`, error.message);
    if ("cause" in error && error.cause) {
      console.error("Cause:", error.cause);
    }
    if (error._tag === "ValidationError") {
      console.error("Validation errors:", error.errors);
    }
  });

// Graceful degradation: return default value on failure
export const withFallback =
  <A>(fallback: A) =>
  <E>(effect: Effect.Effect<A, E>): Effect.Effect<A, never> => {
    return effect.pipe(
      Effect.catchAll((error) =>
        Effect.gen(function* () {
          yield* logError(error as FetchError);
          return fallback;
        }),
      ),
    ) as Effect.Effect<A, never>;
  };
