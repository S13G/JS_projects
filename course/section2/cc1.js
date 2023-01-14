const calcAvg = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3
}

const scoreDolphins = calcAvg(90, 103, 71)

const scoreKoalas = calcAvg(4, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphin wins!! (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koala wins!! (${avgKoalas} vs ${avgDolphins}`)
    } else {
        console.log("No team wins...")
    }
}

checkWinner(scoreDolphins, scoreKoalas)