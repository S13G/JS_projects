/*
let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

let javascriptIsFun = true
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Sieg')

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990 creates an immutable variable

// maths operatos
const now = 2037
const ageSieg = now - 1991
const ageSarah = now - 2020
console.log(ageSieg, ageSarah)

console.log(ageSieg *2, ageSieg / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 == 2 x 2 x 2

// concatenation
const firstName = "Jonas"
const lastName = "Domain"
console.log(firstName, lastName)

// assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x)

comparison operators
console.log(ageSieg > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037
const ageSieg = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageSarah + ageSieg)

const firstName = "Sieg"
const job = "Programmer"
const birthYear = 1991;
const year = 2037;

const sieg = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sieg)

const siegNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(siegNew)

console.log('String with \n\
multiple \n\
lines');
 */

/*
const age = 15

if (age>= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012
let century;

if (birthYear < 2000) {
    century = 20; // any code declared in a block cannot be accessed outside the block
} else {
    century = 21;
}

console.log(century)


const inputYear = '1991';
console.log(Number(inputYear), inputYear) // convert to number using Number
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23)

console.log('I am ' + 23 + ' years old') // does not trigger
console.log('23' - '10' - 3) // minus triggers the type coercion
console.log('23' + '10' + 3) // doesnt trigger
console.log('23' * 2) // triggers
console.log('23' / 2) // triggers
console.log('23' > '18') // triggers

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))

const money = 100

if (money) {
    console.log("Don't spend it at all ;)")
} else {
    console.log("You should get a job!")
}

let height;

if (height) {
    console.log("YAY! height is defined")
} else {
    console.log("Height is undefined")
}

const age = '18';
if (age === 18) console.log("You just became an adult :D (strict)")

if (age == 18) console.log("You just became an adult :D (loose)")

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite)

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favorite === 7) {
    console.log("7 is also a cool number")
} else {
    console.log("Number is not 23 or 7")
}

if (favorite !== 23) console.log("Why not 23?")

const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision


const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('Not a valid day')
}


const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2)
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`Th bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)

