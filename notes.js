const fs = require('fs');

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
    }
};

var getAll = () => {
    console.log("getting all notes");
};

var getNote = (title) => {
    console.log("getting a note", title);
}

var removeNote = (title) => {
    console.log("removing a note", title);
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};