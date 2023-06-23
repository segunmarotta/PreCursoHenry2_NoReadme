function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

//si le quitamos el return y probamos en la terminal la funcion vamos a ver que no devuelve valor, si devuelve el consoloe.log pero eso no es un valor



function otraFuncion(){
    return (
        "el nombre retornado por la funcion ' cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog('camilo')
    );

}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);  //La funcion corta simpre que llega al return, esta linea no se ejecutara
}



