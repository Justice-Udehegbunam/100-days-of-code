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

// Cleaning up after exceptions

// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new Error("Invalid direction: " + result); // the throw new error is use to create An excption that then will be handled in a try/catch block
// }
// function look() {
//   if (promptDirection(`Which way? \n 'Left' / 'Right'`) == "L") {
//     return "a house";
//   } else {
//     return "two angry bears";
//   }
// }
// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error.message); // this gives the message gotten from the stack about the error

//   // While this "error.stack" gives the full resource and links to debug the code
// }

// for (;;) {
//   try {
//     let dir = promptDirection("Where?"); // ← typo!
//     console.log("You chose ", dir);
//     break;
//   } catch (e) {
//     console.log("Not a valid direction. Try again."); // This is called a blanket-catch which just means that handling all forms of error with a generic message
//   }
// }
// The for (;;) construct is a way to intentionally create a loop that doesn’t terminate on its own.

/* As a general rule, don’t blanket-catch exceptions unless it is for the purpose of “routing” them somewhere—for example, over the network to tell another system that our program crashed */

// How to catch Specific kinds of exceptions

/* A way to fix that infinte loop such that the catch block only deals with error that are under the properies of the Error class is t create a new extension ("So as to not affect the flow with the globals") the error object like so */
class inputError extends Error {}

//  then

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new inputError("Invalid direction" + result);
}

for (;;) {
  for (;;) {
    try {
      let dir = promptDirection("Where?"); // ← typo!
      console.log("You chose ", dir);
      break;
    } catch (e) {
      if (e instanceof inputError) {
        console.log("Not a valid direction. Try again.");
      }
      throw e;
    }
  }
}

// Assertions
// Assertions are checks inside a program that verify that something is the way it is supposed to be
// They are used not to handle situations that can come up in normal operation but to find programmer mistakes (i.e something that is actually normal but your program doesnt need that) e.g

function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
