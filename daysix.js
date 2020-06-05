alert("Whatsup World! Whatsup coders!")

//Object Oriented JS
//Factory Pattern of Writing JS Functions
/*function createPerson(name, age, club) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.job = club;
	obj.sayName = function() {
		console.log(this.name)
	}
	return obj;
};
var person1 = createPerson("Kolade", 27, "Chelsea");
var person2 = createPerson("Lampard", 38, "Chelsea");
console.log(person1, person2); */

//More on factory pattern of writing functions

/*function createPerson(name, age, job) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.job = job;
	obj.sayName = function() {
		console.log(this.name)  
	} 
	return obj;
};
var person1 = createPerson("Kolade", 27, "Web Developer");
var person2 = createPerson("Lampard", 38, "Manager");
console.log(person1, person2); */

/*function createPlayer (name, luckynum, position) {
	var obj = new Object();
	obj.name = name;
	obj.luckynum  = luckynum;
	obj.position = position;
	obj.sayName = function() {
		console.log(this.name)
	}
	return obj;
};
var player1 = createPlayer("Kante", 7, "Water");
var player2 = createPlayer("Kepa", 1, "Keeper");
var player3 = createPlayer("Rudiger", 2, "Hustle");
console.log(player1, player2, player3); */


/*function createReferee(name, num, attrib) {
	var obj = new Object();
	obj.name = name;
	obj.num = num;
	obj.attrib = attrib;
	obj.sayName = function() {
		console.log(this.name)
	}
	return obj;
};
var referee1 = createReferee("Graham Poll", 1, "carding");
var referee2 = createReferee("Howard Web", 2, "United 12th player");
var referee3 = createReferee("Chris Foy", 3, "Chelsea hater");
console.log(referee1, referee2, referee3); */

//constructor pattern of writing functions(The only difference is how it is called)
/*function Person(name, age, favperson) {
	this.name = name;
	this.age = age;
	this.favperson = favperson;
	this.sayName = function() {
		console.log(this.name)
	};
}
var person1 = new Person("Kolade", 27, "Nike")
var person2 = new Person("Enegole", 25, "Temitope") //Take home: factory pattern is called by the function name and 
console.log(person1, person2); */  				    //Construcor pattern is called by new keyword

//More
/*function Person (name, gender, friend) {
	this.name = name;
	this.gender = gender;
	this.friend = friend;
	this.sayName = function() {
		console.log(this.name)
	};
}
var person1 = new Person("Ene", "female", "Temitope");
var person2 = new Person("Nike", "female", "IBK");
console.log(person1, person2); */


//Prototype (Created behind the scene)
/*function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name)
	};
}

var person1 = new Person("Kolade", 27, "Web developer");
var person2 = new Person("Cole", 45, "Lawyer"); //returns the function
console.log(Person.prototype.constructor); */


//Combination of factory and constructor patterns of writing functions (@Kaloraat)
/*function Person (name, age, job, friends) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ['Zen', "Ene"];
}
Person.prototype = {    
	constructor: Person,
	name: "Kolade",
	age: 27,
	sayName: function() {
		alert(this.name)
	}
}; 

var person1 = new Person("Kolade", 27, "Web developer");
person1.friends.push("Nike");
var person2 = new Person("Cole", 45, "Lawyer");
console.log(person1, person2);  */

//More
/*function Player(name, number) {
	this.name = name;
	this.number = number; 
}
Player.prototype = {
	constructor: Player,
	name: "Willian",
	age: 32,
	sayName: function() {
		console.log(this.name)
	}
};
var person1 = new Player("Willian", 32)
var person2 = new Player("Kepa", 26)
console.log(person1, person2)  */
  