function getComputerChoice (computerChoiceInt, computerChoice = "")  {
  computerChoiceInt = Math.random();  
  computerChoiceInt <= 1/3 ? computerChoice = "Rock" : 
  computerChoiceInt > 1/3 && computerChoiceInt <= 2/3 ? computerChoice = "Paper" :
  computerChoice = "Scissors";
  computerChoice = computerChoice.toLowerCase();
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      cImage.src = "rock.svg";
      break;
    case "paper":
      cImage.src = "paper.svg";
      break;
    case "scissors":
      cImage.src = "scissors.svg";
      break;
  }
  
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    announce.textContent = "It's a tie";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You loose");
    announce.textContent = "You loose";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win");
    announce.textContent = "You win";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You loose");
    announce.textContent = "You loose";
    computerScore++;
  }else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win");
    announce.textContent = "You win";
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You loose");
    announce.textContent = "You loose";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win");
    announce.textContent = "You win";
    humanScore++;
  }
}

let humanScore = 0;
let computerScore = 0;

//UI changes are made below this line

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const buttonReset = document.querySelector(".reset");
const pImage = document.querySelector("#playerImage");
const cImage = document.querySelector("#computerImage");

pImage.src = "scissors.svg"

let playerScoreTable = document.querySelector(".playerScore");
let computerScoreTable = document.querySelector(".computerScore");
let announce = document.querySelector(".announcment");

playerScoreTable.textContent = humanScore;
computerScoreTable.textContent = computerScore;

buttonRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  playerScoreTable.textContent = humanScore;
  computerScoreTable.textContent = computerScore;
  pImage.src = "rock.svg"

})

buttonPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  playerScoreTable.textContent = humanScore;
  computerScoreTable.textContent = computerScore;
  pImage.src = "paper.svg"
})

buttonScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  playerScoreTable.textContent = humanScore;
  computerScoreTable.textContent = computerScore;
  pImage.src = "scissors.svg"
})

buttonReset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  playerScoreTable.textContent = humanScore;
  computerScoreTable.textContent = computerScore;
  console.log(playerScoreTable, computerScoreTable);
  console.log(humanScore, computerScore);
  announce.textContent = "";
})







