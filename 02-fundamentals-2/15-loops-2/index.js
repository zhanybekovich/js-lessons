const friends = ["Mike", "Bob", "Mary", "Pete"];

for (let i = 0; i < friends.length; i++) {
  console.log(`Hello ${friends[i]}`);
}

for (let i = friends.length; i > 0; i--) {
  let deletedFriend = friends.pop();
  console.log(`Deleted friend ${deletedFriend}`);
}

console.log(friends);

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
