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

// console.log(/^[A-Z]/.test("Aß"));

// console.log(/\p{L}/u.test("α"));
//  The "u" there is a special flag called the unicode flag which tells javascript to test it based on its unicode value

//  Repeating parts of a pattern
// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once

// console.log(/'\d+'/.test("'123'"));
// → true
// console.log(/'\d+'/.test("''"));
// → false
// console.log(/'\d*'/.test("'123'"));
// → true
// console.log(/'\d*'/.test("''"));
// → true
/* The star (*) has a similar meaning but also allows the pattern to match zero times (ie it behaves like a do while loop which will log once if the condition is false)

A question mark (?) makes a part of a pattern optional, meaning
it may occur zero times or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing: usually just for the character immediately before the "?" sign
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true*/

let myNameSpeltCorrectly = "ustice";

// NOW LETS WRITE A CODE TO CHECK FOR A PARTICULAR DATE TIME FORMAT
// 10-aug-2024 10:00

const regex = /\d{1,2}-\p{L}{3,4}-\d{4} \d{1,2}:\d{1,2}/u;
//  a better way to do this is
const regexGood =
  /\d{1,2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4} \d{1,2}:\d{2}/; // this uses Grouping Sub expressions

let value = "10-Jan-2024 10:00";

// console.log(regexGood.test(value));

// Grouping Subexpressions

let cartoonCrying = /boo+(hoo+)+/i;
//  the boo+ says that ok ooh the string must have the letters boo following each other, then the plus joins then the (hoo) in bracket says that the three much follow each other at leaat once then the "i" flag just means that it can either be capital or small letter
console.log(cartoonCrying.test("Boohoooohoohoho"));

// OTHER REGEX METHODS
/* It tells you only whether it matched and nothing else. Regular
expressions also have an exec (execute) method that will return null if no match was found and return an object with information about the
match otherwise.
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8
An object returned from exec has an index property that tells us where

in the string the successful match begins */
let match = /\d+/.exec("one two 100"); /* returns three properties 
1. is the matched property which can either contain the matched value or null, 
2. is the compared string
3. is the match.index which is the particular index where the match started from if everything in the text was expressed as an array 
4. group: in the exec array we have the group value which is the second index (and forward depending on the no of groups) there and then the groups the group stores the value of the one group that match then the 

Groups:  Explanation of Named Capturing Groups
In JavaScript regex, named capturing groups are defined using the syntax (?<name>...). If you use this syntax in your regex, you will have a groups object that contains the results of those named capturing groups. However, if you do not define any named groups, the groups property will be undefined. */

// console.log(match);

// GROUP
let quotedText = /'([^']+)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)'/; // this ask it to check all the string that is surrounded by quotes and return at the end string

// console.log(quotedText.exec("she said 'hello-Jan'"));

// The Date class:  is also basically a class object under the hood

// console.log(new Date()); // this is used to get the actual date and time in UTC like so "2024-10-03T14:23:27.095Z"

// AND JUST LIKE WITH ANY OTHER OBJECT YOU CAN ALSO CREATE YOUR OWN FAKE DATE AND TIME

// console.log(new Date(2023, 10, 20, 3, 15, 50, 98));

// it basically stores the months as an array leading to a minus one property and also the hour is first checked based on the time zone the user is and then converts to its equivalent in UTC

// console.log(new Date().getUTCDate()); // outputs 3 which is for 3rd sept

// console.log(new Date().getTime()); // returns the amount of miliseconds elapsed since jan 1  1970 which was th time used by the UNIX machine then

// console.log(new Date(-1727966663226)); // this converts the miliseconds to real useful date "2024-10-03T14:44:23.226Z" and can also take minus which in that case returns the date backwards from 1970
// If you give the Date constructor a single argument, that argument is treated as such a millisecond count.

/* Date objects provide methods such as getFullYear, getMonth, getDate , getHours, getMinutes, and getSeconds to extract their components.
Besides getFullYear there’s also getYear, which gives you the year minus 1900 (such as 98 or 125) and is mostly useless. */

const getDate = (string) => {
  // Define capture groups for month, day, and year
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string) || [];

  console.log(month, day, year);

  return new Date(year, month - 1, day); // Adjust month since months are 0-indexed in JS
};

console.log(getDate("111-1-2022"));

/* Unfortunately, getDate will also happily extract a date from the string
"100-1-30000". A match may happen anywhere in the string, so in this case, it’ll just start at the second character and end at the second-to-last
character. */

// Caret (^) and Dollar ($) sign  - The carets matches based on the start and then the dollar sign matches the end.

/* Choice patterns

he pipe character (|) denotes a choice between
the pattern to its left and the pattern to its right. We can use it in expressions like this:

let animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));

PArentheses are used to limit the part of the pattern to which the pipe operator appluies, and you can put multiple of them together just like above*/

//  THE REPLACE METHOD

console.log("papa".replace("p", "m")); // this replaces the first p instance it can find
console.log("papa".replace(/[p]/g, "m")); // this tells it to replace any p it can find

console.log("Borobudur".replace(/[ou]/, "a")); //  this just shows that note it can pick any one frm it that is true
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  // the match param there holds the operating value ie "1 lemon"
  amount = Number(amount) - 1;
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));

const stripComments = (code) => {
  let regex = /\/\/. *|\/\*[^]*\*\//g;

  return code.replace(regex, "");
};

//console.log(
// stripComments(
// "// re1 == re2 ? console.log(true) : console.log(false); // This prints faslse because since objects are just references to a particular location in memory and no two object is the same /* ome characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself. And just like other built in objects they have a number of methods of which the simplest or most used is the .test method Although regex is designed to work with strings, non-string values are implicitly converted to strings when used with regular expressions in JavaScript. However, regex itself doesn’t directly operate on anything other than text*/"
//  )
//);

//  THE SEARCH METHOD
/* While the indexOf method on strings cannot be called with a regular expression, there is another method, search, that does expect a regular expression. Like indexOf, it returns the first index on which the expression was found, or -1 when it wasn’t found. */

console.log(" word".search(/\S/));
// → 1
console.log(" ".search(/\S/));
// → -1

//  INI File
/* An INI file (short for "initialization file") is a plain text configuration file used by software programs to store settings and options. The format was popularized in the early days of Windows operating systems but continues to be used in a variety of applications today. INI files are simple to understand and easy to modify, making them ideal for storing configuration data in a structured yet human-readable way.

Structure of an INI File
INI files typically consist of:

Sections: Enclosed in square brackets [ ], these divide the file into logical groups of settings.
Keys: Each setting is represented by a key-value pair (key=value) within a section.
Comments: Lines starting with ; or # are comments and are ignored by the program that reads the INI file. */

function parseINI(string) {
  let result = {};
  let section = result;

  for (let line of string.split(/\r?\n/)) {
    line = line.trim();

    if (!line || line.startsWith(";") || line.startsWith("#")) {
      console.log(line);
      continue;
    }

    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  }
  return result;
}

console.log(
  parseINI(`[Database]
Host=localhost
Port=3306
User=root
Password=password123
; first test

#second test

[Logging]
LogLevel=Info
LogFile=logfile.txt

`)
);
