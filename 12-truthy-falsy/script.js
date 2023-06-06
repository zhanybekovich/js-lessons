// Falsy values
// 0, "", undefined, null, NaN

// Truthy values
// Everything that is not falsy is truthy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(-1));
console.log(Boolean(40));

const money = 40;

if (money) {
  console.log("Have money!");
} else {
  console.log("Get a job and earn money!");
}
