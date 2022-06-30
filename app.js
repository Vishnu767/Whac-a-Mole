const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const button = document.querySelector('#start')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimer = null

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
    console.log(randomPosition)
}

function checkMole(){
    if(this.id == hitPosition){
        result++
        score.innerHTML = result
        hitPosition = null
    }
}

function moveMole(){
    timerId = setInterval(randomSquare, 500)
    countDownTimer = setInterval(countDown, 1000)
    button.removeEventListener('click', moveMole)
}

squares.forEach(square => {
    square.addEventListener('mousedown', checkMole)
})

function countDown(){
    currentTime--
    timeleft.innerHTML = currentTime
    if(currentTime == 0){
        clearInterval(countDownTimer)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

button.addEventListener('click', moveMole)
