// Printing in color

// Goal: Use the chalk library in my project

const chalk = require("chalk");

const log = console.log;

// log(chalk.hex("#333").underline("Success"));

console.log(chalk.hex("#FFFFFF").bgGreen.bold("mess up"));

log(chalk.green("Success"));
