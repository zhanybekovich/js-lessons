const john = {
  firstName: "John",
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },

  // arrow functions do not have this keyword
  // don't use arrow functions as a method
  greet: () => {
    console.log(`Hello ${this.firstName}`);
  },
};

john.greet();

// argument keywords

const someFunc = function (a, b) {
  console.log(arguments);
  return a + b;
};

someFunc(2, 5);

// arrow functions do not have argument keyword

const someFunc2 = (a, b) => {
  console.log(arguments);
  return a + b;
};

someFunc2(2, 5);
