const ordersSet = new Set([1, 3, 1, 3, 5, 2]);
console.log(ordersSet);

console.log(new Set("Peter"));

// size of a set
console.log(ordersSet.size);

// check if element is in the set
console.log(ordersSet.has(4));

// add element to the set
ordersSet.add(9);
console.log(ordersSet);

// remove element from the set
ordersSet.delete(1);
console.log(ordersSet);

// getting unique elements from an array
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

// looping
for (const order of ordersSet) {
  console.log(order);
}

// delete all elements
ordersSet.clear();
console.log(ordersSet);
