const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the title from the item detail endpoint", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/items/1",
        message: "This exercise requires a real GET request to /items/1."
      });

      if (result !== "Map the campus") {
        assert.fail(`Expected the first item title to be "Map the campus", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Review nested JSON") {
        assert.fail("You are reading the title of the wrong resource.");
      }
    }
  });
});
