const express = require('express');
const app = express();

app.listen(3000);

app.get('/user/:id', function(request, response) {

	//response.send(request);
	console.log(request.protocol);
	response.send('user ' + request.path);
});