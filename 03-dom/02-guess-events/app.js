// find element
// document.querySelector(".message").textContent = "Correct!";
// document.querySelector(".number").textContent = 14;
// document.querySelector(".score").textContent = 45;
// document.querySelector(".guess").value = 50;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter Your Number!";
  }
  console.log(guess);
});
