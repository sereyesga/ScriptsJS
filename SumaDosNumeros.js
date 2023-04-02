var suma = 0;

do {
    var numero = prompt("Introduce tu número");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma += numero;
    } else if (numero != undefined) {
        alert(`${numero} no es un número`);
    }
} while (numero != undefined);
document.write(`La suma es: ${suma}`);