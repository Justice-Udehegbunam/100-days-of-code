# Day 2 of 100 Days of Code

## What I learned:

- **Variables as Bindings**: Variables in JavaScript act more like tentacles that grasp values rather than containers. They can easily point to new values at any time.
- **Program Structure**: Explored loops and control structures to make dynamic programs.
- **FizzBuzz Challenge**: Solved the FizzBuzz problem using loops and conditionals.
- **Chessboard Challenge**: Created a program to generate an 8x8 chessboard pattern using loops.s

## Code Challenges:

### 1. FizzBuzz Solution:

```javascript
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
```

### 2. Chessboard Pattern:

```javascript
let size = 8;
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

---

### **Day 2 Reflection:**

Today, I practiced structuring programs and understanding how variables behave in JavaScript. Solving FizzBuzz and creating patterns with loops really helped reinforce key concepts.

---
