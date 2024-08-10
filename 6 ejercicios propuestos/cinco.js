//Cree un programa que tome el valor de un producto e imprima su precio final 
//si éste tiene siempre un descuento del 10%.
let precio = parseFloat(prompt("Ingrese el precio del producto: "))
let descuento = precio * 0.1;
let precioFinal = precio - descuento;
console.log("El precio final del producto es: $" + precioFinal);