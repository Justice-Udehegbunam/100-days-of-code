// FUNCTIONS

/* There are two methods of creating functions these are
1.  Function Binding: ie assigning a function to a variable
2. Direct Function declaration */

//  Function Binding
const humus = (factor) => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) unit += "s";

    console.log(`${ingredientAmount} ${unit}, ${name}`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
};

// humus(10);

// const myName = () => {
//   console.log("Justice");
// };

// if (noName) {
//   const myName = "nothing";
// }

// The above shows that a function binded can still be redeclared in a sub-block but not in the same block

// console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}
// the above shows the syntax of function declaration and the potential issues it poses such that a function declaration can be initiated even before its created!

// but it is particularly useful when you are still trying to figure out how to structure a combination of functions. because "conceptually" function declarations are moved to the top when being processed

/* When a function is instantiated it is stored in a CALL STACK: this holds th curent context.

Storing this stack requires space in the computer’s memory. When
the stack grows too big, the computer will fail with a message like “out
of stack space” or “too much recursion”.
*/
// EXAMPLE
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}
// console.log(chicken() + " came first.");

// Outputs: RangeError: Maximum call stack size exceeded
// at egg (C:\Users\user\Desktop\lets-go\eloquent-js\chapter-3\chapter3.js:54:3)
// at chicken (C:\Users\user\Desktop\lets-go\eloquent-js\chapter-3

// DEFAULT PARAMETERS:  The function below shows default parameters whereby step is assigned a default value pf  1  but it can be reassigned when invoked.
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}

// CLOSURES: This is an interesting aspect of programming which shows the binding nature of variable  declaration

// EXAMPLE
const multiplier = (factor) => {
  return (number) => number * factor;
};
let twice = multiplier(2);
// console.log(twice(6));
/* In this code multiplier is th main function that is assigned to a return statement which returns a function BUT when the function is being  bounded to a variable the variable actually takes the result of the function call (i.e the actual work the function is assigned) in this case which is another function call*/

// RECURSION
/* Remember the max stack error that was due to what is called recursion: this is when a function calls itself multiple times.

of which in some program it can be neccessary and also useful. */
// Example "Exponentiation function"
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
// console.log(power(3, 1));

// which is the same as this operator
// console.log(3 ** 3);

/* However, this implementation has one problem: in typical JavaScript
implementations, it’s about three times slower than a version using a
for loop. Running through a simple loop is generally cheaper than calling a function multiple times. */

// pg 77

const noofAnimals = (animal, name) => {
  if (animal == 1 || animal == 0) console.log(`00${animal} ${name}`);
  else {
    if (animal < 10) {
      console.log(`00${animal} ${name}s`);
    } else if (animal < 100) {
      console.log(`0${animal} ${name}s`);
    } else {
      console.log(`To many ${name}s`);
    }
  }
};

const animals = (cow, pig, goat) => {
  noofAnimals(cow, "Cow");
  noofAnimals(goat, "Goat");
  noofAnimals(pig, "Pig");
};

animals(1, 0, 188);
