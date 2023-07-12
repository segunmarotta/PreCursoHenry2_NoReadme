
var arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


function encontrarLetraP(string) {
    var letras = string.split("")

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === "p"){
            console.log("si contiene a P");
        }
    }
}

encontrarLetraP("puey");
encontrarLetraP("Henry");


//While

var arry = [];

while (arry.length < 5) {
    arry.push("Messi");
}

console.log(arry)