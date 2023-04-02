var texto = prompt("Ingrese un texto:");
var plantilla = texto.toLowerCase();
var contador = 0;

for (let i = 0; i < plantilla.length; i++) {
    if (plantilla[i] == 'a' || plantilla[i] == 'e' || plantilla[i] == 'i' || plantilla[i] == 'o' || plantilla[i] == 'u') {
        contador ++;
    }
}

if (contador > 0) {
    document.write(`El texto ingresado contiene ${contador} vocales`);
} else {
    document.write(`El texto ingresado no contiene vocales`);
}

