alert("Whatsup World! Whatsup coders!")


//Difference between function declaration and function expression
/*sayHi();
function sayHi () {
	console.log("Hi");
}; */

/*whatsup();
function whatsup () {
	console.log("Why");
}; */

/*noToHate();
function noToHate() {
	console.log("The only thing i hate is hatred");
} */
//All the above are function declaration
//For function expression

/*sayHi();
var sayHi = function () {
	console.log("Hi");
}; */

/*Hate();
function Hate() {
	console.log("The only thing i hate is hatred");
}; */

//RECURSION

//Occurs when a function calls itself by name
//Function closures: functions that have access to variables from another function's scope
//This is achieved by creating a function inside function.

/*function eat () {
	var fruit = 'Apple'
	function watch () {
		console.log(fruit);
	} 
	return watch
} 
var favFruit = eat();
favFruit();         //function eat has been executed outside its own context
*/

//More
/*function team () {
	var player = "Kante"
	function club () {
		console.log(player)
	}
	return club;
}
var favPlayer = team();
favPlayer();
*/

/*function world () {
	var planet = "Earth"
	function others () {
		console.log(planet)
	}
	return others;
}
var favPlanet = world();
favPlanet(); */

/*function world() {
	var planet = "Earth"
	function others () {
		console.log(planet)
	}
	return others;
};
var favPlanet = world()
favPlanet();
*/


/*function world () {
	var planet = "Mars"
	function others () {
		console.log(planet);
	}
	return others;
}
var favPlanet = world()
favPlanet(); */


//WO and BOM
/*var result = prompt("What is your name?");
if (result !== null) 
	alert("Welcome " + result + "!"); */

/*var result = prompt("Who is the best defensive midfielder in the EPL?")
if (result !== null) {
	alert("No, Kante is the best defensive midfielder in the EPL!")
} */

//setInterval() and setTimeout() functions

/*setTimeout(function(){
	console.log("We are here")
}, 2000);

setTimeout(function(){
	console.log("Yes We are here")
}, 4000);

setTimeout(function(){
	console.log("We'll not be here forever")
}, 6000);


setTimeout(function(){
	console.log("But we'll never take shite")
}, 8000); */

/*setrInterval(function(){
	console.log("Yes We are here")
}, 2000); */


