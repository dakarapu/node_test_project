var fs = require('fs');

var toTimmyFile = '{"name":"Timmy"}'


fs.writeFile('./timmy.json', toTimmyFile);

var toJimmyFile = {"name":"Jimmy"};

fs.writeFile('./jimmy.json', JSON.stringify(toJimmyFile));