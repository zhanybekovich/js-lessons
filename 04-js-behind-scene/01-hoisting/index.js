// console.log(me);
// console.log(job);
// console.log(year);

// var me = "John";
// let job = "dev";
// const year = 1995;

console.log(getSum(10, 20));
// console.log(sayHello());

function getSum(a, b) {
  return a + b;
}

const sayHello = function () {
  console.log("Hello");
};

// hoisting is dangerous below code shows pitfall of hoisting!

if (!products) {
  deleteSmth();
}

var products = 10;

// Example
function deleteSmth() {
  console.log("Deleted");
}

// variables created by var create property on window object
var userName = "john";
console.log(window.userName);
