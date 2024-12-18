// getLength.js
export function getLength(obj) {
  const defaultValue = 0;
  // Check for null object
  if (obj == null) {
    console.log(defaultValue);
    return 0;
  }
  // Check if the input is iterable
  if (obj[Symbol.iterator] && typeof obj[Symbol.iterator] === "function") {
    // Check if an iterable has a `size` property
    if (typeof obj === "object" && "size" in obj) {
      console.log(obj.size);
      return obj.size;
    }
    // else returns its length
    console.log(obj.length);
    return obj.length;
  }
  // Check if it's a function
  if (typeof obj === "function") {
    console.log(obj.length);
    return obj.length;
  }
  // Check if it's a plain object
  if (typeof obj === "object") {
    console.log(Object.keys(obj).length);
    return Object.keys(obj).length;
  }
  // in all other cases returns 0 (default value)
  console.log(defaultValue);
  return 0;
}
