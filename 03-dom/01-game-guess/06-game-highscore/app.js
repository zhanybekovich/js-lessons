// find element
// document.querySelector(".message").textContent = "Correct!";
// document.querySelector(".number").textContent = 14;
// document.querySelector(".score").textContent = 45;
// document.querySelector(".guess").value = 50;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".score");
const documentBody = document.body;
const number = document.querySelector(".number");
const btnStartAgain = document.querySelector(".btn-again");
let highScore = 0;
const highScoreLabel = document.querySelector(".highscore");
const guess = document.querySelector(".guess");

btnStartAgain.addEventListener("click", () => {
  number.textContent = "?";
  scoreLabel.textContent = 20;
  message.textContent = "Guess...";
  guess.value = "";
  documentBody.classList.remove("success");
});

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "Enter Your Number!";
  } else if (guess === secretNumber) {
    message.textContent = "Correct!";
    // documentBody.style.backgroundColor = "green";
    number.textContent = secretNumber;
    documentBody.classList.add("success");

    if (score > highScore) {
      highScore = score;
      highScoreLabel.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Too High";
      score--;
      scoreLabel.textContent = score;
    } else {
      message.textContent = "You Lost the Game!";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "Too Low";
      score--;
      scoreLabel.textContent = score;
    } else {
      message.textContent = "You Lost the Game!";
    }
  }
});
