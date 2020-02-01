var playerScore = 0;
var computerScore = 0;
var playerSelection = null;
var computerSelection = null;
let numOfRounds = 5;
let i = 1;
const roundsDiv = document.querySelector(".rounds");
var roundNumberSpan = document.getElementById("round-number");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const endBtn = document.querySelector(".end-game-btn");

const playerChoiceText = document.querySelector(".player-choice");
const computerChoiceText = document.querySelector(".computer-choice");

let getRandomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;

let computerPlay = () => {
  var x = getRandomNumber(3);
  switch (x) {
    case 1:
      computerChoiceText.textContent = "Rock";
      return "Rock";
    case 2:
      computerChoiceText.textContent = "Paper";
      return "Paper";
    case 3:
      computerChoiceText.textContent = "Scissors";
      return "Scissors";
  }
};
let playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "r":
      if (computerSelection == "r") {
        return "Draw! Rock v Rock!";
      } else if (computerSelection == "p") {
        computerScore++;
        computerWon();
        return "You Lose! Paper Beats Rock!";
      } else {
        playerScore++;
        playerWon();
        return "You Win! Rock Beats Scissors!";
      }
    case "p":
      if (computerSelection == "r") {
        playerScore++;
        playerWon();
        return "You Win! Paper Beats Rock!";
      } else if (computerSelection == "p") {
        return "Draw! Paper v Paper!";
      } else {
        computerScore++;
        computerWon();
        return "You Lose! Scissors Beats Paper!";
      }
    case "s":
      if (computerSelection == "r") {
        computerScore++;
        computerWon();
        return "You Lose! Rock Beats Scissors!";
      } else if (computerSelection == "p") {
        playerScore++;
        playerWon();
        return "You Win! Scissors Beats Paper!";
      } else {
        return "Draw! Scissors v Scissors";
      }
  }
};

function playerWon() {
  playerChoiceText.classList.add("winner");
  computerChoiceText.classList.add("loser");
}
function computerWon() {
  computerChoiceText.classList.add("winner");
  playerChoiceText.classList.add("loser");
}

let game = () => {
  computerChoiceText.classList.remove("winner");
  playerChoiceText.classList.remove("winner");
  computerChoiceText.classList.remove("loser");
  playerChoiceText.classList.remove("loser");
  roundNumberSpan.textContent = i;
  computerSelection = computerPlay();

  console.log(
    playRound(
      playerSelection.charAt(0).toLowerCase(),
      computerSelection.charAt(0).toLowerCase()
    )
  );
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  i++;
};

rock.addEventListener("click", () => {
  playerChoiceText.textContent = "Rock";
  playerSelection = "rock";
  game();
});
paper.addEventListener("click", () => {
  playerChoiceText.textContent = "Paper";
  playerSelection = "paper";
  game();
});
scissors.addEventListener("click", () => {
  playerChoiceText.textContent = "Scissors";
  playerSelection = "scissors";
  game();
});

endBtn.addEventListener("click", () => {
  if (playerScore > computerScore) {
    roundsDiv.textContent = "Player won the battle!";
  } else if (computerScore > playerScore) {
    roundsDiv.textContent = "Player lost the battle!";
  } else {
    roundsDiv.textContent = "DRAW!";
  }
  endBtn.textContent = "Play Again";
  endBtn.addEventListener("click", () => {
    location.reload();
  });
});
