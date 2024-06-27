const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);

const getComputerChoice = () => {
      return options[randomIndex];
}

console.log(getComputerChoice())