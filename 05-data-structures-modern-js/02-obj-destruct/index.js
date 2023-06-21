const user = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

// const { firstName, age } = user;
// console.log(firstName, age);

// different var names than object keys
const { firstName: userName, age: userAge } = user;
console.log(userName, userAge);

// mutating vars during destructuring
let a = 111;
let b = 222;
const myObj = {
  a: 23,
  b: 45,
  c: 40,
};

({ a, b } = myObj);
console.log(a, b);

// nested objects
const myObj2 = {
  c: 100,
  d: {
    x: 1,
    y: 2,
  },
};

const {
  d: { x, y },
} = myObj2;

console.log(x, y);
