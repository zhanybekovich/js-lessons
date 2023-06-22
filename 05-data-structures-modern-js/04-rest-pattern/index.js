// Rest  operator on right side
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2);

// Rest operator on left side
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest operator with objects
const shop = {
  sunday: {
    open: 12,
    close: 18,
  },
  monday: {
    open: 8,
    close: 17,
  },
  tuesday: {
    open: 9,
    close: 17,
  },
};

const { sunday, ...weekdays } = shop;
console.log(sunday, weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3);
add(100, 200, 300, 400);

const x = [20, 30];
add(...x);
