// literal syntax
let counter = {};

// new instance of a class
class Counter {}
counter = new Counter();

// new instance of a construction function
function createCounter() {}
counter = new createCounter();

// new with a wrapper around a primitive
counter = new Number(1);

// Object wrapper around BigInt and Symbol
counter = Object(1n);

// Object.create() method
counter = Object.create({});

// Object.assign() method
counter = Object.assign({}, {});

// Additional static methods of Object that return an object
// Object.fromEntries() method
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
counter = Object.fromEntries(entries);

// Object.groupBy()
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
counter = Object.groupBy(inventory, ({ type }) => type);

// All functions, arrays, pseudoarrays are objects in JS
// basically, everything which is not primitive
// so, you can consider them as a form of creating objects
