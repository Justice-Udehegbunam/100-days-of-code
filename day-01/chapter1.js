let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
  //console.log(total);
}
//console.log("final total:", total);

let theAgeOfEarth = 1.02e8;

const division = theAgeOfEarth / 15000;

// console.log(theAgeOfEarth); // outputs 102000000
// console.log(division); // outputs 6800

/*  Special numbers 
there are three special numbers in javascript 
1. Infinity
2. -Infinity
3. NaN
 */
let number = 0 / 0;

//console.log(number);

//console.log("Aardvark" > "Zoroaster"); // Outputs: false
// Essentially what the above code does is that it checks the length of the two words and chompares them

//console.log("a" < "A");
// You can see the film above this is an example that accurately illustrates that every single value in js is stored as characters especially as with "String" types they use Unicode Number (ie the assigned number for the letter) which for A = 65 while for a = 97

//console.log("gA" > "Ga"); // 168 > 168

/* Example of operators that i forget
&& and
% modulo/remainder
|| or
! not
== equals
!=  not equals
=== strict equals
!== not strict equals */

/* Operators are of three types 
1. Unary operators: "typeof", "!"
2. Binary operators:  "+,  - , /," etc
3. Ternary operator:  that is the ccombination of "?" and ":" to create if-else statements */

/* TYPE CONVERSION/COERSION
// NOTE:  when you start to se the value "NaN" just check for an accidental type conversion
*/
/* console.log(null == undefined); */
// → true

// There are two type of OR operators one is the "||" and the other is "??" the first checks if the left returns true (but it does some type conversion as with the case of "", "0", "NaN" for which it returns false) but the latter "??" will only yield the right value only if the value of the left is null or Undefined
//EG
console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0

let glory;
console.log(glory ?? 100);
// → 100

/* The AND "&&" operator
This trick behind this operator is that it just checks if the value of the left is true or exists if it does it will pick the value on the left as its output but if it doesnt it will pick the value on the left  */
