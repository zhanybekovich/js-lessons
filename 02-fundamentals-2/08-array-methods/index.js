const friends = ["John", "Peter", "Brad", "Mary"];
console.log(friends);

// push method adds element to the end and returns the length of the array
friends.push("Steve");
console.log(friends);

// unshift method adds element to the begin and returns the length of the array
friends.unshift("Bob");
console.log(friends);

// pop method removes element from the end and returns the removed element
friends.pop();
console.log(friends);

// shift method removes element from the begin and returns the removed element
friends.shift();
console.log(friends);

// index of
console.log(friends.indexOf("Peter"));

// includes
console.log(friends.includes("Peter"));
console.log(friends.includes("Susan"));
