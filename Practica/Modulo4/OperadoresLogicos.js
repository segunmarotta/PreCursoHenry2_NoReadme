function mayorYMenor(num){
    if (num > 5 && num < 10){
        console.log(true);
    }else console.log(false);
}

mayorYMenor(6);

function mayorYMenorPar(num){
    if (num > 5 && num < 10 && num % 2 === 0){
        console.log(true);    
    }else console.log(false);
    }

mayorYMenorPar(7); //da false porque el numero no es par


function operadorOr(str){
    if (str === "henry" || str.length < 2) {
        console.log(true);
        
    }else console.log(false);
}

operadorOr("Javascript");
operadorOr("p");



function negacion(permiso){
    if (!permiso) {console.log("Tiene permiso") //!permiso = busca que sea distitno a permiso
        
    }
}

negacion(true);
negacion(false);

function negacionO2(permiso){
    if (permiso !== 1) {console.log("Tiene permiso 2") //!= not equal !== not equal or not equal type
        
    }else console.log("no es igual");
}

negacionO2(1); //debe ser distinto de 1 para que se cumpla la condicion
negacionO2(2);//al ser distinto se cumple la condicion

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    }else console.log(false);
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);