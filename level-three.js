let score = 0

let balls = document.querySelectorAll('.js-ball')

let scoreDisplay = document.querySelector('.js-score')

let levelWinner = document.querySelector('.level-winner')

let scoreValue = null

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener('click', () => {
    scoreValue = parseInt(balls[i].dataset.increment)
    score += scoreValue
    scoreDisplay.innerText = score
    if (score >= 100) {
      levelWinner.style.opacity = '1'
      levelWinner.style.pointerEvents = 'auto'
    }
  })
}
