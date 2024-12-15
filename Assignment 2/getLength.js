// getLength.js
export function getLength(obj) {
  if (obj == null) {
    return 0;
  }
  if (typeof obj[Symbol.iterator] === "function") {
    return obj.length;
  }
  return 0;
}
