alert(`Whatsup World...Whatsup coders`);

//I'd like to remind myself of single line arrow functions before moving to multi line
/*let club = name => console.log(`${name} is the only club in London with a CL trophy`)
club(`Chelsea`); */

//For multi line arrow functions
/*let createBlog = (title, body) => {
	if (!title) {
		throw new error("A title is required")
	}
	if (!body) {
		throw new error ("A body is required")
	}
	return console.log(`${title} ${body}`)
}  
createBlog("Blog title", "Blog body");  */

//More
/*let bestTeam = (name, locality) => {
	if (!name) {
		throw new error ("A name is required")
	}
	if (!locality) {
		throw new error ("A locality is required")
	}
	return console.log(`${name} ${locality}`)
}
bestTeam("Chelsea,", "London"); */

/*let ojoroTeam = (name, coach) => {
	if (!name) {
		throw new error ("A name is required")
	}
	if (!coach) {
		throw new error ("A coach is required")
	}
	return console.log(`${name} ${coach}`);
}
ojoroTeam("Man Utd,", "Ferguson.") */

/*let teamMates = (name, club) => {
	if (!name) {
		throw new error (`A name is required`)
	}
	if (!club) {
		throw new error ("A club is required")
	}
	return console.log(`${name} ${club}`);
}
teamMates("Kante and Rudiger are team mates at", "Chelsea" ) */

/*let fruit = (name, kind) => {
	if (!name) {
		throw new error ("A name is required")
	}
	if (!kind) {
		throw new error ("A kind is required")
	}
	return console.log(`${name} ${kind}`)
}
fruit("Coconut,", "Not a berry"); */

//Arrow and 'this' keyword

/*function sayHi() {
	//
} 
console.log(this);  */

/*let yoruba = {
	//add property
	mountains: ["Idarne", "yimi", "Ekiti"],
	//add method
	printWithDash: function() {
		setTimeout(() => console.log(this.mountains.join(" - ")), 3000);  
		}
	};

yoruba.printWithDash();    */


/*let yoruba = {
	//adding property
	mountains: ["Idarne", "yimi", "Ekiti"],
	//adding method
	printWithDash: function() {
		setTimeout(() => console.log(this.mountains.join(" , ")), 1000);
	}
};
yoruba.printWithDash(); */


/*let chelsea = {
	players: ["Ngolo Kante", "Ruby Loftus-Cheek", "Kovacic"],
	printWithDash: function() {
		setTimeout(() => console.log(this.players.join(" _ ")), 2000);
	}
};
chelsea.printWithDash(); */


let plants = {
	fruits: ["Orange", "Avocado", "Mango"],
	printWithDash: function() {
		setTimeout(() => console.log(this.fruits.join(' - ')), 1000);
	}
};
plants.printWithDash();

let epl = {
	teams: ["CFC", "MUN", "ARS"],
	printWithDash: function() {
		setTimeout(() => console.log(this.teams.join(' + ')), 2000);
	}
};
epl.printWithDash();


let coaches = {
	managers: ["Lampard", "Ole", "Arteta"],
	printWithDash: function() {
		setTimeout(() => console.log(this.managers.join(", ")), 3000);
	}
};
coaches.printWithDash();

let chelseaHaters = {
	refs: ["Howard Webb", "Chris Foy"],
	printWithDash: function() {
		setTimeout(() => console.log(this.refs.join(" and ")), 4000);
	}
};
chelseaHaters.printWithDash();  















































