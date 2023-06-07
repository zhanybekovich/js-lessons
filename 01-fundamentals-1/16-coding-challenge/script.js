const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 103;
const dolphinsAverageScore =
  (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = 96;
const koalasScore2 = 108;
const koalasScore3 = 103;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

const minScore = 100;
console.log(`Dolphins-${dolphinsAverageScore}, Koalas-${koalasAverageScore}`);

if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore >= minScore
) {
  console.log(`Winner is Dolphins ${dolphinsAverageScore}`);
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= minScore
) {
  console.log(`Winner is Koalas: ${koalasAverageScore}`);
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= minScore &&
  koalasAverageScore >= minScore
) {
  console.log(`Draw`);
} else {
  console.log("There is no winner");
}
