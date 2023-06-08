function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const johnAge = calcAge(1985);
console.log(johnAge);

// Arrow function
const calcAge2 = (birthYear) => new Date().getFullYear() - birthYear;

const saraAge = calcAge2(2002);
console.log(saraAge);

const calcSum = (number1, number2) => {
  const sum = number1 + number2;
  console.log(sum);
  return sum;
};

const mySum = calcSum(20, 40);
