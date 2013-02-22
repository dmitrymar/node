require('http').createServer(function handleRequest(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'}); // if response 200 or OK then output the rest
	res.end('Hello Dmitry');
})
.listen(8080);


