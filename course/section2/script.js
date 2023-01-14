/*let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log("I can drive :D")

function logger() {
    console.log('My name is Sieg')
}

logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

// func declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991)

// func expression(anonymous function)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2)

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
console.log(calcAge3(1991))

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1970, 'Mike'))

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)
console.log(friends.length)
console.log(friends[friends.length - 1])
console.log(friends[0])
console.log(friends[2])

friends[2] = 'Jay'
console.log(friends)

const jonas = ['Jonas', 'Sieg', 2022, 2037 - 1997, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [age1, age2, age3]
console.log(ages)

const friends = ['Michael', 'Steven', 'Peter']
// Add elements
const newLength = friends.push("Sieg")
console.log(newLength)
console.log(friends)

friends.unshift('John')
console.log(friends)

// removes elements
friends.pop() // last
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift()
console.log(friends)


console.log(friends.indexOf("Steven")) // returns position
console.log(friends.indexOf("Bob"))

friends.push(23)
console.log(friends.includes("Steven")) // returns boolean
console.log(friends.includes("Bob"))
console.log(friends.includes(23))

if (friends.includes("Steven")) {
    console.log("You have a friend called Peter")
}

const jonas = {
    firstName: 'Jonas',
    lastName: 'Sieg',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas)

console.log(jonas.lastName)
console.log(jonas["lastName"])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do u want to know about Jonas? Choose between firstName, lastName, age, job and friends')
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request, Choose between firstName, lastName, age, job and friends')
}

jonas.location = "Portugal"
jonas["twitter"] = "@NedSieg"

console.log(jonas)

// Challenge

console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
 */

const jonas = {
    firstName: 'Jonas',
    lastName: 'Sieg',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // }
    // calcAge: function () {
    //     return 2037 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence`
    }
}
// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas["calcAge"](jonas.birthYear))

console.log(jonas.getSummary())