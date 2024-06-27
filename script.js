const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);

const getComputerChoice = () => {
      return options[randomIndex];
}

const getHumanChoice = () => {
      return window.prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
      if (humanChoice === computerChoice) {
            window.alert(`It's a tie! You both chose ${humanChoice}.`)
      }

      if ((humanChoice === "paper") && (computerChoice === "rock")) {
            window.alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. Paper beats rock, you win!`)
            humanScore++;
      } else {
            window.alert("Rock beats paper, you lose!")
            computerScore++;
      };

      if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            window.alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. Scissors beats paper, you win!`)
            humanScore++;
      } else {
            window.alert("Rock beats scissors, you lose!")
            computerScore++;
      };

      if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            window.alert(`You chose ${humanChoice} and the computer chose ${computerChoice}. Rock beats scissors, you win!`)
            humanScore++;
      } else {
            window.alert("Paper beats rock, you lose!")
            computerScore++;
      }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection)
window.alert(`Your score: ${humanScore}, Computer score: ${computerScore}`)