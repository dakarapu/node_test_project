var fs = require('fs');

// including bluebird and implementing promises with it
var promise = require('bluebird');
promise.promisifyAll(fs);

// retrieving data by reading file in regular node.js way

fs.readFile('./data1.js', 'utf-8', function(err,data) {

	if(err){

		console.log('unable to read file');
	} else {

		try{

			data = JSON.parse(data);
			console.log(data.name);
		} 
		catch (e) {

			console.log('Invalid json in file');
		}
	}
	
});

// retrieving data by reading file using Bluebird framework

fs.readFileAsync('./data1.js')
	.then(JSON.parse)
	.then(function(val){
		console.log(val);
	})
	.catch(SyntaxError,function(e){
		console.log('Invalid json in file');
	})
	.catch(function(e){
		console.log('Unable to read file');
	});

