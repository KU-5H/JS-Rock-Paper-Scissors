const closeBtn = document.querySelector("#close-popup")
const popup = document.querySelector("#popup")

popup.classList.add("open")

closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
});

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

function gameOver(result) {

    const answer = document.querySelector('#answer');
    const playAgain = document.createElement('button');

    if (result === 0) {
        answer.textContent = 'You Win! You beat the Computer!'
    } else {
        answer.textContent = 'You Lost! You have been defeated by the Computer!'
    }

    answer.classList.add('gameOver')

    playAgain.textContent = 'Play Again?'
    playAgain.classList.add('Options')

    answer.appendChild(playAgain);

    playAgain.addEventListener('click', () => {

        localCompScore = 0;
        localScore = 0;

        score.textContent = 'Player Score: ' + localScore;
        compScore.textContent = 'Computer Score: ' + localCompScore;

        answer.classList.remove('gameOver')
        answer.removeChild(playAgain);
        answer.textContent = ''

        popup.classList.add("open");
    });

    return
}

function game(playerChoice) {

    if (localScore === 5) {
        gameOver(0)
        return
    } else if (localCompScore === 5) {
        gameOver(1)
        return
    }

    const compChoice = getComputerChoice()

    const result = playRound(playerChoice, compChoice);
    let conclusion = '';

    const convertToString = (choice) => {
        if (choice === 0) {
            return 'Rock'
        } else if (choice === 1) {
            return 'Paper'
        } else {
            return 'Scissors'
        }
    }

    const getImage = (choice) => {
        if (choice === 0) {
            return 'Images/rock-paper-scissors-296854_1280.png'
        } else if (choice === 1) {
            return 'Images/rock-paper-scissors-296855_1280.png'
        } else {
            return 'Images/rock-paper-scissors-296853_1280.png'
        }
    }

    const playerChoiceWord = convertToString(playerChoice);
    const compChoiceWord = convertToString(compChoice);

    const image1Fetch = getImage(playerChoice);
    const image2Fetch = getImage(compChoice);

    if (result === 2) {
        conclusion = "Tie! Both of you Picked " + playerChoiceWord + "."
    } else if (result === 1) {
        conclusion = "You Win! " + playerChoiceWord + " beats " + compChoiceWord + "!"
        localScore += 1;
    } else {
        conclusion = "You Lose! " + compChoiceWord + " beats " + playerChoiceWord + "!"
        localCompScore += 1;
    }

    const answer = document.querySelector('#answer');

    answer.textContent = conclusion;

    score.textContent = 'Player Score: ' + localScore;
    compScore.textContent = 'Computer Score: ' + localCompScore;

    image1.src = image1Fetch;
    image2.src = image2Fetch;

    if (localScore === 5) {
        gameOver(0)
    } else if (localCompScore === 5) {
        gameOver(1)
    }

};

let localScore = 0;
let localCompScore = 0;

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

const overallScore = document.querySelector('.image1');
const overallScoreComp = document.querySelector('.image2');

const score = document.createElement("div");
const compScore = document.createElement('div');

const imageOne = document.querySelector(".image1");
const imageTwo = document.querySelector(".image2");

const image1 = document.createElement("img");
const image2 = document.createElement("img");

image1.classList.add("image");
image2.classList.add("image");

score.textContent = 'Player Score: '
compScore.textContent = 'Computer Score: '

overallScore.appendChild(score);
overallScoreComp.appendChild(compScore);

imageOne.appendChild(image1);
imageTwo.appendChild(image2);

rock.addEventListener('click', () => game(0));
paper.addEventListener('click', () => game(1));
scissors.addEventListener('click', () => game(2));

