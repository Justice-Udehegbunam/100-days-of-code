// "use strict" introduction

/* Discussion
Key Differences:
Error Handling:

"use strict" handles runtime errors like undeclared variables or using reserved words.
TypeScript enforces compile-time checks, catching issues like type mismatches before the code runs.
Scope:

"use strict" applies to specific JavaScript files or functions.
TypeScript is used across an entire codebase and introduces features beyond error handling, like type annotations, interfaces, and classes.
Type Safety:

"use strict" does not introduce any type safety; JavaScript remains dynamically typed.
TypeScript introduces static type checking to catch errors related to types (e.g., assigning a string to a variable expecting a number).
Syntax Additions:

"use strict" doesn't change the syntax of JavaScript; it simply enforces stricter behavior.
TypeScript extends JavaScript's syntax by adding types, interfaces, enums, and more, but compiles down to plain JavaScript. */

function canYouSpotTheProblem() {
  // "use strict";
  for (counter = 0; counter < 10; counter++) {
    //   console.log("Happy happy");
  }
}

canYouSpotTheProblem();

function Person(name) {
  this.name = name;
}
let ferdinand = new Person("Ferdinand"); // oops
// console.log(ferdinand.name); // undefined

/* Funny Quote for today
In this book, we will continue using raw, dangerous, untyped JavaScript code. */

// Testing

function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);

  console.log(body());
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO"; // comparison operator that in this case returns true
});

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + +result;
    debugger; // this used on the browser to set the line or breakpoint at which it should stop executing a program for testing

    //but more modernly u can just go to the dev tools and the sources tab then navigate to the script file u are working with.

    Math.floor((n /= base));
  } while (n > 0);
  {
    console.log(n);
    return sign + result;
  }
}
console.log(numberToString(13, 10));
