//Starting The Practice of What i learn on JS from Udemy and Kaloraat
//alerting
alert("Hello World!");

//Writing and updating simple variables. Variable is a container for named objects. I'm going to write as many as possible cuz this is a practice
/*var message
message = "Hello World";
//updating the variable
message = "I just joined the 100 days of code and it's my first day!"
console.log(message); */

/*var chelsea
message = "Chelsea is the most successful club in England in the last 10 years";
//updating 
message = "Chelsea had " + 2 + " Trophies in 2011/12, the season we were not on form";
console.log(message); */

/*var message
kolade = "My name is Kolade Chris from Nigeria. I gained a lot from Kaloraat's JS lesson on Udemy.";
//updating
kolade = "I believe there are few full stack JavaScript developers out there who are better than Kaloorat, or none at all."
console.log(kolade) */

/*var africa
message = "Africa is the homeland of almost all black people";
//updating
message = "There are over " + 200 + " million people in Nigeria, world's largest black nation";
console.log(message);  */

// HANDLING VARIOUS DATA TYPES
//Boolean
//Null
//Undefined
//Number
//String
//Symbol(in ES6)
//typeof operator helps determine data type 

//For example
/*var message = "Whatsup Africa";
alert(typeof message); //string */

/*var message = 100000;
alert(typeof message); //number */

//There are integer and floating point numbers, integer and floating point
//When we write number with double quotes, they become strings, but to ensure they are converted to numbers, we use parseFloat and parseInt methods
/*var num1 = "100";
alert(num1) */
//to convert to actual number and make JS see this as number
/*var num1 = parseInt("100");
alert(num1); */

//for floating point
/*var num2 = parseFloat("20.60");
alert(num2); //alerts "20.6" because JavaScript removed the last figure, zero behind the scene */

//STRINGS
//Strings mean alphabets in JavaScript. The letters must be inside quotes inorder to display them
//var name = "Kolade Chris Still a newbie coder";
//console.log(name); //This makes the strings appear in a single line */

//To break the strings into two lines, add "\n"
/*var name = "Kolade Chris \nStill a newbie coder";
console.log(name); */

//To convert a number to string, we use the num.ToString() method
/*var num = 89
numToStringify = num.ToString();
console.log(numToStringify); 
//Voilla! I just coverted a number to string! */

//more
/*var age = 27;
ageToStringify = age.ToString();
console.log(ageToStringify); */

/*var chelsea = 1905;
chelseaToStringify = chelsea.ToString();
console.log(chelseaToStringify); */

//JS OBJECTS
//JavaScript objects are containers for named values. They are variables too, but they can contain many values, including functions
/*var person = {
	name: "Kolade",
	age: 26,
	sayName: function () {
		return this.name
	}
};
var objectName = person.name;
console.log(person.sayName(), person.age); */

//more
/*var club = {
	name: "Chelsea",
	age: 120,
	sayName: function () {
		return this.name
	}
};
var objectName = club.name;
console.log(club.sayName(), club.age); */


/*var country = {
	name: "Nigeria",
	continent: "Africa",
	sayName: function() {
		return this.name
	}
};
var objectName = country.name;
console.log(country.continent); */

/*var city = {
	name: "New York",
	country: "USA",
	sayName: function () {
		return this.name
	}
};
var objectName = city.name;
console.log(city.sayName()); */

/*var hate = {
	name: "Pills",
	class: "Medicines",
	sayName: function() {
		return this.name
	} 
};
var objectName = hate.name;
console.log(hate.sayName(), hate.class); */

//updating objects

/*var country = {
	name: "Nigeria",
	continent: "Africa",
	sayName: function() {
		return this.name
	}
};
country.team = "Super Eagles";
var objectName = country.name;
console.log(country.continent, country.team); */

/*var fan = {
	name: "Kolade",
	club: "Chelsea",
	sayName: function () {
		return this.name
	}
};
fan.age = 27;
fan.address = "ABK"
var objectName = fan.name;
console.log(fan.age, fan.address);*/

//Deleting Properties

/*var fan = {
	name: "Kolade",
	club: "Chelsea",
	sayName: function () {
		return this.name
	}
};
fan.age = 27;
fan.address = "ABK"
delete fan.age
var objectName = fan.name;
console.log(fan.age, fan.address); */

//Nesting object
/*var man = {
	name: "Kolade",
	club: "Chelsea",
	sayName: function () {
		return this.name;
	},
	likes: {
		sport: "Football",
		author: "Walter Rodney",
	}
};
man.name = "Ksound";
man.address = "ABK"
delete man.address
   
console.log(man.likes.sport); */

//Another one

/*var bestdef = {
	name: "John Tery",
	club: "Chelsea",
	country: "England",
	sayName: function () {
		return this.name;
	},
	attributes: {
		pitch: "Goal line clearances! He doesn't sit and defend no dribble pass record!",
		droom: "Leadership",
	}
};
bestdef.nick = "Captain, Leader, Legend";
bestdef.kids = "Girls";

console.log(bestdef.name, bestdef.attributes.pitch, bestdef.nick);   */

/*var body = {
	name: "football",
	class: "Ball sport",
	sayName: function() {
		return this.name;
	},
	features: {
		first: {
			one: "Pitch",
			ball: "round leather",
		},
		gbody: "FIFA"
	}
};
body.name = "FIFA";
body.hq = "Zurich"
console.log(body.features.first.one); */






















