"use strict";

function logger() {
  console.log("My name is John");
}

logger();
logger();

function logger2(name) {
  console.log(`My name is ${name}`);
}

logger2("Pete");
logger2("Mary");

function getSum(number1, number2) {
  const sum = number1 + number2;

  return sum;
}

const mySum = getSum(248, 100);
console.log(mySum);

const mySum2 = getSum(690, 400);
console.log(mySum2);
