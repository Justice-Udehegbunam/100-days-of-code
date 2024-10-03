// Regular Expressions
/* Regular Expression is a tool used in not only javascript but many other programming languages and its is basically a way to describe patterns in string data */

// Creating a regular expression

// A regular expression is a type of OBJECT. (because it behaves kind of like a constructor in a class)
//  It can be constructed by either using the RegExp() method or enclosing the code in backslashes /"code"/

let re1 = RegExp("abc");
let re2 = /abc/;

// re1 == re2 ? console.log(true) : console.log(false); // This prints faslse because since objects are just references to a particular location in memory and no two object is the same

/* ome characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself. 

And just like other built in objects they have a number of methods of which the simplest or most used is the .test method

Although regex is designed to work with strings, non-string values are implicitly converted to strings when used with regular expressions in JavaScript. However, regex itself doesn’t directly operate on anything other than text*/
// E.g
let aPlus = /A\+/;

// console.log(re1.test("abcde")); // this checks whether the pattern it asks for exist in the particular case of which for this "abc" exists so it returns true

// console.log(re1.test("abdje")); // false
// console.log(re1.test("dgfabcdje")); // true "because it checks the whole string if it can find the pattern "abc" then it will be true no matter the location"

// console.log(/[0123456789]/.test("in 1992"));
// console.log(RegExp("[0123456789]").test("in 1992"));
// the "[]" just says that for each number u can find in the test then return true instead of looking for the whole pattern

// → true
// console.log(/[0-9]/.test("in 1992"));
// → true

/* Limits of the Hyphen (-) in Character Classes:
Used to Define Ranges:
When placed between two characters, the hyphen (-) is used to define a range. For example:
[a-z] matches any lowercase letter.
[A-Z] matches any uppercase letter.
[0-9] matches any digit from 0 to 9.
Position Matters:
If you place the hyphen (-) at the start or end of a character class, it is treated as a literal hyphen and no longer defines a range:
[-a-z] matches - and any lowercase letter.
[a-z-] matches any lowercase letter and -.
Range Must Be Valid:
The characters in a range must follow a logical order. For example, [A-z] is technically valid, but it includes extra characters between Z and a in the ASCII table, which may lead to unexpected matches.
The range [A-z] would match not only A-Z and a-z, but also symbols like [ and \ (based on ASCII values).
What doesn't the hyphen work for?
Non-Ordered Characters:
For non-alphabetic or non-numeric ranges, hyphens don’t work. For example, [z-a] will not work because it’s not a valid range (the characters go in the reverse order).
When Outside of Character Classes:
Outside of square brackets, the hyphen is interpreted as a literal character, not a range. For instance, /0-9/ would match the exact sequence 0-9 in a string, not the range of digits. */

// SPECIAL REGEX CHARACTER SHORTCUTS
/*Used to match:
 \d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
. Any character except for newline 
^ - ANCHOR/CARET: which checks majorly the first character that matches the condition
\p{L} Any letter
\p{N} Any numeric character
\p{P} Any punctuation character
\P{L} Any nonletter (uppercase P inverts)
\p{Script=Hangul} Any character from the given script
*/

console.log(/\D/.test("a")); // this returns true because the d test numbers

/* You could match a date and time format like 01-30-2003 15:20 with
the following expression:
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false */
// console.log(/^[0-8]/.test("7abdnb76"));

/* Yes, you're right! The caret (^) has two different meanings in regular expressions depending on where it's placed:

At the beginning of the entire regex (outside a character set), it means the regex should match from the start of the string.
Inside a character set (within square brackets [ ]), it negates the set, meaning it will match any character except the ones specified in the set */

console.log(/^[A-Z]/.test("Aß"));

console.log(/\p{L}/u.test("α"));
//  The "u" there is a special flag called the unicode flag which tells javascript to test it based on its unicode value

//  Repeating parts of a pattern
// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true
/* The star (*) has a similar meaning but also allows the pattern to match zero times (ie it behaves like a do while loop which will log once if the condition is false)

A question mark (?) makes a part of a pattern optional, meaning
it may occur zero times or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing: usually just for the character immediately before the "?" sign
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true*/
