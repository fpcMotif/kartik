// 简单测试 Effect 集成
import { Effect } from "effect";
import { fetchUserPullRequestsEffect } from "./src/lib/github";

async function test() {
  console.log("Testing Effect integration...");

  const program = fetchUserPullRequestsEffect("KartikLabhshetwar", 10).pipe(
    Effect.catchAll((error) =>
      Effect.sync(() => {
        console.error("Error occurred:", error);
        return [];
      }),
    ),
  );

  const result = await Effect.runPromise(program);
  console.log(`Fetched ${result.length} contributions`);
  console.log("First contribution:", result[0]);
  console.log("✅ Effect integration working!");
}

test().catch(console.error);
