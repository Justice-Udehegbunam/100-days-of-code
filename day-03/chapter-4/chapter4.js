/*  A stack, in programming, is a data structure that allows you
to push values into it and pop them out again in the opposite order so
that the thing that was added last is removed first.  */

const myObj = {
  name: "Justice",
  class: "100lvl",
  sch: "unn",
  course: "Computer Science",
};

Object.assign(myObj, { sch: "UNN", hobbies: "coding, singing", id: 1 });
// console.log(myObj);

delete myObj.class;
// console.log(myObj);

// This goes to show that Objects are mutable and are the only ones out of the 8 that has this property

console.log(typeof []);
// and that arrays are also still objects.

/* Arrays, then, are just a kind of object specialized for storing sequences
of things. If you evaluate typeof [], it produces "object". You can
visualize arrays as long, flat octopuses with all their tentacles in a neat
row, labeled with numbers. */

/* When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code: */
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
// console.log(object1 == object2);
// → true
// console.log(object1 == object3);
// → false
object1.value = 15;
// console.log(object2.value);
// → 15
// console.log(object3.value);
// → 10

/* The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same "identity". The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life. */

const journal = [];

const addEntry = (event, squirrel) => {
  journal.push({ event, squirrel });
};

addEntry("game", false);

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);

delete journal[0]; // Using this works but it returns this in the particular object position "<1 empty item>" The issue you're facing is due to how JavaScript handles array deletions. When you use the delete operator on an array, it removes the item but leaves an "empty slot" in its place. This is why you see <1 empty item> in the console.

journal.splice(0, 1); // this is a better way to do it

console.log(journal);

/* ARRAY METHODS */
// CONSIDER THIS analogy
//  Array ".push" pushes to the end of the array WHILE ".unshift" pushes to the beginning of the array
//  Array ".pop" removes the end of the array WHILE ".shift" removes the beginning of the array

/* To search for a specific value, arrays provide an indexOf method.
The method searches through the array from the start to the end and
returns the index at which the requested value was found—or -1 if it
wasn’t found. To search from the end instead of the start, there’s a
similar method called lastIndexOf:
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
Both indexOf and lastIndexOf take an optional second argument that
indicates where to start searching.
Another fundamental array method is slice, which takes start and
end indices and returns an array that has only the elements between
them. The start index is inclusive and the end index is exclusive.
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
When the end index is not given, slice will take all of the elements
after the start index. You can also omit the start index to copy the
entire array.
The concat method can be used to append arrays together to create
a new array, similar to what the + operator does for strings. */

const test = "added to array";
const Arr = [1, 2, 24, "obi"];

let concat = Arr.concat(test);

// console.log(concat);
//  this adds the concat variable value to the array

// SIMILAR METHODS IN STRINGS AND ARRAYS

console.log(test.slice(0, 1)); // it returns "a" i.e the first value in the test variable as if it was an array.

console.log(test.indexOf("t", 4)); // Returns the first occurence of that parameter in the variable and the 4 there which is optional tells it to basically start from the particular number + 1.

const age = "10";
let ageInTenYears = age.padStart(2, "0");

console.log(ageInTenYears);

function max(...numbers) {
  let result = -Infinity;
  109;
  for (let number of numbers) {
    if (number > result) result = number;
    console.log({ number });
  }

  return result;
}
console.log(max(4, 1, 9, -2));

/* Breakdown:
let number of numbers:
numbers is the iterable (an array in this case) that contains multiple elements.
number is a variable that holds the current element being iterated over.
This is not the same as let number = numbers:

let number = numbers would assign the entire array numbers to the variable number. In contrast, let number of numbers assigns each individual element of the numbers array to number in every iteration. */

let spreadOfTest = ["abs", ...test]; // this spreads each one od the string even spaces into individual elements in the array and returns a new array like so
console.log(spreadOfTest); /* [
  'abs', 'a', 'd', 'd',
  'e',   'd', ' ', 't',
  'o',   ' ', 'a', 'r',
  'r',   'a', 'y'
] */

// DESTRUCTURING

const array2 = [1, 2, 61, 58, 90, 10];

const phi = ([n00, n01, n02, n03]) => {
  return (
    (n03 * n00 - n02 * n01) /
    Math.sqrt((n02 + n03) * (n00 + n01) * (n01 + n03) * (n00 + n02))
  );
};

const newArray = array2.slice(0, 5);

console.log(newArray);

console.log(phi([...newArray]));

console.log(array2?.[1]);
//Can you see something funny here ordinarily this is a bracket notation call but when you are trying to introduce something that you arent sure off i.e "?" you just have to make ot a dot notation call to get it to work.

// JSON FEATURES
/* 
1. it is a serialization method for data
2. it is similar to js but with few restrictions: 
a. All property names has to be surrounded with double quotes
b. only simple data is allowed
 */
