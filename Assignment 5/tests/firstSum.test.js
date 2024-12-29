// compare.test.js
import { describe, it, expect, test } from "vitest";
import { firstSum } from "../advance.js";

describe(`
  Returns the first pair of numbers whose sum is equal to the second param`, () => {
  it("", () => {
    expect(firstSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)).toEqual([6, 7]);
  });

  it("", () => {
    expect(firstSum([1, 2, 3], 3)).toEqual([1, 2]);
  });

  it("", () => {
    expect(firstSum([1, 2, 3], 5)).toEqual([2, 3]);
  });

  it("", () => {
    expect(firstSum([1, 2, 3], 6)).toEqual([]);
  });
});
