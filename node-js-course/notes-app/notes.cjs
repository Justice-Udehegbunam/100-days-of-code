const chalk = require("chalk");
const fs = require("fs");

// REFACTORING CHALLENGE
const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title);
  //Refined version
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const readNote = (givenTitle) => {
  const notes = loadNotes();

  const match = notes.find((title) => title.title === givenTitle);

  if (match) {
    console.log(chalk.inverse(match.title));
    console.log(`Body : ${match.body}`);
  } else {
    console.log(chalk.bgRed("No note with that title"));
    return;
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
