const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than John's (${markBMI})`);
}
