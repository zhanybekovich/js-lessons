const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const averageDolphins = calcAverage(44, 123, 171);
const averageKoalas = calcAverage(65, 54, 49);

function checkWinner(avg1, avg2) {
  if (avg1 >= 2 * avg2) {
    console.log(`Dolphins win ${avg1} vs ${avg2}`);
  } else if (avg2 >= 2 * avg1) {
    console.log(`Koalas win ${avg2} vs ${avg1}`);
  } else {
    console.log("No winner!");
  }
}

checkWinner(averageDolphins, averageKoalas);
