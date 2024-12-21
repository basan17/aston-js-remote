// declarative function
function makeCounter() {}

// function expression
let makeCounter = function () {};

// arrow function
let makeCounter = () => {};

// NFE
let makeCounterFunc = function makeCounter() {};

// construction functions
function makeCounter() {}

// higer order functions
function someFunc() {
  function makeCounter() {}
  return makeCounter;
}

// IIFE
(function makeCounter() {})();
