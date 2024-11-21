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

function cambiarImagen(){
    const imgInicial = document.getElementById("imgInicial")
    
}