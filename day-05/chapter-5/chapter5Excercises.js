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
