const { findComplement, getCount, longestString } = require("./index.js");

describe("findComplement", () => {
  it("should return [2,7] for [2,7,11,15] for target 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = findComplement(nums, target);
    expect(result).toEqual([2, 7]);
  });
});

describe("getCount", () => {
  it(`should return {"apple": 2, "banana": 2, "cherry": 1} for input of ["apple", "banana", "apple", "cherry", "banana"]`, () => {
    const input = ["apple", "banana", "apple", "cherry", "banana"];
    const expected = { apple: 2, banana: 2, cherry: 1 };
    const actual = getCount(input);
    expect(actual).toEqual(expected);
  });
});
describe("longestString", () => {
  it(`should return The longest substring without repeating characters is abc`, () => {
    const input = "abcabcbb";
    const expected = "The longest substring without repeating characters is abc";
    const actual = longestString(input);
    expect(actual).toEqual(expected);
  });
});
