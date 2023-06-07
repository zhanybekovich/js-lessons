const age = 10;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Can start driving");
} else {
  console.log("Can not start driving");
}

const userRole = "user";

if (userRole === "admin") {
  console.log("Hello admin!");
} else if (userRole === "moderator") {
  console.log("Hi Moderator!");
} else {
  console.log("Hello Guest!");
}
