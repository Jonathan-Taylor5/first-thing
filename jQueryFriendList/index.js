var express = require('express');
var app 	= express();
var http	= require('http').Server(app);

app.use(express.static(__dirname + '/public'));
// what is res and what does it do
app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
})

http.listen(process.env.PORT || 3001, function(){
	console.log('listening on *:3001');
})