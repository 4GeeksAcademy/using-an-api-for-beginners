const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("gets the correct item by id", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/items/2",
        message: "This exercise requires a real GET request to /items/2."
      });

      if (result !== "Luis Gomez") {
        assert.fail(`Expected the nested full name from GET /items/2 to be "Luis Gomez", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Ana Perez") {
        assert.fail("You likely fetched or navigated to item 1 instead of item 2.");
      }
    }
  });
});
