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

  test("object with 2 properties returns 2", () => {
    expect(getLength({ name: "Bob", surname: "Smith" })).toBe(2);
  });

  function func1(a, b) {
    return a + b;
  }
  test("function with 2 parameters returns 2", () => {
    expect(getLength(func1)).toBe(2);
  });

  function func2(a, b, c) {
    return a + b + c;
  }
  test("function with 3 parameters returns 3", () => {
    expect(getLength(func2)).toBe(3);
  });

  const mySet1 = new Set();
  mySet1.add(1);
  mySet1.add(5);
  test("a set with 2 values returns 2", () => {
    expect(getLength(mySet1)).toBe(2);
  });

  test("Symbol() returns 0", () => {
    expect(getLength(Symbol())).toBe(0);
  });
});
