// Type coercion is when JS automatically changes type
let year = "1991";
console.log(year + 10);
console.log(year - 10);

// Type conversion is when developers changes type manually
year = Number(year);
console.log(year + 10);

let userName = "John";
userName = Number(userName); // NaN
console.log(userName);

let myNumber = 50;
myNumber = String(myNumber);
console.log("100" + myNumber);

let n = "1" + 1;
n = n - 1;
console.log(n);
