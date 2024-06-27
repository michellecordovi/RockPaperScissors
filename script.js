//SETS OPTIONS FOR ROCK PAPER OR SCISSORS 
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);

// DECLARE DOM VARIABLES
const form = document.querySelector("form")
const choiceInput = document.getElementById("selection");
const winnerAnnouncement = document.querySelector(".winnerAnnouncement")
const humanPoints = document.querySelector(".human-points")
const computerPoints = document.querySelector(".computer-points")


//DECLARE SCORES AND INPUT INITIAL SCORES TO DOM
let humanScore = 0;
let computerScore = 0;
humanPoints.innerHTML = humanScore;
computerPoints.innerHTML = computerScore;


//FUNCTION TO GENERATE COMPUTER CHOICE
const getComputerSelection = () => {
      return options[randomIndex];
}

// FUNCTION TO GET HUMAN CHOICE FROM FORM INPUT
const getHumanSelection = () => {
      return choiceInput.value;
}

// DECLARE HUMAN SELECTION AND COMPUTER SELECTION VARIABLES
let humanSelection;
let computerSelection;


// FUNCTION TO INITIATE A ROUND OF ROCK PAPER SCISSORS USING HUMAN INPUT AND COMPUTER INPUT
const playRound = () => {

      if (humanSelection === computerSelection) {
            winnerAnnouncement.innerHTML = `It's a tie! You both chose ${humanSelection}.`;
      } else if ((humanSelection === "paper") && (computerSelection === "rock")) {
            humanScore++;
            humanPoints.innerHTML = humanScore;
            winnerAnnouncement.innerHTML = `You chose ${humanSelection} and the computer chose ${computerSelection}. Paper beats rock, you win!`
      } else if((humanSelection === "paper") && (computerSelection === "scissors")) {
            computerScore++;
            computerPoints.innerHTML = computerScore;
            winnerAnnouncement.innerHTML = `You chose ${humanSelection} and the computer chose ${computerSelection}. Scissors beats paper, you lose!`;
      } else if ((humanSelection === "scissors") && (computerSelection === "paper")) {
            humanScore++;
            humanPoints.innerHTML = humanScore;
            winnerAnnouncement.innerHTML =`You chose ${humanSelection} and the computer chose ${computerSelection}. Scissors beats paper, you win!`
      } else if((humanSelection === "scissors") && (computerSelection === "rock")) {
            computerScore++;
            computerPoints.innerHTML = computerScore;
            winnerAnnouncement.innerHTML =`You chose ${humanSelection} and the computer chose ${computerSelection}. Rock beats scissors, you lose!`
      } else if ((humanSelection === "rock") && (computerSelection === "scissors")) {
            humanScore++;
            humanPoints.innerHTML = humanScore;
            winnerAnnouncement.innerHTML =`You chose ${humanSelection} and the computer chose ${computerSelection}. Rock beats scissors, you win!`
      } else if((humanSelection === "rock") && (computerSelection === "paper")){
            computerScore++;
            computerPoints.innerHTML = computerScore;
            winnerAnnouncement.innerHTML =`You chose ${humanSelection} and the computer chose ${computerSelection}. Paper beats rock, you lose!`
      }
}


//THIS LISTENS FOR THE SUBMISSION OF THE FORM
form.addEventListener("submit", (e) => {
      e.preventDefault();//this prevents the form and page from immediately restarting upon submission
      humanSelection = getHumanSelection().toLowerCase();
      computerSelection = getComputerSelection();
      playRound();
})
