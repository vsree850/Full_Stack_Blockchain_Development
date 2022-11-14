//program to convert temperatures to and from Celsius, Fahrenheit.
// [Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// We can rewrite Formula F = (c * 1.8) + 32;
// C = (F - 32) / 1.8;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the Temp\n", (temperature) => {
  if (temperature[temperature.length - 1] == "C") {
    temp = parseFloat(temperature.substring(0, temperature.length - 1));
    f = temp * 1.8 + 32;
    console.log(`The equivalent of ${temperature} is ${f}F.`);
  } else if (temperature[temperature.length - 1] == "F") {
    temp = parseFloat(temperature.substring(0, temperature.length - 1));
    c = (temp - 32) / 1.8;
    console.log(`The equivalent of ${temperature} is ${c}C.`);
  } else {
    console.log(
      "Invalid temparature standard, please specify in XXF or XXC format"
    );
  }
  readline.close();
});
