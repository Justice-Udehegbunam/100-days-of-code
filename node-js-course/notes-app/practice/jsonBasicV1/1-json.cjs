const fs = require("fs");

const readFile = fs.readFileSync("1-json.json"); //  but this ordinarily returns a buffer just for speed of transfer between node,  and because it does not and can not know all these details, Node just reads the file byte for byte, without assuming anything about its contents. And that's what the returned buffer is: an unopinionated container for the raw bytes in the file.
// To convert to string

const stringResult = readFile.toString();
console.log(stringResult);

const parsedData = JSON.parse(stringResult);

// Step 1 done

// Change the name and age using my info

parsedData.name = "Justice";
parsedData.age = 18;
//  this works becaue with objects the references can be changed even with the const binding

//  Overwrite file
const value = JSON.stringify(parsedData);
fs.writeFileSync("1-json.json", value);
console.log(parsedData);

// Done
