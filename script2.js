function getComputerChoice() {
    let i = Math.floor(Math.random() * (2 - 0 + 1) + 0)

    if (i === 0) {
        return 0
    } else if (i === 1) {
        return 1
    } else {
        return 2
    }
}

function playRound(p, c) {

    if (p === c) {
        return 2;
    } else if ((p === 0 && c === 2) || (p === 1 && c === 0) || (p === 2 && c === 1)) {
        return 1;
    } else {
        return 0;
    }
}

function game(playerChoice) {

    const compChoice = getComputerChoice()

    const result = playRound(playerChoice, compChoice);
    let conclusion = '';

    if (result === 2) {
        conclusion = "Tie! Both of you Picked " + playerChoice + "."
    } else if (result === 1) {
        conclusion = "You Win! " + playerChoice + " beats " + compChoice + "!"
        localScore += 1;
    } else {
        conclusion = "You Lose! " + compChoice + " beats " + playerChoice + "!"
        localCompScore += 1;
    }

    const answer = document.querySelector('#answer');
    const game = document.createElement('div');

    answer.textContent = conclusion;

    score.textContent = localScore;
    compScore.textContent = localCompScore;
};

let localScore = 0;
let localCompScore = 0;

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

const overallScore = document.querySelector('#score');

const score = document.createElement("div");
const compScore = document.createElement('div');

if (!(localScore === 5)) {

    overallScore.appendChild(score);
    overallScore.appendChild(compScore);

    rock.addEventListener('click', () => game(0));
    paper.addEventListener('click', () => game(1));
    scissors.addEventListener('click', () => game(2));
}