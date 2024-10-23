const fs = require("fs");

const getNotes = () => {
  return "Your notes";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("Added Successfully!");
  } else {
    console.log("Note title name taken");
  }
};

const removeNote = (title) => {
  console.log(`This book title is: ${title}`);
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

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
