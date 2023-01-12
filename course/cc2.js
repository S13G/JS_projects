// TEST DATA 1
const markMass = 78
const markHeight = 1.69

const markBMI = markMass / (markHeight ** 2)
console.log(`Mark's BMI is ${markBMI}`)

const johnMass = 92
const johnHeight = 1.95

const johnBMI = johnMass / (johnHeight ** 2)
console.log(`John's BMI is ${johnBMI}`)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)

}