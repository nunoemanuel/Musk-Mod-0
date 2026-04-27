const readLine = require("readline-sync");

const año = readLine.question("Introduce un año: ");

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
      console.log("El año introducido es bisiesto.");

 } else {
      console.log("El año introducido no es bisiesto.");
 }

