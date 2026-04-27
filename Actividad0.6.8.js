const readLine = require("readline-sync");

const altura = readLine.question("Introduce la altura del rectangulo: ");

const base = readLine.question("Introduce la base del rectangulo: ");

for (let i = 0; i < altura; i++) {
    console.log('*'.repeat(base));
}