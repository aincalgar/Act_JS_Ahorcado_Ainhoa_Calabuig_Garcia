let words = null

function LeerArchivoPalabras(){
    fetch("words.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(respJSON){
        //console.log(respJSON);
        words = respJSON
    })
    .catch(function(err){
        console.log(err);
    })
}

function validarDatos(e){

}

function cambiarImagen(){
    const imgInicial = document.getElementById("imgInicial")
    //ganaPierde.innerText = "..que tengo aquí colgado!"
    //ganaPierde.style.color = "red"

    /*} else {
        ganaPierde.innerText = "...a quén has salvado!"
        //ganaPierde.style.color = "green"
    }*/
}

function crearMatriz(){
    
}