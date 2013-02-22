var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200); //status code in header
	response.write('Hello, this is dog'); //Response body
	response.end(); //Close the connection
}).listen(8080); //Listen for connections on this port

console.log('listening on port 8080..');