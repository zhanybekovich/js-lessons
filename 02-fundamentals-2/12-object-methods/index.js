const john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1997,
  hasDriversLicense: false,
  job: "Developer",
  friends: ["Mike", "Bob", "Brad"],

  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // },
  calcAge: function () {
    console.log(this);
    return new Date().getFullYear() - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and ${
      this.hasDriversLicense
        ? "has driver's license"
        : "has not driver's license"
    }`;
  },
};

// console.log(john.calcAge(john.birthYear));
// console.log(john["calcAge"](john.birthYear));

console.log(john.calcAge());
console.log(john.getSummary());
