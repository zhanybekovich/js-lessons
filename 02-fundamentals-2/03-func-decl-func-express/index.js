// function declaration
// this function can be called before it is declared
function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const johnAge = calcAge(1985);
console.log(johnAge);

const peteAge = calcAge(2002);

// function expression
// this function is can not be called before it is declared
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const bradAge = calcAge2(1987);
console.log(bradAge);

// doesn't matter what to use it's personal choice
