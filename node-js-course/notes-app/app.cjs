// Printing in color

// Goal: Use the chalk library in my project

const chalk = require("chalk");

// log(chalk.hex("#333").underline("Success"));

// console.log(chalk.hex("#FFFFFF").bgGreen.bold("mess up"));

// log(chalk.green("Success"));

// Section 4 Command Line Arguments

const { argv } = require("node:process"); // this is how node says you should require it now if u still want to use cjs format

// const argument = process.argv[3];

// console.log(argv.argv[3]); // this means process.argumentVector which is the array location where the the param is stored

// just like with general arrays this helps to get the values in the argv index of arrays
// console.log(process.argv[2]); // wgich in this case is the vallue i added after running the script

// How to use the process.argv

const command = process.argv[2];

// if (command === "add") {
//   console.log(chalk.bgGreen("Adding!"));
// } else if (command === "remove") {
//   console.log(chalk.bgRed("removing!"));
// } else if (!command || command === "") {
//   console.log("Please provide a command");
// } else {
//   console.log(chalk.red("Unknown command"));
// }

// this is just a base template for now

// Command line options
/* A command-line option or simply option (also known as a flag or switch) modifies the operation of a command; the effect is determined by the command's program. Options follow the command name on the command line, separated by spaces.  Command line options are basically like those flags in terminal (i.e "-D, --save-dev etc") */

// using CLO

/* when this code is ran in the terminal 

app.cjs remove --title="The book of John"

you can see that the CLO is added to another index in the array but isnt parsed properly

[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\user\\Desktop\\100-days-of-code\\node-js-course\\notes-app\\app.cjs',
  'remove',
  '--title=The book of John'
]
remove */

const regex = /--([\w]+)="([^"]*)"/iu;
// const argument = '--title="The book of John"';

function processArgument(argument) {
  if (!argument) {
    console.log(chalk.bgRed("Provide an argument"));
  } else if (!regex.test(argument)) {
    console.log(chalk.bgRed("Argument format is wrong"));
  } else {
    const match = regex.exec(argument);
    if (match) {
      const id = match[1]; // Captured id (e.g., title)
      const value = match[2]; // Captured value (e.g., The book of John)

      console.log("ID:", id);
      console.log("Value:", value);
    }
  }
}

// Extract command-line arguments
const args = process.argv;

// The third argument (index 2) should be the one you pass like '--title="The book of John"'
const argument = args[3];

processArgument(argument);
