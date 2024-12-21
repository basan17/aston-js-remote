counter = Object.create({});

// Object.assign() method (Shallow Copy)
let counterCopy = Object.assign({}, counter);

// Using spread syntax (Shallow Copy)
counterCopy = { ...counter };

// JSON' stringify and parse methods (Deep Copy)
counterCopy = JSON.parse(JSON.stringify(counter));

// using 3rd-party libs like Lodash's _.cloneDeep()
// or browser structuredClone method (Deep Copy)
counterCopy = structuredClone(counter);

// custom function
function createDeepCopy(obj) {
  if (
    obj == null ||
    typeof obj != "object" ||
    Array.isArray(obj) ||
    typeof obj == "function"
  )
    return obj;

  const result = {};

  const keys = Object.keys(obj);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = createDeepCopy(obj[key]);
    }
  }
  return result;
}
