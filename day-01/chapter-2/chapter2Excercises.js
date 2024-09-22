//  Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// SOLN
let hash = "#";
// let i = 1;
// while (i <= 7) {
//   console.log(hash);
//   hash = hash + "#";
//   i++;
// }

// for (let i = 1; i <= 7; i++) {
//   console.log(hash);
//   hash += "#";
// }

// CORRECTION
// for (let line = "#"; line.length < 8; line += "#") console.log(line);

// No.2 FIZZ BUZZ program
let number = 1;

// for (let i = 1; i <= 100; i++) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
//   number++;
// }

// let i = 1;
// while (i <= 100) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
//   number++;
//   i++;
// }

console.log("\n Correction \n");

// CORRECTION
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

// CHESSBOARD
/* Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

 */

let rowNumber = 1;
while (rowNumber <= 9) {
  if (rowNumber % 2 === 0) {
    console.log("\b # # # #");
  } else {
    console.log("# # # # \b");
  }
  rowNumber++;
}

// Correction
// let size = 8; // Defines the size of the grid
// let board = "";

// for (let row = 1; row <= size; row++) {
//   if (row % 2 === 0) {
//     board += " # # # #\n";
//   } else {
//     board += "# # # # \n";
//   }
// }

// console.log(board);
