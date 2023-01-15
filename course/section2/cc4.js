const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const calcTip = function (bill) {
    if (bill >=50 && bill < 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}
const tips = []
const total = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    total.push(tip + bills[i])
}
console.log(bills, tips, total)

const calcAvg = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}


console.log(calcAvg([2, 3, 6]))
console.log(calcAvg(total))