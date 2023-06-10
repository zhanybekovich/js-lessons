const john = {
  firstName: "John",
  lastName: "Smith",
  age: new Date().getFullYear() - 1997,
  job: "Developer",
  friends: ["Mike", "Bob", "Brad"],
};

console.log(john.firstName);
console.log(john.lastName);
console.log(john.age);
console.log(john.job);
console.log(john.friends);

console.log("=================");

console.log(john["firstName"]);
console.log(john["lastName"]);
console.log(john["age"]);
console.log(john["job"]);
console.log(john["friends"]);

const nameKey = "firstName";
console.log(john[nameKey]);

const interestedIn = prompt(
  "What do you want to know about John? Choose between firstName, lastName, age or job"
);
console.log(john[interestedIn]);

if (john[interestedIn]) {
  console.log(john[interestedIn]);
} else {
  console.log("Wrong request!");
}

// add key value pair
john.location = "Boston";
console.log(john.location);
console.log(john);

console.log(
  `${john.firstName} has ${john.friends.length} friends and his best friend is ${john.friends[0]}`
);
