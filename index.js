function getComputerChoice (computerChoiceInt, computerChoice = "")  {
  computerChoiceInt = Math.random();  
  computerChoiceInt <= 1/3 ? computerChoice = "Rock" : 
  computerChoiceInt > 1/3 && computerChoiceInt <= 2/3 ? computerChoice = "Paper" :
  computerChoice = "Scissors";
  computerChoice = computerChoice.toLowerCase();
  return computerChoice;
}

function getHumanChoice (humanChoice) {
  humanChoice = prompt("Please enter a choice: Rock, Paper or Scissors");
  humanChoice = humanChoice.toLowerCase();
  while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
    humanChoice = prompt("Please enter a valid choice");
    humanChoice = humanChoice.toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(humanChoice, computerChoice);
    console.log("It's a tie");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You loose");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You loose");
    computerScore++;
  }else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You loose");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win");
    humanScore++;
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice);
    console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}`)
    console.log(`Human score ${humanScore}`)
    console.log(`Computer score ${computerScore}`)
  }
  humanScore > computerScore ? console.log("You won the game!") :
  humanScore < computerScore ? console.log("You lost the game!") :
  console.log("You tied!");
} 


playGame();