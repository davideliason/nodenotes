const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }
    catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    var notes = fetchNotes();
    // es6 syntax to filter
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log("getting all notes");
};

var getNote = (title) => {
    console.log("getting a note", title);
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = _.remove(notes, (n) => n.title !== title);
    // [ALT} var duplicateNotes = notes.filter((note) => note.title === title);
    console.log('note removed');
    saveNotes(filteredNotes);
}

/*
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
*/



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};