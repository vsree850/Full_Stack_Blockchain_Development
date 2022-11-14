// program to find grade for given marks

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gradeEvaluation(marks) {
  switch (true) {
    case marks >= 90 && marks <= 100:
      console.log("S Grade");
      break;
    case marks >= 80 && marks <= 90:
      console.log("A Grade");
      break;
    case marks >= 70 && marks <= 80:
      console.log("B Grade");
      break;
    case marks >= 60 && marks <= 70:
      console.log("C Grade");
      break;
    case marks >= 50 && marks <= 60:
      console.log("D Grade");
      break;
    case marks >= 40 && marks <= 50:
      console.log("E Grade");
      break;
    case marks >= 0 && marks <= 40:
      console.log("Student has Failed");
      break;
    default:
      console.log("Invalid Marks");
      break;
  }
}
readline.question("Enter the marks\n", (marks) => {
  // Convert string to number
  marks = parseInt(marks);
  gradeEvaluation(marks);
  readline.close();
});
