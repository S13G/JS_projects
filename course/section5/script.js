/*console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
 */
// generate random number from 0 to 19
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no input
    if (!guess) {
        displayMessage('No Number! 🔞')

        // when player wins
    } else if (guess === secretNumber) {
        displayNumber(secretNumber)
        displayMessage('Correct Number! 🎉')
        document.body.style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

        // when guess is wrong
    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉')
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('You lost the game 💥')
            document.querySelector('.score').textContent = 0
        }
    }
})

// reset
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    displayNumber('?')
    document.querySelector('.guess').value = ''
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})