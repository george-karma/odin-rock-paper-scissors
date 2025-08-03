
const SCISSORS = `scissors`
const ROCK = `rock`
const PAPER = `paper`
const SCISSORS_EMOJI = `✂️`
const ROCK_EMOJI = `🪨`
const PAPER_EMOJI = `🧻`
const HUMAN = `Human`
const COMPUTER = `Computer`

const choices = {
    scissors: {
        choice: SCISSORS,
        emoji: SCISSORS_EMOJI,
        beats: (choice) => choice == PAPER,
        isBeatenBy: (choice) => choice == ROCK
    },
    rock: {
        choice: ROCK,
        emoji: ROCK_EMOJI,
        beats: (choice) => choice == SCISSORS,
        isBeatenBy: (choice) => choice == PAPER
    },
    paper: {
        choice: PAPER,
        emoji: PAPER_EMOJI,
        beats: (choice) => choice == ROCK,
        isBeatenBy: (choice) => choice == SCISSORS
    }
}




const choiceArray = ['rock', 'paper', 'scissors']

human = {
    displayName: HUMAN,
    score: 0,
    currentChoice: null
}
computer = {
    displayName: COMPUTER,
    score: 0,
    currentChoice: null,
    generateRandomChoice: () => choices[choiceArray[getRandomInt(2)]]
}


let input = document.querySelector('.input')
let humanOutput = document.querySelector('#human > h1')
let computerOutput = document.querySelector('#computer > h1')
let humanDisplayScore = document.querySelector('#human > p')
let computerDisplayScore = document.querySelector('#computer > p')

let humanScore = 0
let computerScore = 0

let getRandomInt = (max) => Math.floor(Math.random() * max)

input.addEventListener('click', (e) => {
    let input = e.target.id
    if (input != "") {
        human.currentChoice = choices[input]
        computer.currentChoice = computer.generateRandomChoice()
        playRound()
    }
})

function incrementAndUpdateScore(scoreDisplay, player) {
    player.score = ++player.score
    scoreDisplay.textContent = `${player.displayName} Score: ${player.score}`
}

function updateChoiceDisplay() {
    humanOutput.textContent = human.currentChoice.emoji
    computerOutput.textContent = computer.currentChoice.emoji
}

function playRound() {
    updateChoiceDisplay()
    if (human.currentChoice.beats(computer.currentChoice.choice)) {
        incrementAndUpdateScore(humanDisplayScore, human)
    }
    else if (computer.currentChoice.beats(human.currentChoice.choice)) {
        incrementAndUpdateScore(computerDisplayScore, computer)
    }
}