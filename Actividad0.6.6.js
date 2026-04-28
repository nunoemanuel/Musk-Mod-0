const readLine = require("readline-sync");

// Función reutilizable
function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

// Bucle principal
while (true) {
    const input = readLine.question("Introduce un año (o escribe 'salir'): ");

    if (input.toLowerCase() === "salir") {
        console.log("Programa Finalizado.");
        break;
    }

    const año = Number(input);

    if (!Number.isInteger(año)) {
        console.log("Error: introduce un número entero válido.\n");
        continue;
    }

// Mostramos en pantalla si el año añadido es bisiesto o no
    console.log(
        esBisiesto(año)
            ? `El año ${año} es bisiesto.\n`
            : `El año ${año} no es bisiesto.\n`
    );
}