alert(`Whatsup World! Whatsup Coders!`);

//To restructure and concatenate with ES6
var adventureClimbing = {
name: "Everest",
height: 8848,
output() {
	console.log(`Mt. ${this.name} is ${this.height} meter tall`);

	}
};
adventureClimbing.output(); 


var bPlayer = {
	name: "Ngolo Kante",
	height: 170,
	output() {
		console.log(`${this.name} is ${this.height} meter tall`)
	}
};
bPlayer.output();

//More

var bird = {
	name: "Pelican",
	habitat: "semiaquaatic",
	output() {
		console.log(`${this.name} is a ${this.habitat} bird`)
	}
};
bird.output();

var man = {
	name: "Kolade Chris",
	favThings: "Coding, football, nature, Biology.",
	favPerson: "Nike",
	output() {
		console.log(`${this.name} loves ${this.favPerson} and ${this.favThings}`);
	}
};
man.output();

//Spread and Rest
//Used to combine two arrays into one or two objects into one
//when you combine, it does not modify the original array or object

var mountains = ["Everst", "fishtail", "Annapuna"];
var mountainsFromJapan = ["Fuji"]; 

var allMountains = [...mountains, ...mountainsFromJapan];
console.log(allMountains);


var chelsea = ["Ngolo", "Mount", "Kovacic", "Abraham", "Tomori"];
var coaches = ["Lampard", "Ray Wilkins", "JM"];

var allChelsea = [...chelsea, ...coaches];
console.log(allChelsea);


var youths = ["Mount", "Abraham", "Tomori"];
var hustler = ["Rudiger"];

var youthsAndHustler = [...youths, ...hustler];   //Take Home: Spread and rest is done with three periods
console.log(youthsAndHustler);

//For Objects
var day = {
	breakfast: "Noodles and Rice",
};

var midday =  {
	lunch: "Gaari and Groundnut",
}
var night = {
	dinner: "Amala and Ewedu"
};

var picnic = {...day, ...midday}
console.log(picnic); 

//new object

var manager = {
	coach: "Lampard",
};

var clubOwner = {
	owner: "Roman Abrahamovic",
};

var oga = {
	ceo: "Marina Gravnoskaia" 
}

var all = {...clubOwner, ...manager, ...oga}
console.log(all);

//new object

var mother = {
	mum: "Mama",
};
var father = {
	dad: "Baba",
};

var parents = {...father, ...mother}
console.log(parents);


//for rest
var players = ["Kante", "Kovacic", "Abraham", "Mount"];
var [first, ...rest] = players;
console.log(first, rest);

var rareAnimals = ["White Giraffe", "Lemurs", "Sloth"]
var [first, ...rest] = rareAnimals;
console.log(first, rest);


var riversInAfrica = ["Nile", "Niger", "Benue", "Congo", "Orange", "Limpopo", "Zambezi"]
var [first, ...rest] = riversInAfrica;
console.log(first, ...rest); // Take home: if you console log like this, the items will be displayed as strings.

var nigeria = ["Buhari", "Osinbajo", "El-Rufai", "Jonathan", "Reno Omokri"];
var [first, ...rest] = nigeria;
console.log(first, rest);

//

//Class constructor (Super)
//Adding method to function object
function Holiday (destination, days) {
	this.destination = destination;
	this.days = days;
}

Holiday.prototype.info = function() {
	console.log(this.destination + "  " + this.days + " days");
}

var nepal = new Holiday("Nepal", 30);
console.log(nepal.info());  

//A better way of creating objects in ES6
//super/parent
class Holiday {
	constructor(destination, days) {
		this.destination = destination;
		this.days = days;
	}
	//adding method
	info() {
		console.log(`${this.destination} will take ${this.days} days`);
	}
}

//children/sub class
class Expedition extends Holiday {
	constructor(destination, days, gear) {
		super(destination, days);
		this.gear = gear;
	}
	info() {
		super.info();
		console.log(`Bring your ${this.gear.join(" and your")}`)
	}
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);
tripWithGear.info(); 



























