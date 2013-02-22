var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200); //status code in header
	response.write('Hello, this is dog'); //Response body
setTimeout(function(){ //Represent long running process
	response.write("Dog is done");
	response.end(); //Close the connection
}, 5000); //5 seconds
}).listen(8080); //Listen for connections on this port

console.log('listening on port 8080..');