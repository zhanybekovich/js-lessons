for (let i = 1; i <= 5; i++) {
  console.log("Hello " + i);
}

let j = 1;

while (j <= 10) {
  console.log("Bye " + j);
  j++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log("Dice " + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
