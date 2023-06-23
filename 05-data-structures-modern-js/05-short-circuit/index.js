// Logical operation can also return truthy values

console.log(3 || "John");
console.log("" || "John");
console.log(true || 0);
console.log(undefined || "John");
console.log(null || undefined);
console.log(null || 0);
console.log("" || null);

const restaurant = {
  guests: 2,
  //guests: 0, // for short circuit
};
const guests = restaurant.guests ? restaurant.guests : 10;

console.log(guests);

// short circuit
const guests2 = restaurant.guests || 10;

console.log("================================");

// AND works opposite way
console.log(0 && "John");
console.log(5 && "John");
console.log("" && 0);
