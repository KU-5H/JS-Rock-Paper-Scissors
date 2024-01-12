function getComputerChoice() {
    let i = Math.floor(Math.random() * (2 - 0 + 1) + 0)

    if (i === 0) {
        return "ROCK"
    } else if (i === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toUpperCase()

    if (playerChoice == computerChoice) {
        return "Tie! Both of you Picked " + playerChoice + "."
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        return "You Win! " + playerChoice + " beats " + computerChoice + "!"
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        return "You Win! " + playerChoice + " beats " + computerChoice + "!"
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        return "You Win! " + playerChoice + " beats " + computerChoice + "!"
    } else {
        return "You Lose! " + computerChoice + " beats " + playerChoice + "!"    
    }
}

let work = true

while (work) {
    const playerChoice = prompt("Enter Rock Paper or Scissors")
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice))

    const again = prompt("Play Again (yes or no)").toUpperCase()

    if (again === "N" || again === "NO") {
        work = false
    }
}

