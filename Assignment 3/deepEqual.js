// const obj1 = { here: { is: "on", other: "2" }, object: "Z" };
// const obj2 = { here: { is: "on", other: "2" }, object: "i" };

export function deepEqual(obj1, obj2) {
  // Check if both are the same reference
  if (obj1 === obj2) return true;

  // Check if either is null or not an object (including arrays)
  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  // Get keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is different
  if (keys1.length !== keys2.length) return false;

  // Recursively check each key and value
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
