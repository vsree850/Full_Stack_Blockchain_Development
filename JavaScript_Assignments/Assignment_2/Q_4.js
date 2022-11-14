// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findAllPrimeNumbers(start, end) {
  let arr = [];

  // Explicitly handling the cases when a is less than 2
  // since 0 and 1 are not prime numbers
  if (start <= 2) {
    start = 2;
    if (end >= 2) {
      start++;
    }
  }
  // MAKING SURE THAT a IS ODD BEFORE WE BEGIN
  // THE LOOP
  if (start % 2 == 0) start++;

  // NOTE : WE TRAVERSE THROUGH ODD NUMBERS ONLY
  for (i = start; i <= end; i = i + 2) {
    let flag = 1;
    // WE TRAVERSE TILL SQUARE ROOT OF j only.
    // (LARGEST POSSIBLE VALUE OF A PRIME FACTOR)
    for (let j = 2; j * j <= i; ++j) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    // flag = 1 means i is prime
    // and flag = 0 means i is not prime
    if (flag == 1) {
      arr.push(i);
    }
  }
  return arr;
}
readline.question("Enter the start value\n", (start) => {
  // Convert string to number
  start = parseInt(start);
  readline.question("Enter the end value\n", (end) => {
    // Convert string to number
    end = parseInt(end);
    let primenums = findAllPrimeNumbers(start, end);
    let primenumsfact = primenums.map((ele) => {
      let fact = 1;
      for (let i = 1; i <= ele; i++) {
        fact *= i;
      }
      return fact;
    });
    console.log(
      "List of prime numbers and their factorials between ",
      start,
      "and ",
      end,
      primenums,
      primenumsfact
    );
    readline.close();
  });
});
