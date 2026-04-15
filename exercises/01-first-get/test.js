const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("returns the expected value for the first GET request", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/overview",
        message: "This exercise requires a real GET request to /overview. Hardcoded answers do not pass."
      });

      if (result !== "API is ready") {
        assert.fail(`Expected the value from GET /overview to be "API is ready", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "api is ready") {
        assert.fail('You found a very similar string, but the exact value is case-sensitive: "API is ready".');
      }
    }
  });
});
