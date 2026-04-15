const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("navigates arrays correctly", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/overview",
        message: "This exercise requires a real GET request to /overview."
      });

      if (result !== 30) {
        assert.fail(`Expected the target score from the nested arrays to be 30, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === 20) {
        assert.fail("You are close, but this looks like a nearby score from the same array, not the final target value.");
      }
    }
  });
});
