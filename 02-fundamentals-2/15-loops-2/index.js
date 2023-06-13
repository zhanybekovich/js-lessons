const friends = ["Mike", "Bob", "Mary", "Pete"];

for (let i = 0; i < friends.length; i++) {
  console.log(`Hello ${friends[i]}`);
}

for (let i = friends.length; i > 0; i--) {
  let deletedFriend = friends.pop();
  console.log(`Deleted friend ${deletedFriend}`);
}

console.log(friends);
