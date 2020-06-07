alert(`Hello World! Hello Coders!`);

//Object Destructuring in ES6
/*let ToDo = {
	morning: "Pray",
	afternnoon: "Work",
	evening: "Play PS",
	night: ["code", "eat"]	
}
let {morning, afternnoon, evening, night} = ToDo;
morning = "excercise"; //The value of aby of the entries can be changed 
console.log(morning, " - ", afternnoon, " - ", evening, " - ", night); */

//More
/*let ToDo = activities => {
	console.log(`${activities.period} we ${activities.name}`);
};

	ToDo({
		period: "In the morning,",
		name: "pray"
	}); */

/*let uniStudent = student => {
	console.log(`${student.name} from ${student.university}`);
};

uniStudent({
	name: "Kolade",
	university: "Adekunle Ajasin University"
});  */

/*let bPlayer = chelsea => {
	console.log(`${chelsea.name} plays in ${chelsea.position}`)
};

	bPlayer({
		name: "Kante",
		position: "Midfield"
}); */


/*let ojoroTeam = club => {
	console.log(`${club.name} in ${club.locale}`)
};
ojoroTeam ({
	name: "Man United",
	locale: "UK"
}); */

/*let theMan = actor => {
	console.log(`${actor.name} acts ${actor.genre}`)
};
theMan ({
	name: "Jet Li",
	genre: "Kungfu movies"
}); */


/*let filmIndustry = company => {
	console.log(`${company.name} in ${company.locale}`)
};
filmIndustry({
	name: "20th Century Fox",
	locale: "US"
}); */

// To Destructure

/*let filmIndustry = company => {
	let {name, locale} = company;
	console.log(`${company.name} in ${locale}`)
};
filmIndustry({
	name: "20th Century Fox",
	locale: "US"
}); */

/*let theMan = actor => {
	let {name, genre} = actor;
	console.log(`${actor.name} acts ${actor.genre}`)
};
theMan ({
	name: "Jet Li",
	genre: "Kungfu movies"
}); */

/*let ojoroTeam = club => {
	let {name, locale} = club;
	console.log(`${club.name} in ${club.locale}`)
};
ojoroTeam ({
	name: "Man United",
	locale: "UK"
}); */


/*let bPlayer = chelsea => {
	let {name, position} = chelsea;
	console.log(`${chelsea.name} plays in ${chelsea.position}`)
};

	bPlayer({
		name: "Kante",
		position: "Midfield"     //Take Home: The let keyword plays a role in object destructuring
}); */    

//Array destructuring

/*let [firstname] = ["Kolade", "Ayobami", "Kehinde", "Taye", "Nike"]
console.log(firstname) */

//To display others in the console, comma(,) plays a significant role.
//For example, to display, the second name, add one comma in front of first name, on and on.

let [,,,,firstname] = ["Kolade", "Ayobami", "Kehinde", "Taye", "Nike"]
console.log(firstname) //This displays Nike

//Restructuring 
var name = "Kolade";
var height = "169 cm";

var man = {name, height};
console.log(man); //Man has brought together name and height

//More
var player = "Kante";
var position = "DMF"

var bMidman = {player, position};
console.log(bMidman);

var plant = "Cassava";
var type = "Tuber";

var typeOfPlant = {plant, type};
console.log(typeOfPlant);

var animal = "Hippo";
var habitat = "Semi-aquatic";

var animalHabitat = {animal, habitat};
console.log(animalHabitat);

























