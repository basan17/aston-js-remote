import { describe, it, expect, test } from "vitest";
import { getLength } from "../getLength.js";

describe(`
  Accepts any valid js input and 
  returns its lenght if it's possible`, function () {
  test("string returns 6", () => {
    expect(getLength("string")).toBe(6);
  });

  test("Array [1, 2, 3] returns 3", () => {
    expect(getLength([1, 2, 3])).toBe(3);
  });

  test("number 4 returns 0", () => {
    expect(getLength(4)).toBe(0);
  });

  test("null returns 0", () => {
    expect(getLength(null)).toBe(0);
  });

  test("undefined returns 0", () => {
    expect(getLength(undefined)).toBe(0);
  });

  test("function returns 0", () => {
    expect(getLength(() => {})).toBe(0);
  });

  test("object returns 0", () => {
    expect(getLength({ name: "Bob", surname: "Smith" })).toBe(0);
  });

  test("Symbol() returns 0", () => {
    expect(getLength(Symbol())).toBe(0);
  });
});
