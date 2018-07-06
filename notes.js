const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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