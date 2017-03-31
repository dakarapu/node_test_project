var EventEmitter = require("events");
var util = require("util");

function Greetr() {

	this.message = "welcome";
}



util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {

	console.log("Hello world!");
	this.emit("greet");
}

var x = new Greetr();

x.on("greet", function(){

	console.log("emitting data");
});

x.greet();