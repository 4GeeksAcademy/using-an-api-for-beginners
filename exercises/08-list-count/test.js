const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the collection count", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/items",
        message: "This exercise requires a real GET request to /items."
      });

      if (result !== 2) {
        assert.fail(`Expected the collection count to be 2, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === 3) {
        assert.fail("This looks like a guessed count, not the current collection size from the API response.");
      }
    }
  });
});
