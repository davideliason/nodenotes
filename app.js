const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello there ${user.username}!`, (err) => {
    if (err) console.error(err);
});
