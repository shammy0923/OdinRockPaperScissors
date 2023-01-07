const RockButton = document.getElementById("Rock");
const PaperButton = document.getElementById("Paper");
const ScissorsButton = document.getElementById("Scissors");

const PlayerBoard = document.getElementById("Player");
const ComputerBoard = document.getElementById("Computer");

const Options = ["rock", "paper", "scissors"];

// Randomly returns rock paper or scissors
function getComputerChoice() {
    return Options[Math.floor(Math.random() * Options.length)];
}

// Plays a round using the players choice and computers choice
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        game("tie");
        return "tie";
    } 
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            game("win");
            return "You win!";
        } else {
            game("lose");
            return "You lose.";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            game("win");
            return "You win!";
        } else {
            game("lose");
            return "You lose.";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            game("win");
            return "You win!";
        } else {
            game("lose");
            return "You lose.";
        }
    }
}

RockButton.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
PaperButton.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});
ScissorsButton.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});


let playerScore = 0
let computerScore = 0

function gameReset() {
    playerScore = 0;
    computerScore = 0;
    ComputerBoard.innerText = "Computer: " + computerScore;
    PlayerBoard.innerText = "Player: " + playerScore;
}

// Plays 5 rounds and determines the winner
function game(result) {
   if (result == "win") {
        playerScore += 1;
        PlayerBoard.innerText = "Player: " + playerScore;
   } else if (result == "lose") {
        computerScore += 1;
        ComputerBoard.innerText = "Computer: " + computerScore;
   }
   if (playerScore >= 5) {
        alert("You win!");
        gameReset();
        
   } else if (computerScore >= 5) {
        alert("You lost!");
        gameReset();
   }
}

