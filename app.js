const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var sum = notes.add(1, 2);
console.log("sum", sum);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello there ${user.username}! Color is ${notes.color}`, (err) => {
//     if (err) console.error(err);
// });
