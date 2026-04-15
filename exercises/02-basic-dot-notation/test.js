const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the nested value with dot notation", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/overview",
        message: "This exercise requires a real GET request to /overview."
      });

      if (result !== "Ana") {
        assert.fail(`Expected the nested profile name from GET /overview to be "Ana", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Luis") {
        assert.fail("You probably navigated to the second person instead of the profile requested in this exercise.");
      }
    }
  });
});
