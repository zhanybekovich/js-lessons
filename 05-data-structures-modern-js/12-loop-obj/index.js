const user = {
  name: "John",
  age: 25,
  isMarried: false,
};

// looping keys
const properties = Object.keys(user);
console.log(properties);

for (const key of Object.keys(user)) {
  console.log(key);
}

// looping values
const values = Object.values(user);
console.log(values);
for (const value of Object.values(user)) {
  console.log(value);
}

// looping keys and values
const keysValues = Object.entries(user);
console.log(keysValues);
for (const [key, value] of keysValues) {
  console.log(`${key}: ${value} `);
}
