"use strict";

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a);
console.log(b);
console.log(c);

console.log("==============");
// destructuring
const [one, two, three] = arr;
console.log(one);
console.log(two);
console.log(three);

const restaurant = {
  name: "Classic Italiano",
  location: "Tavani 23",
  categories: ["Italian", "Pizza", "Pasta"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterMenuIdx, mainMenuIdx) {
    return [this.starterMenu[starterMenuIdx], this.mainMenu[mainMenuIdx]];
  },
};

// const [first, second] = restaurant.categories;
// leaving a hole
let [first, , secondary] = restaurant.categories;
console.log(first, secondary);

// swapping
[first, secondary] = [secondary, first];
console.log(first, secondary);

// receiving data from the obj and returning
const [starter, main] = restaurant.order(1, 0);
console.log(starter, main);

// nested
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting default values
// const [p, q, r] = [8, 9];
// getting undefined r
// console.log(p, q, r);
// with default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
