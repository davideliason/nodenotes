const fs = require('fs');

var originalNote = {
    title: "Some title",
    body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);
// console.log(originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// convert back to object
var note = JSON.parse(noteString);
console.log(typeof noteString);
console.log("title", note.title);











// var personString = '{"name" : "David", "color" : "blue"}';
// // convert string to object
// var person = JSON.parse(personString);
/* 
var stringObj = JSON.stringify(obj);
*/
/* var obj = {
    name: "David"
};
*/
// console.log("Object", obj);
// console.log("String", stringObj);
// console.log(typeof stringObj);
// console.log(typeof objectFromStr);
// console.log(objectFromStr);