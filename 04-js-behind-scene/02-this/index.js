// this in the global scope is a window object
// console.log(this);

const calcSmth = function (year) {
  console.log(2035 - year);
  console.log(this);
};

const calcSmth2 = (year) => {
  console.log(2035 - year);
  console.log(this);
};

calcSmth(1984);
calcSmth2(1989);

// this points to the owner object calling the method
const john = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

john.calcAge();

const brad = {
  year: 2005,
};

brad.calcAge = john.calcAge;
brad.calcAge();

const something = john.calcAge;
something();
