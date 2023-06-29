const arr = ["John", "Pete", "Bob"];

for (const item of arr) {
  console.log(item);
}

console.log("=====");

for (const name of arr.entries()) {
  console.log(name);
}
