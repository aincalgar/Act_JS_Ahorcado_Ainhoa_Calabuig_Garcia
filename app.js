let words = []
let palabraSecreta /* words[Math.floor(Math.random() * words.length)];*/
let letrasAcertadas = [];
let letrasEquivocadas = []
let intentosRestantes = 8


function LeerArchivoPalabras(){
    fetch('./words.json')
    .then(function(resp){
        return resp.json()
    })
    .then(function(respJSON){
        //console.log(respJSON);
        words = respJSON.words
        palabraSecreta = seleccionarPalabra()
        console.log(palabraSecreta)
        inicializarJuego()
    })
    .catch(function(err){
        console.log(err);
    })
}

function seleccionarPalabra(){
    let aleatorio = Math.round(Math.random() * (words.length - 1)) //Se crea variable para guardar una posicion aleatoria del array
    palabraElegida = words[aleatorio] //Se asigna a una variable la posicion seleccionada del array para retornar el valor de la posicion aleatoria
    return palabraElegida
}

function inicializarJuego(){
     /*palabraSecreta = seleccionarPalabra(); //para obtener la palabra aleatoria*/
     letrasAcertadas = Array(palabraSecreta.length).fill('_'); //para crear guiones para la palabra, fill sirve para modificar los elementos de un array de forma simple

}

/* SOLO 1 LETRA TANTO MAYUSCULA COMO MINUSCULA --> poner TRY-CATCH*/

function validarDatos(e){
    const insertarLetra =document.getElementById("txtLetra")
    const letra = insertarLetra.value.toUpperCase()
    //validaciones mediante RegEx
    try{
        if(!txtLetra.value.match(/[a-z]/)){ //si es diferente de una letra: ERROR
            Swal.fire({
                title: "Error!",
                text: "Tienes que introducir una letra.",
                icon: "error"
            });
        } 
    } catch (err){
        //no se que poner
    }
}

function verificarLetra(letra) {
    if (palabraSecreta.includes(letra)){ //si la palabra incluye la letra
        for(let i=0; i<palabraSecreta.length; i++){
            if(palabraSecreta[i]===letra){ //si la letra esta en alguna posicion de la palabra se acumula en las letrasAcertadas
                letrasAcertadas[i] = letra
            }
        }
        if (!palabraSecreta.includes("_")) { //si la palabra no incluye ningun guion se gana
            //finalizar juego 
        }
    } else {
        if (!letrasEquivocadas.includes(letra)){ //si la letra es equivocada
            //no se que poner
        }
    }
}




function cambiarImagen(){
    //const imgInicial = document.getElementById("imgInicial")
    const imgInicial = 8 - intentosRestantes +1
    if (imgInicial >= 1 && imgInicial<= 8){
        const ahorcado = document.getElementById(`ahorcado-${imgInicial}`)
        if (ahorcado) {
            
        }
    }
    
    /*if(la imagen es la 8){ 
        ganaPierde.innerText = "..que tengo aquí colgado!"
        ganaPierde.style.color = "red"
    } else {
        ganaPierde.innerText = "...a quién has salvado!"
        //ganaPierde.style.color = "green"
    }*/
}


/*
function palabraSecreta(word){
    
    word = words[Math.floor(Math.random() * words.length)] + 0; //Random para obtener una palabra aleatoria desde el array
    //El 0 es el mínimo rango que puede retornar
    return word;
    
    //return word[Math.floor(Math.random()*words.length-1)]
    let posicion = words[Math.floor(Math.random() * words.length - 1)]
    
   //posicion = words.match
   
}*/


/*
posicion = words.Math.floor(Math.random()*words.length-1)

function obtener_palabra(){

}

function marcar_letra(){
    
}*/

LeerArchivoPalabras();
