var fs = require('fs');

var jokes = {};

jokes.allJokes = function(){

    var fileName = __dirname+'/jokes.txt';

    var fileContents = fs.readFileSync(fileName, 'utf-8');

    var arrayOfJokes = fileContents.split(/\r?\n/);

    return arrayOfJokes;
};

module.exports = jokes;