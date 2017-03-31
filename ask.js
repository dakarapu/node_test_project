var questions = [
	"What is your name ?",
	"What is your hobby ?",
	"What is you favourite programming language ?"
];

var answers = [];


function ask(i) {

	process.stdout.write(`${questions[i]}\n`);
}


process.stdin.on('data', function(data){

	process.stdout.write('\n');
	answers.push(data.toString().trim());

	if(answers.length < questions.length){

		ask(answers.length);
	} else {

		process.exit();
	}
});


process.on('exit', function(){

	process.stdout.write(`\n\n\n\nHello ${answers[0]}, go for ${answers[1]} and code ${answers[2]} later on..\n\n`);
});

ask(0);

