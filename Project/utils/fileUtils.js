const fs = require('fs');

function writeToFile(data) {
    fs.writeFileSync('book.txt', data);
}

module.exports = { writeToFile };
