// program to find given year leap or not

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}

readline.question("Enter the year\n", (year) => {
  // Convert string to number
  year = parseInt(year);
  if (checkLeapYear(year) == true) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }

  readline.close();
});
