const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === "list") {
    console.log(" Listing all notes");
} else if (command === "add") {
    console.log("Adding a new note")
} else if (command === "read") {
    console.log("Reading a new note")
} else if (command === "remove") {
    console.log("Removing a new note")
} else {
    console.log("Command not recognized");
}


