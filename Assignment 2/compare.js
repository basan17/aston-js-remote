// Javascript program to see if two trees are identical
// using DFS
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// Function to check if two trees are identical
export function compare(r1, r2) {
  // If both trees are empty, they are identical
  if (r1 === null && r2 === null) return true;

  // If only one tree is empty, they are not identical
  if (r1 === null || r2 === null) return false;

  // Check if the root data is the same and
  // recursively check for the left and right subtrees
  return (
    r1.data === r2.data &&
    compare(r1.left, r2.left) &&
    compare(r1.right, r2.right)
  );
}
