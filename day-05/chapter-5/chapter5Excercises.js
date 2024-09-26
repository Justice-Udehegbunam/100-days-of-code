// FLATTENING
const array = [
  [12, 1, 3],
  [1, 3, 5],
];

console.log(array.reduce((prev, current) => prev.concat(current), []));
// Syntax for reduce method: array.reduce(callback(accumulator, currentValue), initialValue)

// Yourownloop

const loop = (value, test, update, body) => {
  while (test(value)) {
    body(value);
    value = update(value);
  }
};

// EVERYTHING

const every = (array, predicate) => {
  for (const element of array) {
    if (!predicate(element)) return false;
  }
  return true;
};

const everyV2 = (array = [], predicate) => {
  return !array.some((element) => !predicate(element));
};

console.log(everyV2([1, 3, 5], (n) => n < 10));
// → true
console.log(everyV2([2, 4, 16], (n) => n < 10));
// → false
console.log(everyV2([], (n) => n < 10));
// → true
