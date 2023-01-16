/*console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
 */
// generate random number from 0 to 19
const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number! 🔞'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High 📈'
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You lost the game 💥'
            document.querySelector('.score').textContent = 0
        }
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low 📉'
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You lost the game 💥'
            document.querySelector('.score').textContent = 0
        }
    }
}) 