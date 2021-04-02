
/*
* Title : Basic Node Example
* Description: Simple file that declares a few functions and invokes them.
* Author : Daniel Seo
* Date: 10/24/17
*/

// Dependencies
var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');

// App object
var app = {};

// Configuration
app.config={
    'timeBetweenJokes': 1000
}

// Function that prints a random joke
app.printAJoke = function(){

    // Get all the jokes
    var allJokes = jokesLib.allJokes();

    // Get the length of the jokes
    var numberOfJokes = allJokes.length;

    // Pick a random  number between 1 and the noumber of jokes
    var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

    var selectedJoke = allJokes[randomNumber -1];

    console.log(selectedJoke);
};


app.indefiniteLoop = function(){
    setInterval(app.printAJoke, app.config.timeBetweenJokes);
};

//pp.indefiniteLoop();