const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello there ${user.username}! Color is ${notes.color}`, (err) => {
    if (err) console.error(err);
});
