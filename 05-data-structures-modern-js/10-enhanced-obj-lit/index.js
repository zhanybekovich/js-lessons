const weekDays = ["monday", "tuesday"];

const openingHours = {
  // computed
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

  // enhanced obj literal
  openingHours,

  // enhanced method
  logName() {
    console.log(this.name);
  },
};

console.log(restaurant);
restaurant.logName();
