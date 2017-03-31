var express = require('express');
var fs = require('fs');

var app = express();

app.use('/messages', function(req,res){

	res.send('you are in messages page');
	console.log('requested from the user');
});


app.use('/people', function(req,res){

	fs.readFile('./timmy.json', 'utf-8', function(err,data){

		res.send(data);
	});

	console.log('requested from the user');
});

app.listen(3000);
