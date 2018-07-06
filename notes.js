
var addNote = (title, body) => {
    console.log('adding note', title, body);
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