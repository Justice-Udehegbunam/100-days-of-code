// Using Yargs
const yargs = require("yargs");

//console.log(process.argv);

// version
/* To find the verion that yargs starts you on you have to check it by "node <appName>.cjs --version/--help if u need help a bit"  
But yargs usually starts up with version 1.0.0 */

//Customizing yargs version
yargs.version("1.2.3"); // prints 1.2.3 to the console
// create add command

yargs.command({
  command: "add",
  desc: "Add command for notes application",
  handler: function () {
    console.log("Adding a new notes");
  },
});

// this creates a command with the name add that basically executes the handler function whenever the add command is called

yargs.command({
  command: "remove",
  desc: "remove note",
  handler: () => {
    console.log("Removing notes from DB");
  },
});

//  This is required now
yargs.parse();

console.log(yargs.argv);
