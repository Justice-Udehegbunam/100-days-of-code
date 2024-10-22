// Using Yargs
const yargs = require("yargs");

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

yargs.parse();
