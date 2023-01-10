// TEST DATA 1
const markMass = 78
const markHeight = 1.69

const markBMI = markMass / (markHeight ** 2)
console.log(`Mark's BMI is ${markBMI}`)

const johnMass = 92
const johnHeight = 1.95

const johnBMI = johnMass / (johnHeight ** 2)
console.log(`John's BMI is ${johnBMI}`)

const markHigherBMI = markBMI > johnBMI
console.log(`Is Mark's BMI greater than John's BMI? ${markHigherBMI}`)


// TEST DATA 2
const secondMarkMass = 95
const secondMarkHeight = 1.688

const secondMarkBMI = secondMarkMass / (secondMarkHeight ** 2)
console.log(`Second mark's BMI is ${secondMarkBMI}`)

const secondJohnMass = 85
const secondJohnHeight = 1.76

const secondJohnBMI = secondJohnMass / (secondJohnHeight ** 2)
console.log(`Second john's BMI is ${secondJohnBMI}`)

const secondMarkHigherBMI = secondMarkBMI > secondJohnBMI
console.log(`Is Mark's second BMI greater than John's second BMI? ${secondMarkHigherBMI}`)