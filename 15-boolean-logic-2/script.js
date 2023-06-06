const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Can drive");
} else {
  console.log("Can not drive");
}

const isTired = true;

if (hasDriverLicense && hasGoodVision && isTired) {
  console.log("Can Drive");
} else {
  console.log("Can not drive");
}
