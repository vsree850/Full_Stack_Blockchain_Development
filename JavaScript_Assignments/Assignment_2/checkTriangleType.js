// program to find given year leap or not

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkTriangleType(side1, side2, side3) {
  if (side1 < 0 || side2 < 0 || side3 < 0) {
    console.log("Invalid sides");
    return;
  }
  if (side1 == side2 && side1 == side3) {
    console.log("Given triangle is equilateral");
  } else if (side1 == side2 || side1 == side3) {
    console.log("Given triangle is isosceles");
  } else {
    console.log("Given triangle is scalene");
  }
}

readline.question("Enter the first side of triangle\n", (side1) => {
  // Convert string to number
  side1 = parseInt(side1);
  readline.question("Enter the second side of triangle\n", (side2) => {
    side2 = parseInt(side2);
    readline.question("Enter the third side of triangle\n", (side3) => {
      side3 = parseInt(side3);
      checkTriangleType(side1, side2, side3);
      readline.close();
    });
  });
});
