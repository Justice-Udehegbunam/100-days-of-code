//  REGEXP  GOLF: AIM - To define a regex that can solVE A PROBLEM in a small amount of lines as possible

/* PROBLEMS
car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or
semicolon
6. A word longer than six letters
7. A word without the letter e (or E) */

// no.1
console.log(/ca[rt]/i.test("i HAVE A  AND A CarT"));

// no.2
console.log(/pr?op/.test("2. pop and"));

//  no.3
console.log(/fe(rr)+(et|y|ari)$/.test("ferrets"));

//  no.4
console.log(/(ious)$/.test("223luxurious"));

// no.5
console.log(/\s+([.,;:])/.test(" . bad punctuation"));

// no.6
console.log(/\p{L}{7,}/u.test("hsgggjksbvb"));

// no.7
console.log(/^[^e]*$/i.test("BET"));

// QUOTING STYLE

let regex = /(?<!\w)'(?!\w)/;

let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

// NUMBERS AGAIN

let jsStyleNo = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
