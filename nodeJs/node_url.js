var http = require('http');

http.createServer((req, res) =>{

	res.writeHead(200,{'Content-Type':'text/plain'});

	res.write("hello world");
	res.write("success");
	res.write(req.url);
	res.end();
}).listen(8080);
console.log("listening port 8080........");
