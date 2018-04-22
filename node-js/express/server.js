var fs = require('fs');
var express = require('express');

var app = express();
app.use(express.static(__dirname+"/public"));

app.get("/", function(request, response) {
	response.send("Hello");
});

app.listen(8080, '127.0.0.1');
