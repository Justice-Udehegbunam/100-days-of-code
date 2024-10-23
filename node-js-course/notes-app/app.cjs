const fs = require("fs");

const notes = require("./notes.cjs");
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
    notes.addNote(args.title, args.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note command",
  builder: {
    title: {
      describe: "Pass in the title you want to remove",
      demandOption: true,
      type: "string",
    },
  },

  handler: (args) => {
    notes.removeNote(args.title);
  },
});

yargs.parse(); //Done with V1
