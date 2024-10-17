// Using Yargs
const yargs = require("yargs");

console.log(yargs.version("1.2.3"));

// create add command

yargs.command({
  command: "name",
  desc: "my name",
  handler: function () {
    console.log("Adding a new notes");
  },
});

//  This is required now
yargs.parse();
