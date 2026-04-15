const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads a value from an array of objects", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/overview",
        message: "This exercise requires a real GET request to /overview."
      });

      if (result !== "luis@example.com") {
        assert.fail(`Expected the email inside the array of objects to be "luis@example.com", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "ana@example.com") {
        assert.fail("You returned the first contact email, but this exercise points to a different object in the array.");
      }
    }
  });
});
