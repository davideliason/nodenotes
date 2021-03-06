const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: "title of node",
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: "body of node",
    demand: true,
    alias: 'b'
};

const argv = yargs.command('add', 'add a new note', {
    title: titleOptions,
    body: bodyOptions
})
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    })
} else if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    }
    else {
        console.log("Note title already used");
    }
} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    }
    else {
        console.log("note not found");
    }

} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "deleted" : "not deleted";

} else {
    console.log("Command not recognized");
}


