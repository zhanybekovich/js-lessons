const john = {
  fullName: "John Smith",
  mass: 76,
  height: 1.71,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.gmi;
  },
};

const mark = {
  fullName: "Mark Miller",
  mass: 82,
  height: 1.67,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}s ${john.bmi}`
  );
} else {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}s ${mark.bmi}`
  );
}
