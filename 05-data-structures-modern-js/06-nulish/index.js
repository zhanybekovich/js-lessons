const restaurant = {
  // guests: 2,
};

// nullish is null and undefined
const guests = restaurant.guests ?? 10;
// 10 if guests key in restaurant is null or undefined
console.log(guests);
