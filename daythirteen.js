alert(`Hello World! Its my Day 13/100`);

//Arrow functions
//Single line arrow functions
let greeting = message => console.log(`${message} everyone!`)
greeting(`Hi`);

//More
let player = man => console.log(`${man} is the best defensive midfielder in England`);
player(`player`);

let manOfTheMoment = SMWD => console.log(`${SMWD} is a helpful lad`);
manOfTheMoment(`Chris Misterek`);

let anotherHelpfulLad = LTWM => console.log(`${LTWM} is the patron saint of coding`);
anotherHelpfulLad(`Laurence Bradford`);

let resources = alot => console.log(`${alot} are resources that help in learning to code`);
resources(`Sololearn, Mimo and Grasshopper`);

let laurence = Bradford => console.log(`${Bradford} has the best individual website that teaches people how to code`);
laurence(`Laurence Bradford`);

let naija = tor => console.log(`${tor} is a self-proclaimed giant of Africa`);
naija(`Nigeria`); 

let coding = languages => console.log(`${languages} are the basis of coding languages`);
coding(`HTML and CSS`);


//Multi line arrow functions
//Examples

let realTeam = (name, league) => {
	if (!name) {
		throw new error(`A name is required`)
	}
	if (!league) {
		throw new error(`A league is required`)
	}
	return console.log(`${name} - ${league}`)
}
realTeam(`team`, `England`);

//More

let country = (name, continent) => {
	if (!name) {
		throw new error(`A name is required`)
	}
	if (!continent) {
		throw new error(`A continent is required`)
	}
	return console.log(`${name} - ${continent}`)
}
country(`Nigeria`, `Africa`);

let item = (name, nation) => {
	if (!name) {
		throw new error(`A name is required`)
	}
	if (!nation) {
		throw new error(`A nation is required`)
	}
	console.log(`${name} - ${name}`)
}
item(`Naira`, `Nigeria`);


let peeps = (peep, where) => {
	if (!peep) {
		throw new error(`A which is required`)
	}
	if (!where) {
		throw new error(`A where is required`)
	}
	console.log(`${peep} - ${where}`)
}
peeps(`Indians`, `Asia`);

let pcm = (LTWM, SMWD) => {
	if (!LTWM) {
		throw new error(`Laurence must be here`)
	}
	if (!SMWD) {
		throw new error(`Chris Misterek must be here`)
	}
	return console.log(`${LTWM} and ${SMWD}`)
}
pcm(`Laurence Bradford`, `Chris Misterek`);

let bteambplayer = (team, player) => {
	if (!team) {
		throw new error(`team is must be here`)
	}
	if (!player) {
		throw new error(`player must be here`)
	}
	return console.log(`${team} and ${player} are the best in their capacities`)
}
bteambplayer(`Chelsea`, `Kante`)





































