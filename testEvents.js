var utils = require('util');
var eventsEmitter = require('events').EventEmitter;

var person = function(name) {

	this.name=name;
};


utils.inherits(person,eventsEmitter);

var ravi = new person('Ravikanth Dakarapu');

ravi.on('speak', function(message){

	console.log(`${this.name}: ${message}`);
});


ravi.emit('speak','always loves to crack jokes');