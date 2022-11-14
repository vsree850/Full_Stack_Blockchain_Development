// 3. Write a program to find whether a given number is special number or
// not-
// If the sum of the factorial of digits of a number (N) is equal to the
// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(num) {
  if (num == 1 || num == 0) return 1;

  return num * factorial(num - 1);
}
function CheckSpecialNumorNot(value) {
  let sum = 0;
  let quotient = value;
  do {
    sum += factorial(quotient % 10);
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
  } else if (CheckSpecialNumorNot(value)) {
    console.log(value, "is special number");
  } else {
    console.log(value, "is not special number");
  }
  readline.close();
});
