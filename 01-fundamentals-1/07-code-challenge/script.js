const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherMBI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherMBI);
