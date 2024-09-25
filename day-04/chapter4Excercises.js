/* 1. Function to get Range */

const range = (a, b, c = 1) => {
  const res = [];
  if (c > 0) {
    for (let i = 0; a <= b; i++) {
      res.push(a);
      a += c;
    }
  } else {
    for (let i = 0; a >= b; i++) {
      res.push(a);
      a += c;
    }
  }
  return res;
};

// console.log(range(-8, -1, 2)); // Works as expected
// console.log(range(10, 0, -2)); // Should now work for negative step values

// the c =1 there is used to initialize a default operator though i thought it was the same with typescript like c? = 1 but o saw that i dont need that

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* 2.  Sum of the numbers in an Array */

const sum = (numbers) => {
  let res = 0;
  for (const element of numbers) {
    res += element;
  }
  return res;
};

// console.log(sum(test));

/* ehe i knew i needed a for of loop but from what i know can this also work with objects ?

ChatGPT said:
Great question! A for...of loop works well with arrays, but when dealing with objects in JavaScript, it won't work directly because objects aren't iterable like arrays. Instead, for objects, you use a for...in loop or other methods to iterate over the object's properties.

If you want to sum values from an object (where the values are numbers), you can use a for...in loop to iterate over the object's keys and then sum the values. Here’s an example of how you can do this:

const sumObject = (obj) => {
  let total = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') { // Ensure we're summing only number values
      total += obj[key];
    }
  }
  return total;
};

// Example usage:
const numbersObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(sumObject(numbersObj)); // Output: 10
*/

/* 2. Reversing an array */

const reverseArray = (arr = []) => {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
};

let arr = [1, 2, 3, 4, 5];
let left = 0;
let right = 4;

// Before swap:
// console.log(arr); // [1, 2, 3, 4, 5]

// Swapping elements at index 0 and 4
[arr[left], arr[right]] = [arr[right], arr[left]];

// console.log(arr);

const reverseArrayInPlace = (arr = []) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at the left and right indices
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

console.log(reverseArray([1029, 3, 4, 5, 9, 0]));
console.log(reverseArrayInPlace([2, 3]));

// A LIST

const arrayToList = (arr = []) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    };
  }
  console.log(list.rest);
  console.log(JSON.stringify(list, null, 2));

  return list;
};

console.log(arrayToList([1, 2, 3, 4]));

// ListToArray function

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

// console.log(
//   listToArray({
//     value: 1,
//     rest: {
//       value: 2,
//       rest: {
//         value: 3,
//         rest: {
//           value: 4,
//           rest: null,
//         },
//       },
//     },
//   })
// );

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// DEEP COMPARISON

const deepEqual = (a, b) => {
  console.log(a, b);

  if (a === b) return true;
  if (
    a === null ||
    b === null ||
    typeof a != "object" ||
    typeof b != "object"
  ) {
    return `1st ${false}`;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return `2nd ${false}`;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
};

//console.log(deepEqual({ a: 10 }, { b: "10" }));
