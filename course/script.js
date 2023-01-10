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