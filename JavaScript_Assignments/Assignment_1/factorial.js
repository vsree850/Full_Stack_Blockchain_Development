// program to find the factorial of a number

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// take input from the user
readline.question("Enter the number\n", (number) => {
  // Convert string to number
  number = parseInt(number);
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
  }
  readline.close();
});
