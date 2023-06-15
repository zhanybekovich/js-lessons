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

message.textContent = secretNumber;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "Enter Your Number!";
  } else if (guess === secretNumber) {
    message.textContent = "Correct!";
    // documentBody.style.backgroundColor = "green";
    documentBody.classList.add("success");
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
