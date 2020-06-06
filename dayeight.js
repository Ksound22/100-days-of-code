alert("Whatsup World! Whatsup 100 Days of code participants")

//I stroll into Modern JavaScript
//In old school JS, we write variables with var keyword. e.g
/*var name = "Kolade";
console.log(name);
//The value of this variable could be changed over time e.g
name = "Yemi"
console.log(name)*/

// With EcmaScript6, we can create variable with const and let e.g.
/*const name = "Lekan";
console.log(name); */

//And then with Let, you can create a variable that stays in its surrounding scope, unlike var that creates a vairable and make it available in the window object
//e.g.
/*if (true) {
	let name = "Kolade"
	name = "Ben"
	console.log(name);
}

//More
if (true) {
	let name = "Chelsea";
	name = "Assnal"
	console.log (name);
}

if (true) {
	let bestClub = "Chelsea";
	name = "United";
	console.log(bestClub)
} */


//Template strings
//A better alternative to concatenation
/*let fname = "Kolade";
let lname = "Chris";
let age = prompt("Guess Kolade's age");

let result = `${fname} ${lname} is ${age} is years old`
alert(result); 
*/
//more

/*let cname = "Chelsea";
let bplayer = "Kovacic";
let where = "West London";

let result = `${cname}'s best player is ${bplayer} and the club is in ${where}`
console.log(result); */
 

/*let fname = "Eden";
let lname = "Hazard";

let player = `I don't care about Messi and Ronaldo because ${fname} ${lname} is my Messi and Ronaldo in one package`
console.log(player); */

//Default Parameters

/*function welcome (user, message) {
	alert(`${user} ${message}`);
}
welcome("Ksound,", "Goodday"); */

//More
/*function sayHi(club, loc, state) {
	console.log(`${club} ${loc} ${state}`)
}
sayHi("Chelsea,", "Located in", "London.") */

//To set the default
/*function sayHi(club = "Chelsea is", loc = "Located in", state = "London, UK") {
	console.log(`${club} ${loc} ${state}`)
}
sayHi();  */


/*function welcome (user = "Ksound,", message = "Good evening.") {
	console.log(`${user} ${message}`);
}
welcome(); */

//Arrow functions 
//Arrow functions: they are like anonymous functions, you do not need the function keyword to create them
//Normal function
/*function greeting (message) {
	return console.log(`${message} everyone`)
}
greeting("Goodday");

//More
function club(age) {
	return console.log(`Chelsea is ${age} years old`)
}
club(115); 

function name(name) {
	return console.log(`My full name is ${name}`)
}
name("Kayode, Kolade Christopher") */

//To write arrow functions
let greeting = message => console.log(`${message} everyone`)
greeting("Goodday");

let club = age => console.log(`Chelsea is ${age} years old`)
club(115);

/*let name = name => console.log(`My full name is ${name}`)
name("Kayode Kolade Christopher")  */

//More on single line arrow functions
let host = name => console.log(`${name} is the best hosting company for WrodPress`)
host("Bluehost")  

//In arrow function, you don't need parenthesis if the argument is one, you also do not need the return keyword if you're returning one statement
//Lets have some fun by writing more single line arrow functions (:

let manager = name => console.log(`${name} was the best manager during his time`);
manager("Jose Mourinho");

let dmf = name => console.log(`Water covers 70% of the earth, the rest is covered by ${name}`)
dmf("Ngolo Kante");

let cmf = name => console.log(`Snoop Dogg's "bird's eye i got a clear view rap line" is not for a girl but ${name}, because he is one of the best passers in football history`)
cmf("Cesc Fabregas");

let player = name => console.log(`It'd be nice to see ${name} in a Chelsea shirt`);
player("Timo Werner");

let family = name => console.log(`${name} is from Owolabi family`)
family("Kolade")










































































