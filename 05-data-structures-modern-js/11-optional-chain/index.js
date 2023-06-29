const weekDays = ["monday", "tuesday"];

const openingHours = {
  [weekDays[0]]: {
    open: "9:00",
    closed: "22:00",
  },
  [weekDays[1]]: {
    open: "12:00",
    closed: "23:00",
  },
};

const restaurant = {
  name: "Classic",

  openingHours,

  logName() {
    console.log(this.name);
  },
};

// standard way to check existence of the key
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} else {
  console.log("No such key");
}

// ES2020 optional chaining --> if property does not exist returns undefined
console.log(restaurant.openingHours.mon?.open);

// Optional chaining in methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// On arrays
const users = [{ name: "John" }];
console.log(users[0]?.name ?? "User array is empty");
