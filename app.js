let words = []

function LeerArchivoPalabras(){
    fetch('./words.json')
    .then(function(resp){
        return resp.json()
    })
    .then(function(respJSON){
        //console.log(respJSON);
        words = respJSON
        const posicion = seleccionarPalabra()
        console.log(posicion)
    })
    .catch(function(err){
        console.log(err);
    })


}


/* SOLO 1 LETRA TANTO MAYUSCULA COMO MINUSCULA --> poner TRY-CATCH*/

function validarDatos(e){
    const palabraSecreta =document.getElementById("txtLetra")
    //validaciones mediante RegEx
    if(!txtLetra.value.match(/[a-z]/)){ //si es diferente de una letra: ERROR
        Swal.fire({ 
            title: "Error!",
            text: "Tienes que introducir una letra.",
            icon: "error"
          });
    } else { //si es una letra
        //correcto
        
    }

}

function cambiarImagen(){
    const imgInicial = document.getElementById("imgInicial")

    /*if(la imagen es la 8){ 
        ganaPierde.innerText = "..que tengo aquí colgado!"
        ganaPierde.style.color = "red"
    } else {
        ganaPierde.innerText = "...a quién has salvado!"
        //ganaPierde.style.color = "green"
    }*/
}

function seleccionarPalabra(){
    let posicion = words[Math.floor(Math.random() * words.length)].item
    return posicion
}


console.log(seleccionarPalabra())

