// MINIMUM
// Define the function min that takes two arguments and returns their minimum

// SOLN
const min = (a, b) => {
  if (a > b) {
    console.log(b);
  } else {
    console.log(a);
  }
};

// min(10, 8);

// RECURSION
/* Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole num-
ber) and return a Boolean. */

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};

console.log(isEven(-1));

// Bean counting
/* 1. Write a function called countBs that takes a string as its only ar-
gument and returns a number that indicates how many uppercase B
characters there are in the string. */

// Soln
const countBs = (isb = "") => {
  let stringArr = isb.split("B");
  console.log(stringArr);
  console.log(stringArr.length - 1);
};

countBs(
  "Bade bolu Bode Baki veans djvbh Beans tell me my Breast cant Be your "
);

/* 2. Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that
is to be counted (rather than counting only uppercase B characters).
Rewrite countBs to make use of this new function.
 */

const countChar = (str = "", char = "") => {
  let stringArr = str.split(char);
  return stringArr.length - 1;
};

const countBsTwo = countChar(
  "Bade bolu Bode Baki veans djvbh Beans tell me my Breast cant Be your ",
  "a"
);

console.log(countBsTwo);

// CORRECTION: JUST FOR EFFICIENCY PURPOSES
// const countChar = (str = "", char = "") => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   };

//   const countBsTwo = countChar(
//     "Bade bolu Bode Baki veans djvbh Beans tell me my Breast cant Be your ",
//     "a"
//   );

//   console.log(countBsTwo); // Output will be the number of "a"s
