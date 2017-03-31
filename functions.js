function testUser(fn){

	fn();
}

//first-class function
function user(){

	console.log('Hi User, this first-class function');
}

testUser(user);

//function expression
var newUser = function(){

	console.log('This is new user function expression');
}

newUser();

testUser(newUser);


//function on the fly
testUser(function(){

	console.log('Function on the fly');
});