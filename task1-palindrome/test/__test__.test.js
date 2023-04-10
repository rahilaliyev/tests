// !Do not change test cases
const { describe } = require("@jest/globals");

const palindrome = require("../task1");

const { testCasesTask1 } = require("../utils/cases");

describe("Task1-findLetterCount", () => {
  testCasesTask1.forEach((test) => {
    console.log(test);
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = palindrome(test.input);
      expect(res).toEqual(test.output);
    });
  });
});
