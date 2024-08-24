//Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
//compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.
let cadena = "Javascript es genial";
let cantidadPalabras =1;
for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] ===" ") {
        cantidadPalabras+=1;
    }
}
console.log("La cadena "+cadena+" tiene "+cantidadPalabras+" palabras");

