alert(`Whatsup World! Its my Day 12/100!`)
//I'm dealing with Modern JS today before i proceed to jQuery

//const and let ways of creating variables
//const
const name = `Chelsea`;
console.log(name);

const player = `Oliver Kahn`;
console.log(player);

const VAR = `football`;
console.log(VAR);

const pOfChristActor = `Mel Gibson`;
console.log(pOfChristActor);

const coder = `Kolade`;
console.log(coder);

const coderNick = `Ksound`;
console.log(coderNick);

const coderFavTeam = `Chelsea`;
console.log(coderFavTeam);

const coderFavPerson = `Nike`;
console.log(coderFavPerson);

const coderFamilyName = `Owolabi Kayode`;
console.log(coderFamilyName);

const bPlayer = `Kante`
console.log(bPlayer);

const hustler = `Rudiger`;
console.log(hustler);

const workRate = `Willian and Mount`;
console.log(workRate);

const terry = `Captain, leader, legend`;
console.log(terry);

const legend = `Drogba`;
console.log(legend);

const recordScorer = `Super Frankie Lampard`;
console.log(recordScorer);

const omoWarri = `Tammy Abraham`;
console.log(omoWarri);

//let way of creating variables

if (true) {
	let league = `Premier league`;
	console.log(league);
};				//Take home: The let keyword creates a variable that stays in its surrounding scope, unlike var that creates a variable and makes it available in the windows object
				//So, you cannot console.log, alert, or document.write outside the variable's scope.

if (true) {
	let player = `Kante`;
	let coach = `Super Frankie Lampard`;
	let youth = `Mason Mount and Tammy`;
	console.log(player);
	console.log(coach);
	console.log(youth)
	console.log(`${player} is the best DMF in the Premier league and is being coached by ${coach}.`)
	console.log(`${youth} are the best young players in Chelsea and they are being mentored by ${coach}.`)
};				//Another Take home: You can declare several variables inside the if statement with let keyword and conole log them individually.


if (true) {
	let name = `Kolade`;
	let favTeam = `Chelsea`;
	let FavPerson = `Nike`;
	let wannaBe = `Efficient frontend Web Developer`;
	console.log(`My name is ${name}, my favourite team is ${favTeam}, my favourite person for now is ${FavPerson} and i wanna be an ${wannaBe}`);
};

if (true) {
	let man = `Super Frankie Lampard`;
	let keeper = `Cech`;
	let anotherMan = `Terry The Captain, Leader, Legend`;
	let theManUpfront = `Drogba Legend`;
	console.log(`Chelsea used to have four important players: ${keeper}, ${man}, ${theManUpfront} and ${anotherMan}.`)
};

{
const manOnThePitch = `Didier Drogba`;
const manager = `Jose Mourinho`;
console.log(`${manOnThePitch} was managed effectively by ${manager}`)
}
//console.log(manager);  //Another Take Home: when you create a variable with const and wrap it curly braces, the variable stays within its context and is unavailable in windows object

//more
{
	const country = `Nigeria`;
	const good = `The people are good but leaders are bad`;
	console.log(`${country} is my ${country}, ${good}.`)
}

{
	const city = `London`;
	const country = `England`;
	console.log(`${city} is the largest city in Europe and is located in ${country}`);
}


































