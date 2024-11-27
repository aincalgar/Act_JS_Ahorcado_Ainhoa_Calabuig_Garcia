let words = []
let palabraSecreta /* words[Math.floor(Math.random() * words.length)];*/
let letrasAcertadas = [];
let letrasEquivocadas = []
let intentosRestantes = 8
const palabraOculta = document.getElementById("palabraSeparada")
let palabraElegida

let nodoBoton = document.querySelector('#boton')

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
    //palabraSecreta = seleccionarPalabra(); //para obtener la palabra aleatoria*/
    //letrasAcertadas = Array(palabraSecreta.length).fill('_'); //para crear guiones para la palabra, fill sirve para modificar los elementos de un array de forma simple
    //nodoBoton.addEventListener('click', comprobarLetra)//llama la uncion comprobarLetra una vez el usuario hace click en el boton
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

/*
function comprobarLetra(letra) {
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
}*/

function separarPalabra(){
    for (let i=0; i < palabraElegida.length; i++){
        palabraOculta += "_ "
        
    }
    console.log(palabraOculta);
    document.getElementById("palabraSeparada").innerText=palabraOculta
}

/*
function comprobarPalabra(){
    let palabraAdivinar = palabraElegida
    for (let i=0; i<letrasElegidas.length; i++){
        //si encuentro una letra en la palabra a adivinar
        if(palabraAdivinar.indexOf(letra) >= 0){
            palabraAdivinar = palabraAdivinar.replace(new RegExp(letra), '_')
        }
        console.log(palabraAdivinar);
    }
    //si no hay más letras para adivinar, el usuario ha ganado
    if (palabraAdivinar.length == 0){
        estaJugando = false
    }
}*/
/*
function elegirLetra(letra){
    if(jugando == false){
        return false
    }
    let adivinado = false //hasta que la letra se encuentre al menos una vez en la palabra
    for (let i=0; i<palabraElegida.length; i++){
        if(palabraElegida[i] == letra){
            adivinado = true
        }
    }
    letrasElegidas += letra //la letra elegida se añade a la lista de las palabras elegidas
    if (adivinado == true){
        comprobarPalabra()
    } else {
        document.getElementById
    }
}*/
/*
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
    }
}*/

LeerArchivoPalabras();
