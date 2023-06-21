const arr = [7, 8, 19];
const notGood = [1, 2, arr[0], arr[1], arr[2]];
console.log(notGood);

const good = [1, 2, ...arr];
console.log(good);
console.log(...good);

const restaurant = {
  menu: ["burger", "pizza"],
};
const newMenu = [...restaurant.menu, "hot dog", "shaurma"];
console.log(newMenu);

// copying array
const menuCopy = [...restaurant.menu];
console.log(menuCopy);

// merging arrays
const jointMenu = [...restaurant.menu, ...newMenu];
console.log(jointMenu);

// spread operators works for all iterables
// arrays
// strings
// maps
// sets

const myStr = "hello world";
const myLetters = [...myStr];
console.log(myLetters);
