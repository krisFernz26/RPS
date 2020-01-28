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

let getRandomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;

let computerPlay = () => {
  var x = getRandomNumber(3);
  switch (x) {
    case 1:
      console.log("Computer Chose Rock!");
      return "Rock";
    case 2:
      console.log("Computer Chose Paper!");
      return "Paper";
    case 3:
      console.log("Computer Chose Scissors!");
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
        return "You Lose! Paper Beats Rock!";
      } else {
        playerScore++;
        return "You Win! Rock Beats Scissors!";
      }
    case "p":
      if (computerSelection == "r") {
        playerScore++;
        return "You Win! Paper Beats Rock!";
      } else if (computerSelection == "p") {
        return "Draw! Paper v Paper!";
      } else {
        computerScore++;
        return "You Lose! Scissors Beats Paper!";
      }
    case "s":
      if (computerSelection == "r") {
        computerScore++;
        return "You Lose! Rock Beats Scissors!";
      } else if (computerSelection == "p") {
        playerScore++;
        return "You Win! Scissors Beats Paper!";
      } else {
        return "Draw! Scissors v Scissors";
      }
  }
};

let game = () => {
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
  playerSelection = "rock";
  game();
});
paper.addEventListener("click", () => {
  playerSelection = "paper";
  game();
});
scissors.addEventListener("click", () => {
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
    endBtn.addEventListener('click', () => {
        location.reload();
    })
});
