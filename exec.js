var exec = require('child_process').exec;

exec('git version', function(err,data){

	if(err){

		console.log(err);
	} else {

		console.log(data);
	}
});