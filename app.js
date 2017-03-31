var Emitter = require("./greet.js");

var emitter = new Emitter();


emitter.on('greet',function() {

	console.log("Hello, this is 1");
});

emitter.on('greet',function() {

	console.log("Hello, this is 2");
});

emitter.on('greet',function() {

	console.log("Hello, this is 3");
});

emitter.on('re_greet', function() {

	console.log("Hi there! how are you?");
});


emitter.emit('greet');

emitter.emit('re_greet');