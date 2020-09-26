const letterCombinations = require('./LetterCombinations')

const input = "23"
const output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

test("displays all possible letter combinations for a set of numbers", () => {
    expect(letterCombinations(input)).toStrictEqual(output)
})