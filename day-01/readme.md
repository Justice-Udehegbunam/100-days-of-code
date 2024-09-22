# Day 1: Eloquent JavaScript Journey

## Overview

Today marks the first day of my **100 Days of Code** challenge! I’ve chosen to start with _Eloquent JavaScript_ to reinforce my understanding of core JavaScript concepts. This book is highly recommended for its clarity and depth, making it an ideal starting point for anyone looking to master JavaScript.

## Chapters Completed

Today i was able to complete two solid chapters and am excited to share that its indeed amazingly resourceful.

### Chapter 1: Introduction

- **Key Concepts**:

  - What is programming?
  - Introduction to JavaScript syntax.

- **Learnings**:

  - **Basic Looping with while**: I learned how to use a while loop to accumulate a total, specifically calculating the sum of numbers from 1 to 10.

  - **Scientific Notation**: JavaScript can handle large numbers using scientific notation, which allows for a more manageable representation of such values.

  - **Special Numbers**: JavaScript has three special numeric values: Infinity, -Infinity, and NaN (Not a Number).

  - **String Comparison**: I learned how to compare strings based on their Unicode values, understanding that comparisons are made based on the first differing character's value.

  - **Operator Types**: There are different types of operators in JavaScript, including unary operators (like typeof), binary operators (such as +, -, /), and ternary operators that combine ? and : for conditional expressions.

  - **Type Conversion and Coercion**: Type coercion can lead to unexpected results, such as NaN, and it's important to be aware of how JavaScript handles types.

  - **Logical Operators**: JavaScript has two types of OR operators: ||, which performs type conversion and returns the first truthy value, and ??, which returns the right value only if the left is null or undefined.

  - **AND Operator**: The && operator checks if the left operand is truthy; if it is, it returns the left value.

- **Code Snippet**:

```javascript
let theAgeOfEarth = 1.02e8;
const division = theAgeOfEarth / 15000;

console.log(theAgeOfEarth); // outputs 102000000
console.log(division); // outputs 6800

/*  Special numbers
there are three special numbers in javascript
1. Infinity
2. -Infinity
3. NaN
 */
let number = 0 / 0;
console.log(number);

console.log("Aardvark" > "Zoroaster"); // Outputs: false
//Essentially what the above code does is that it checks the length of the two words and compares them
```

---

Off to chapter 2

---

## Learnings from Chapter 2: Programs Structure

- **Understanding Variables**: A variable should be thought of as a "binding" rather than just a container. This means that a variable name is tied to a value or the result of an operation.

- **Declaring Multiple Variables**: You can declare multiple variables using a single `let` keyword, as long as they are separated by commas.

- **Reserved Keywords**: There are specific names that cannot be used as variable names in JavaScript, such as `break`, `case`, `class`, `const`, and many more. Knowing these helps avoid syntax errors.

- **Environmental Context**: An environment in JavaScript is a collection of built-in bindings, which can help streamline coding by providing predefined values.

- **Exponentiation**: The `**` operator allows you to perform exponentiation, enabling you to raise a number to a power easily.

- **Loop Structures**: Understanding the syntax of `for` loops, including the initializer, condition, and increment, helps in creating efficient iterations.

### Assignments

1. **Triangle Output**: Created a loop to display a triangle pattern with increasing hash symbols:

```javascript
let hash = "#";
for (let i = 1; i <= 7; i++) {
  console.log(hash);
  hash += "#";
}
```

- Output was achieved using both `while` and `for` loops.

2. **FizzBuzz Program**: Implemented the FizzBuzz challenge, which prints numbers from 1 to 100, replacing multiples of 3 with "Fizz," multiples of 5 with "Buzz," and multiples of both with "FizzBuzz."

```javascript
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
```

3. **Chessboard Pattern**: Developed a program to create an 8x8 chessboard grid, alternating between spaces and hash symbols to visualize the pattern.

```javascript
let size = 8; // Defines the size of the grid
let board = "";

for (let row = 1; row <= size; row++) {
  if (row % 2 === 0) {
    board += " # # # #\n";
  } else {
    board += "# # # # \n";
  }
}

console.log(board);
```
