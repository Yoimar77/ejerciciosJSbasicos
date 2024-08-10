//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor 
//con un IVA del 19%.
let precio = parseFloat(prompt("Ingrese el precio del producto: " ));
let precioFinal = (precio *0.19) + precio;
console.log("El precio final con el 19% de descuento es: " + precioFinal);