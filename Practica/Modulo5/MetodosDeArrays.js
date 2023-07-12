var colores = ["Amarillo", "Azul"];

console.log("Array colores antes del push", colores)

//Push para agregar un elemento al array en la ultima posicion

console.log("Practicando PUSH");

colores.push("Rojo");
console.log(colores);

//Pop Elimina y devuelve el ultimo elemento del Array

console.log("Practicando POP");

colores.pop();
console.log(colores);

//UnShift Agrega uno o mas elementos al inicio de un arreglo, y devuelve la nueva longitud del array

console.log("Practicando UnShift");

colores.unshift("Verde" , "Rosa");
console.log(colores);

//Shift elimina y devuelve el primer elemento de un arreglo

console.log("Practicando SHIFT");

colores.shift();
console.log(colores);

//Includes determina si un array incluye o contiene un elemento especifico. Devuelve True o False en cada caso

console.log("Practicando INCLUDES");

console.log(colores.includes("Amarillo"));
console.log(colores.includes("rosa")); //CaseSensitive por eso da False

var fot = ["Messi" , "Ronaldo"];
console.log("Incluye messi = ", fot.includes("Messi"));


//Every Determina si todos los elementos en un array satisfacen una misma condicion

console.log("Practicando EVERY");

var numeritos = [1, 6, 8, 9, 43]

var cumpleCondicion = numeritos.every( (num) => {num > 5});
console.log(cumpleCondicion);


//Split convierte un string en un array, donde cada elemento contendra un sub-string, dependiendo del parametro divisor que indiquemos

console.log("Practicando SPLIT");

var palabra = "Henri";
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

palabraSeparada.pop() //Eliminamos la I para luego reemplazar con la Y
console.log(palabraSeparada);
palabraSeparada.push("y") //Agregamos la Y como ultimo elemento del array
console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//ForEach Nos hace 'un console.log' por cada elemento del arreglo

console.log("Practicando ForEach");

var numeros = [ 1, 2, 3, 4];
numeros.forEach((num) => {
console.log(num)
});

numeros.forEach((num3) => {
    if (num3 === 3){
        console.log("num3 cumple condicion =", num3);
    }
} )

//MAP sirve para realizar cambios sobre cada arreglo

console.log("Practicando MAP");

var masUno = numeros.map(num => {return num + 1})
console.log(masUno);

