//Forma rapida y sencilla de hacer procesos repetitivos

var suma = 0;

// for (let i = 0; i < 10; i++) {
//     suma = suma + 1;
//     console.log(suma);
    
// }

for (let i = 0; i < 5; i++) { //For es utilizado cuando sabemos la cantidad exacta de pasos que queremos ejecutar
    suma = suma + i; //suma + valor de la interaccion. resultado da 10 porque se van sumando los valores ya acumulados por interaccion
    console.log("variable de interacion ", i); //quiero saber el valor de I, su valor va a depender de que numero de interracion este
    
}

console.log("variable suma ", suma)

var suma2 = 0;

//While se usa cuando no sabemos con certeza cuantos pasos necesitaremos hasta finalizar la ejecucion.

while (suma2 < 3) {  //La accion se repite hasta que se cumpla la condicion, a diferencia de FOR que uno le dice la cantidad de veces que se debe ejecutar
    suma2 = suma2 + 1;
    console.log("Valor suma2 ",suma2);
}




