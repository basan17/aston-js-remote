// compare.test.js
import { describe, it, expect, test } from "vitest";
import { deepEqual } from "../deepEqual.js";

describe(`
  Accepts two nodes with a structure Tree and
  compares if they are identical`, () => {
  it("should return false for different objects", () => {
    let obj1 = { a: 1 };
    let obj2 = { a: 2 };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  it("should return false for different objects", () => {
    let obj1 = { a: 1 };
    let obj2 = { a: 1 };

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  it("should return false for different objects", () => {
    let obj1 = { a: 1, b: 1 };
    let obj2 = { a: 2, b: 2, c: 3 };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  it("should return true for two null objects", () => {
    expect(deepEqual(null, null)).toBe(true);
  });

  it("should return false for one empty object and one non-empty object", () => {
    let obj = { a: 1 };

    expect(deepEqual(obj, {})).toBe(false);
  });

  it("should return false for one empty object and one null object", () => {
    expect(deepEqual(null, {})).toBe(false);
  });

  it("should return false for different objects", () => {
    let obj1 = { a: 1, b: { d: 4, e: 5 }, c: 3 };
    let obj2 = { a: 2, b: { d: 4, e: 6 }, c: 3 };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  it("should return true for the same objects", () => {
    let obj1 = { a: 1, b: { d: 4, e: 5 }, c: 3 };
    let obj2 = { a: 1, c: 3, b: { d: 4, e: 5 } };

    expect(deepEqual(obj1, obj2)).toBe(true);
  });
});
