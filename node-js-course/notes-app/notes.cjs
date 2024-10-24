const chalk = require("chalk");
const fs = require("fs");

// REFACTORING CHALLENGE

const getNotes = () => "Your notes";

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("Added Successfully!"));
  } else {
    console.log(chalk.bgRed("Note title already taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesExists = notes.some((note) => note.title === title);

  if (!notesExists) {
    console.log(chalk.bgRed("No note found!"));
    return;
  } else {
    const filterNotes = notes.filter((note) => note.title !== title);

    console.log(chalk.bgGreen("Note reomved!"));

    saveNotes(filterNotes);
  }
};

// CORRECTION
const removeNote1 = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log("Note removed successfully");
    saveNotes(notesToKeep);
  } else {
    console.log("No notes found!");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const stringData = dataBuffer.toString();
    return JSON.parse(stringData);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgYellow("Your notes"));
  notes.forEach((note) => console.log(`Note title: ${note.title}`));
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
};
