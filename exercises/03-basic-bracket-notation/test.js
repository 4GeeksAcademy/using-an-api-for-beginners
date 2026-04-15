const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the value that requires bracket notation", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/overview",
        message: "This exercise requires a real GET request to /overview."
      });

      if (result !== "1.0") {
        assert.fail(`Expected the API version from GET /overview to be "1.0", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "2.0") {
        assert.fail("You are returning a version string, but not the one present in the current response.");
      }
    }
  });
});
