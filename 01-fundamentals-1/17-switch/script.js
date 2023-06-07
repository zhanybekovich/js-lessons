const day = new Date().getDay();

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("There are only 7 days in a week");
}

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working day");
    break;
  case 6:
  case 7:
    console.log("Weekend day");
    break;
  default:
    console.log("There are only 7 days in a week");
}

console.log();
