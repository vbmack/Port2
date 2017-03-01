var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	if (request.url === "/home") {
		response.end("YOU ARE THE BOMB!");

	} else {
		response.end("YOU BOMBED!");

}

}

function handleRequest2(request, response) {
	if (request.url === "/home") {
		response.end("YOU BOMBED!");

	} else {
		response.end("YOU ARE THE BOMB!");

}

}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
	console.log("Server listening on http://localhost.%s", PORT1);
});
server2.listen(PORT2, function() {
	console.log("Server listening on http://localhost.%s", PORT2);

});