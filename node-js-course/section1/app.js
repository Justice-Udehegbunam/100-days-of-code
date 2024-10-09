import fs from "fs";
//  this just showas that you can name it anything just like with the require function and it will still know what to refference
fs.writeFileSync("output.txt", "This is the new output file");

// in the writeFileSync it basically just creates a new file and updates

//vscode doesnt really help with node.js well as per suggesttions

//  CHALLENGE :  aPPEND A MESSAGE TO THE OUTPUT.TXT
// use appendFileSync to append the file

fs.appendFileSync("output.txt", "\nThis is what i newly appended");
