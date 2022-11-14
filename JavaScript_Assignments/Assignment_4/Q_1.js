// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Take input from the user in the function parameter and return the output
// using the return statement.
// examples
//matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

// SOLUTION:
// From above image we can see that first house using 6 match sticks
// and for each step it is additional 5 match stick.
// For Ex: First house  - 6 sticks
//         Second house - 1 + 2*5
//         Third house - 1 + 3*5

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function matchHouses(step) {
  return step * 5 + 1;
}
readline.question("Enter the step value\n", (step) => {
  // Convert string to number
  step = parseInt(step);
  if (step < 0) {
    console.log("please enter positive number only");
  } else {
    console.log(
      "number of matchsticks used for house/step number",
      step,
      ":",
      matchHouses(step)
    );
  }
  readline.close();
});
