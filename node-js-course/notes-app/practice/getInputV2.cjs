// Using Yargs
const yargs = require("yargs");

//console.log(process.argv);

// version
/* To find the verion that yargs starts you on you have to check it by "node <appName>.cjs --version/--help if u need help a bit"  
But yargs usually starts up with version 1.0.0 */

//Customizing yargs version
// yargs.version("1.2.3"); // prints 1.2.3 to the console
// create add command

/* When you create a command with yargs and apart from the default option that yargs provides you might want to add other options required for each particular command you can store that in the "builder" object 

(To run it in the termnal you add the flag --<param/option name> )

This is just like the parameter that that function accepts via a param (Which can be any name but the custom is "argv)"

But in js its default doesnt require the param to run the function 

But if you want it to be required you need to set the "demandOption" property in the title to true which by default it is false

and you can pass in more params (builder options)

also if you pass in your option/param and you dont pass anything it automatically it stores the value of the param as a boolean but if you want to make it only accept one type of data you can make it stricter with the "type" property*/

yargs.command({
  command: "add",
  describe: "Add command for notes application",
  builder: {
    title: {
      describe: "Pass in your title",
      demandOption: true,
      type: "string",
    },
    // CHALLENGE
    body: {
      describe: "your note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (args) {
    // console.log("Adding a new notes", args);
    console.log(`Title: ${args.title}`); // this gets the title
    console.log(`Body: ${args.body}`); // this gets the title
  },
});

// this creates a command with the name add that basically executes the handler function whenever the add command is called

yargs.command({
  command: "remove",
  describeribe: "remove note",
  handler: () => {
    console.log("Removing notes from DB");
  },
});

// List command
yargs.command({
  command: "list",
  describe: "To list out all the notes",
  handler: () => {
    console.log("Listing..");
  },
});

// Read command
yargs.command({
  command: "read",
  describe: "To read out all the notes",
  handler: () => {
    console.log("reading..");
  },
});

//  This is required now
yargs.parse();

// console.log(yargs.argv);
