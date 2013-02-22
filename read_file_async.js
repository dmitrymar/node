var fs = require('fs');

function callback(err, results) {
if (err) return handleError(err);
console.log('file contents', results);	
}

fs.readFile('test.txt', 'utf-8', callback);