// import names, { add } from "./utils.js";

// const name = "Justice";

// console.log(add(3, 5));

// console.log(name);
// console.log(names);

import { getNotes } from "./notes.js";

console.log(getNotes());

// How to load in npm modules in node

import validator from "validator";

console.log(validator.isEmail("justiceudehegnam@gmail.ru")); // outputs:  true
console.log(validator.isURL("mead.io")); //  outputs : true
