alert("What's Up World!");

//Functions can be passed as argument
/*function callinAFunction(myFunc, myArgs) {
	return myFunc(myArgs);
} 
function addHundred(num) {
	return num + 100; 

} 

var result = callinAFunction(addHundred, 100);
console.log(result); */

//Function methods [apply(), call(), bind()]
//apply (below)
/*function sum(num1, num2) {
	return num1 + num2;
}

function callingSum(num1, num2) {
	return sum.apply(this, arguments)
} 
console.log(callingSum(11, 1)) */

//call(bellow)
/*function sum(num1, num2) {
	return num1 + num2;
}

function callingSum(num1, num2) {
	return sum.call(this, num1, num2)
} 
console.log(callingSum(111, 111))
*/

//apply
/*function sum(num1, num2) {
	return num1 + num2;
}
function callingSum(num1, num2) {
	return sum.apply(this, arguments)
}
console.log(callingSum(111, 111));*/

//more on apply
/*function sum(num1, num2, num3) {
	return num1 * num2 * num3
}
function callingSum(num1, num2, num3) {
	return sum.apply(this, arguments)
}
console.log(callingSum(1, 2, 2)); */

/*function sum(num1, num2) {
	return num1 / num2;
}
function callingSum(num1, num2) {
	return sum.apply(this, arguments)
}
console.log(callingSum(60, 20)) */


/*function multi(num1, num2) {
	return num1 * num2;
}
function callingMulti(num1, num2) {
	return multi.apply(this, arguments)
}
console.log(callingMulti(3, 3)); */ 


/*function divis(num1, num2) {
	return num1 / num2
}
function callingDivis(num1, num2) {
	return divis.apply(this, arguments)
}
console.log(callingDivis(9, 3)); */

/*function minus(num1, num2) {
	return num1 - num2;
}
function callingMinus(num1, num2) {
	return minus.apply(this, arguments)
}
console.log(callingMinus(9, 3));  */


//String manipulation method concat, slice, substr, substring
//concat
/*var strVal = "hello ";
var result = strVal.concat('world', '!');
console.log(result); */

//More
/*var addAlpha = "Kolade ";
var result = addAlpha.concat("is a " , "Chelsea ", "fan")
console.log(result);

var plusAlpha = 'hello world';

console.log(plusAlpha.slice(3)); 
console.log(plusAlpha.slice(3, 7));

console.log(plusAlpha.substring(3));
console.log(plusAlpha.substring(3, 7));

console.log(plusAlpha.substr(3));
console.log(plusAlpha.substr(3, 7)); */

//String location methods
//indexOf, lastIndexOf, trim, toUpperCase(), toLowerCase

/*var addAlpha = 'hello world';

console.log(addAlpha.indexOf('o'));
console.log(addAlpha.lastIndexOf('o'));

//Trim
var strVal = '    Hello world      '
console.log(strVal.trim()); //trim cuts out the extra space characters
*/

var addAlpha = 'Chelsea loves George Floyd';
console.log(addAlpha.toLowerCase());

var addAlpha = "Chelsea love blacks";
console.log(addAlpha.toUpperCase());














































