const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("combines arrays, objects, and bracket notation", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "GET",
        path: "/overview",
        message: "This exercise requires a real GET request to /overview."
      });

      if (result !== "Marco Diaz") {
        assert.fail(`Expected the mixed-path lookup result to be "Marco Diaz", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Ana Perez") {
        assert.fail("You found a valid full name, but it belongs to another branch of the JSON response.");
      }
    }
  });
});
