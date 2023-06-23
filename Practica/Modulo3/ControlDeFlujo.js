function viajar(destino){
    if(destino === "brasil"){
        console.log("gire a la izquierda")
    }else if (destino === "argentina"){
        console.log("gire a la derecha")
    }else {
        console.log("nos perdimos");
    }
}

viajar("brasil");
viajar("argentina");
viajar("eeuu");


function puedeManejar(edad){
    if (edad >= 18){
        console.log(true);
    }else {
        console.log(false);
    }
}

puedeManejar(19);
puedeManejar(15);