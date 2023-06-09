const friends = ["John", "Peter", "Brad", "Mary"];
console.log(friends);

const years = new Array(1991, 2005, 2023);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[4]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Steve";
console.log(friends[2]);

friends[8] = "Bob";
console.log(friends);
console.log(friends.length);

const john = ["John", "Smith", 1991, ["Scott", "Elizabeth", "Mike"]];
console.log(john);
console.log(john[3][1]);
