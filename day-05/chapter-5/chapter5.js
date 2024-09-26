//  HIGHER-ORDER FUNCTIONS
// Abstraction:  Is an ability to be able to write code in a way an High level way, that stops us from worrying to much about the details.

/* It is a useful skill, in programming, to notice when you are working
at too low a level of abstraction. */

const greaterThan = (n) => {
  return (m) => m > n;
};

let greaterThan10 = greaterThan(10);
console.log(greaterThan10);

console.log(greaterThan10(11));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

let isNoisy = noisy(2);

noisy(Math.min)(3, 2, 1);

["A", "B"].forEach((l) => console.log(l));

let horseShoe = "🐴👟";
let test = "my name is justice";
console.log(horseShoe.length);

console.log(test[1]);
console.log(horseShoe[0]);
// �
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

/* JavaScript’s charCodeAt method gives you a code unit, not a full character code. The codePointAt method, added later, does give a full Unicode character */

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// 🌹
// 🐉
