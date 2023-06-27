//Arrays nos permiten guardar y gestionar info.Tiene distintas posiciones.

//se llama elementos a aquellos datos que hemos guardado. Estos tienen posicion de guardado y se cuenta desde el 0

var listasDeCompras = [];
listasDeCompras[3] = "tomates";
listasDeCompras[1] ="lechuga"

console.log(listasDeCompras);

var elementoDelArray = listasDeCompras[1]; //Guardamos posicion 1 del array en una nueva variable

console.log(elementoDelArray);
console.log(listasDeCompras[3])//Buscamos que nos retorne posicion 3 del array


//Length = nos permite saber cuantos elementos tiene un arreglo. osea saber si extencion (cuenta desde el 1)

console.log(listasDeCompras.length);
var pru = listasDeCompras.length - 1; // me traigo el ultimo valor del array y lo guardo en esta nueva variable
console.log(listasDeCompras[pru]);

var nombres = ["m" , "Ma", "Di", "Ro"].length;
console.log(nombres);