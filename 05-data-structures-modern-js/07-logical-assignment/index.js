const rest1 = {
  name: "Hello",
  guests: 20,
};

const rest2 = {
  name: "Pizza",
  owner: "John",
};

rest1.guests = rest1.guests || 10;
rest2.guests = rest2.guests || 10;

console.log(rest1);
console.log(rest2);

// logical OR assignment
rest1.guests ||= 10;
rest2.guests ||= 10;
console.log(rest1);
console.log(rest2);

// logical nullish assignment
rest1.guests ??= 10;
rest2.guests ??= 10;

console.log(rest1);
console.log(rest2);

console.log("==============");

// logical AND assignment
rest1.owner &&= "Brad";
rest2.owner &&= "Brad";

console.log(rest1);
console.log(rest2);
