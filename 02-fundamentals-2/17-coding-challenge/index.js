const bills = [20, 31, 2, 45, 89, 29, 56, 78, 1, 4];

const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAvg(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const average = calcAvg(bills);
console.log(average);
