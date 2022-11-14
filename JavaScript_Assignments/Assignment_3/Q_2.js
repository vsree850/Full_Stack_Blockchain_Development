// 2. Write a program to find whether a given number is armstrong number or
// not-
// The Armstrong number is a number that is equal to the sum of cubes of
// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function CheckArmstringNumorNot(value) {
  let sum = 0;
  let quotient = value;
  do {
    sum += (quotient % 10) ** 3;
    quotient = Math.floor(quotient / 10);
  } while (quotient);

  if (sum == value) {
    return true;
  } else {
    return false;
  }
}
readline.question("Enter the value\n", (value) => {
  // Convert string to number
  value = parseInt(value);
  if (value < 0) {
    console.log("please enter positive number only");
  } else if (CheckArmstringNumorNot(value)) {
    console.log(value, "is armstrong number");
  } else {
    console.log(value, "is not an armstrong number");
  }
  readline.close();
});
