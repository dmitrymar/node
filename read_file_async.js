var fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(err, results) {
if (err) return handleError(err);
console.log('file contents', results);	
});

