var fs = require('fs');
var express = require('express');

var app = express();
app.use(express.static(__dirname+"/public"));

app.get("/", function(request, response) {
	fs.readFile('index.html', function(error, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		response.end(data);
	});
});

app.listen(8080, function(){
	console.log('Server Start ...');
});
