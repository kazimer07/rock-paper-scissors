function win() {
    console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
}

function lose() {
    console.log("You lose! "  + computerSelection + " beats " + playerSelection + ".");
}

function tie() {
    console.log("It's a tie! You both chose " + playerSelection + ".");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            tie();
        } else if (computerSelection === "scissors") {
            win();
        } else {
            lose();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            tie();
        } else if (computerSelection === "rock") {
            win();
        } else {
            lose();
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            tie();
        } else if (computerSelection === "paper") {
            win();
        } else {
            lose();
        }
    } else {
        console.log("Enter rock, paper, or scissors only!");
    }
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

  
let playerSelection = prompt("Choose rock, paper, or scissors!");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
  