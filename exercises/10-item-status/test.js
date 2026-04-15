const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the boolean status from the item detail endpoint", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/items/2",
        message: "This exercise requires a real GET request to /items/2."
      });

      if (result !== true) {
        assert.fail(`Expected the item status to be true, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === false) {
        assert.fail("You are likely reading the status of a different item or the wrong field.");
      }
    }
  });
});
