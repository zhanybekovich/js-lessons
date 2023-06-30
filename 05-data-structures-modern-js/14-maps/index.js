const restaurant = new Map();
restaurant.set("name", "Classic");
restaurant.set(1, "Firenze");
restaurant.set(2, "Lisbon");
restaurant
  .set("categories", ["Italian", "Pizzeria"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(restaurant);
console.log(restaurant.get("name"));
console.log(restaurant.get(true));

console.log("===");

// more methods and properties
console.log(restaurant.has("categories"));
console.log(restaurant.size);
restaurant.delete(2);
console.log(restaurant);
console.log("===");

const arr = [1, 2];
restaurant.set(arr, "Test");

console.log(restaurant.get(arr));

restaurant.clear();
console.log(restaurant);
