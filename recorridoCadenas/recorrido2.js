/*c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”
*/
let cadena = "Somos SENA";
let caracterVerificar = "o";
let bandera = true;
for (let i = 0; i <cadena.length && bandera; i++) {
    if (cadena[i] == caracterVerificar) {
        bandera = false;
        console.log  ("La cadena " + cadena+" si contiene la letra "+caracterVerificar[0]);
    }else if(i == cadena.length - 1) {
        console.log  ("La cadena " + cadena+" no contiene la letra "+caracterVerificar[0]);
    }
}

let contador = 0;
for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] == caracterVerificar){
        contador+=1;
    }
}
console.log("El caracter "+caracterVerificar+" está "+contador+" veces");

