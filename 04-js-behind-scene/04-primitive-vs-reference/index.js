let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const user = {
  name: "John",
  age: 30,
};
const user2 = user;
user2.age = 45;

console.log(user);
console.log(user2);

let lastName = "Peterson";
let oldLastName = lastName;
lastName = "Parker";

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Burger",
  age: 26,
  friends: ["Bob", "Mary"],
};

// const marriedJessica = jessica;
// marriedJessica.lastName = "Muller";
// console.log(jessica);
// console.log(marriedJessica);

// copying object, this is only for the 1st level "shallow copy"
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Fabian";
jessicaCopy.age = 30;
jessicaCopy.friends.push("Mike");
console.log(jessica);
console.log(jessicaCopy);
