alert("Hello World! Welcome to my Day2 of #100DaysofCode") 

//JS OPERATORS
//They do mathematical conversion
//Unary: Works only on one value, increment, decrement
//Boolean Operator Known as logical not and are (!, || &&)

//Additive operation
//Example
/*var name = 'Kolade';
var luckynum = 10;

var sentence = 'My name is ' + name + ' and my lucky number is ' + luckynum;
console.log(sentence); */

/*var club = "Chelsea";
var yob = 1905;

var sentence = "The best club in London in recent times is " + club + ", founded in " + yob + ".";
console.log(sentence);    */

//Equality Operators ==, ===, !=, !== (Compares and return boolean values)
/*console.log('1' == 1);  //This is true because the string is converted to number behind the scene
console.log(1 != 1); //!= stands for not equal to, so this returns false
console.log(false == 0); // ==stands for equal to, fsle means 0 behind the scene, so this returns true
console.log(true == 1); // ==stands for equal to, true means 1 behind the scene, so this returns

//identically equal operators
console.log('1' === 1); //stands for equal value and equal type, so this returns false
console.log(1 !== '1') //stands for not equal value or not equal type, so this returns true*/

//Conditional (Ternary operators)
//variable expression ? true : fasle;
/*var num1 = 2000;
var num2 = 1000;

var result = num1 > num2? "That is correct" : "That is not correct";
console.log(result); */

/*var num1 = 300;
var num2 = 400; 

var result = num1 > num2? "Yes" : "No";
console.log(result); */

//Asignment Operators
/*var num = 30;
num = num * 2;
console.log(num);

var num = 60;
num = num / 30;
console.log(num); */
//Assignment operators can perform mathematical operation

/*var name = "Kolade Chris";
var nick = "Ksound";
var luckynum = 10;
var address = "ABK";

console.log("Name: ", name, "Nick: ", nick, "Lucky Number: ", luckynum, "Address ", address); */

/*var name = "Kolade";
var favchurch = "Roman Catholic";
var favperson = "Nikky";

console.log("Name ", name , "Favourite Church: ", favchurch, "Favourite person ", favperson); */

//JS Statements
//If: takes up the condition and return boolean true or false
/*var num = 10;
if (num > 9) {
	console.log('Yes it is greater than ' + num)
} else{
	console.log("No it is not!")
} */

/*var year = 2020;
if (year > 2012) {
	console.log("2020 is what we thought 2012 would be")
} else {
	alert("2020 has been good")
} */

//if, else if, else statement
/*var num = 20;
if (num > 30) {
	console.log("Number is not " + 30);
} else if (num < 15) {
	console.log("Number is not less than " + 15);
} else {
	console.log("number is 20"); 
} */

//more
/*var num = 28;
if (num > 40) {
	console.log("Kolade won't even be 40 in the bext ten years")
} else if (num = 28) {
	console.log("Kolade will become an efficent web developer before age 28")
} else {
	console.log("Kolade is a lover of football")
} */


//JS LOOPS
//Do while: creates a loop that executes a block of 
//code at least once, b4 checking if condition is true
//then it will repeat the loop as long as the condition is true

/*var num = 0;
do {
	num++   
console.log("Number " + num);
} while (num < 12); */

/*var num = 10;
do {
	num--
	console.log("Number " + num)
} while (num < 0) //returns 9 */


//While loop: Evaluates the condition, only then the code inside the 
//loop will execute

/*var num = 0
while (num < 20) {
	num++;
	console.log("Number " + num)
} */

/*var num = 20;
while(num < 30) {
	num--
	console.log(num); //num-- creates a loop that never stops! Almost crashed my chrome! Lesson!
} */  

//For loop:  for(varInitialization; condition; postLoopExpression) {statement}
/*for(var i = 0; i<10; i++);
	console.log(i); */

//It is possible to define statement one outside
//e.g
/*var i = 0;
for(; i < 10; i++);
	console.log(i); */

//For in loop 
/*var club = {
	name: "Chelsea",
	status: "Current UEL champions",  
	why: "Bashed Arsenal in the final one year ago yesterday",
} 
for(item in club)
console.log(item); //lesson: comma must follow each items */

//Break, continue and switch 

/*for(i = 0; i < 10; i++) {
	if (i == 5) {
		break
	}
	console.log(i) //stopped the loop at 4 inoder to cut out others
} */

//continue
/*for(i = 0; i < 10; i++) {
	if (i == 5) {
		continue
	}
	console.log(i) //breaks at 4 to ommit 5, and then continues the loop
 } */

 //SWITCH

 /*var num = 200;
 switch(num) {
 	case 100:
 	console.log("Not the number")
 	break;
 	case 300:
 	console.log("This is still no the number")
 	break;
 	case 200:
 	console.log("This is the number") 
 	break;
 	default:
 	console.log("Definitely no the number") //Switch statements check the code for a match and returns the instruction specified
 } */  















