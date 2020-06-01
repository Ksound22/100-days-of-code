alert("What's Up World!")

//JavaScript Arrays: Can contain any data type
//Arrays are created by wrapping values in a square bracket, and accessed by using bracket notation

//Example
/*var clubs = ["Chelsea", "Man U", "Forest", "Liverpool"];
console.log(clubs); //results in an array of clubs in the console

//we can convert the arrays to strings by accessing the array with brackets
var clubs = ["Chelsea", "Man U", "Forest", "Liverpool"];
console.log(clubs.toString()); */

//We can also join the arrays with a particular symbol in the console

/*var clubs = ["Chelsea", "Man U", "Forest", "Liverpool"];
console.log(clubs.join(" - ")); //Here the arrays were joined with hyphen */

//Array stack Method
//push(): accepts any number or args and add to the end of array
//pop(): removes the last item in the array 
//unshift() adds any args to the front of the array
//shift() removes the first item in the array
//Example
/*var clubs = ["Chelsea", "Man U", "Everton", "Arsenal"];
clubs.push("Arsenal");
console.log(clubs)  */

/*var clubs = ["Chelsea", "Man U", "Everton", "Arsenal"];
clubs.pop("Arsenal");
console.log(clubs) */

/*var clubs = ["Chelsea", "Man U", "Everton", "Arsenal"];
clubs.unshift("Real Madrid", "Barcelona");
console.log(clubs.toString());  */

/*var clubs = ["Chelsea", "Man U", "Everton", "Arsenal"];
clubs.shift();
console.log(clubs) */

//Array reordering methods
//Sort
//reverse
//Examples

/*var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse()); */

/*var numbers = [4, 5, 3, 7, 1, 2, 6];
console.log(numbers.sort()); */


/*var values = [0, 10, 50, 100, 150];
console.log(values.sort()); //50 came last because JS sees 5 as greater than one. 
//To ammend the issue, write a function and pass it to sort */

/*var values = [0, 10, 50, 100, 150];
console.log(values.sort(compare));
function compare(val1, val2) {
	return val2 - val1
} //Voilla! The problem has been taken care of. But this would be in ascending order, if you want it to descend: val1 - val2
*/

//Concatenation
//concatenation is the joinning of arrays
/*var clubs = ["Chelsea", "Barcelona"];
var totalClubs = clubs.concat(["Real Madrid"]);
console.log('ORG: ', clubs, totalClubs); */

//More
/*var names = ["Agnes", "Kolade", "Linda"];
var totalNames = names.concat(["Olivette", "Ernest"])
console.log(names, totalNames); */


/*var leagues = ["EPL", "La liga"];
var totalLeagues = leagues.concat(["NPFL", "NNL"]);
console.log(leagues, totalLeagues);  */

//slice and splice
//slice allows us to remove certain items in the array by indicating the number of items to be removed in the instruction, last two willbe deleted
//splice allows us to indicate the starting point for deletion and the number of items to delete

//For example
/*var clubs = ["Arsenal", "United", "Liverpool", "Barcelona"];
var deletedClubs = clubs.slice(2);
console.log("Clubs ", clubs, "deletedClubs", deletedClubs)  */

/*var clubs = ["Arsenal", "United", "Liverpool", "Barcelona", "Spurs"];
var deletedClubs = clubs.splice(1, 2)
console.log("Clubs: ", clubs, "Deleted clubs: ", deletedClubs);  //United and Liverpool got deleted */
//Location method: allows us to know the exact point an array is located
//Example
/*var clubs = ["Arsenal", "United", "Liverpool", "Barcelona"];
console.log(clubs.indexOf("Liverpool")); */

//iterative methods: every(), some(), filter(), forEach(), map(),
//reduce method: reduce(), reduceRight()
//Both iterative and reduce methods take functions as arguements
//For example, every

/*var numbers = [1, 2, 3, 4, 5, 6, 7, 8] ;
var everyResult = numbers.every(function(item, index, array) {
	return item < 2;
});
console.log(everyResult); */

//Some
/*var numbers = [1,2,3,4,5,4,3,2,1];
var someNumbers = numbers.some (function(item, index, array) {
	return item > 2;
});
console.log(someNumbers); */

//Filter
/*var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.filter(function(item, index, array) {
	return item > 2; 
});
console.log(everyResult); */

//more
/*var numbers = [9, 6, 4, 7, 5, 2];
var everyResult = numbers.filter(function(item, index, array){
	return item < 9
});
console.log(everyResult) */

/*var numbers = [5, 6, 2, 5, 7, 5, 5, 4, 4, 6, 4];
var everyResult = numbers.filter(function(item, index, array){
	return item > 5
})
console.log(everyResult) */

//ForEach
/*var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item, index, array) {
console.log(item);  //forEach list all items in their own lines
}); */ 

//more
/*var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item, index, array) {
console.log(numbers);
}); */

/*var words = ["War", "Peace", "Diplomacy", "Tribes"];
words.forEach(function(item, index, array){
	console.log(array);
}); */

//Map
/*var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array) {
	return 'Num ' + item; //map shows the positions of all the items
});
console.log(mapResult); */

//Reduce
/*var numbers = [1,2,3,4,5];
var sum = numbers.reduce(function(prevValue, currentValue, index, arrayObject){
	return prevValue + currentValue;
});
	
console.log(sum); */ 

//Date type
/*var date = new Date();
console.log(date); */  



























































