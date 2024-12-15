// compare.test.js
import { describe, it, expect, test } from "vitest";
import { compare } from "../compare.js";

// Node class and compare function as provided
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function compare(r1, r2) {
  if (r1 === null && r2 === null) return true;
  if (r1 === null || r2 === null) return false;
  return (
    r1.data === r2.data &&
    compare(r1.left, r2.left) &&
    compare(r1.right, r2.right)
  );
}

describe(`
  Accepts two nodes with a structure Tree and
  compares if they are identical`, () => {
  it("should return true for identical trees", () => {
    let r1 = new Node(1);
    r1.left = new Node(2);
    r1.right = new Node(3);
    r1.left.left = new Node(4);

    let r2 = new Node(1);
    r2.left = new Node(2);
    r2.right = new Node(3);
    r2.left.left = new Node(4);

    expect(compare(r1, r2)).toBe(true);
  });

  it("should return false for trees with different structures", () => {
    let r1 = new Node(1);
    r1.left = new Node(2);
    r1.right = new Node(3);

    let r2 = new Node(1);
    r2.left = new Node(2);

    expect(compare(r1, r2)).toBe(false);
  });

  it("should return false for trees with different values", () => {
    let r1 = new Node(1);
    r1.left = new Node(2);
    r1.right = new Node(3);

    let r2 = new Node(1);
    r2.left = new Node(2);
    r2.right = new Node(4); // Different value

    expect(compare(r1, r2)).toBe(false);
  });

  it("should return true for two empty trees", () => {
    expect(compare(null, null)).toBe(true);
  });

  it("should return false for one empty tree and one non-empty tree", () => {
    let r1 = new Node(1);

    expect(compare(r1, null)).toBe(false);
  });
});
