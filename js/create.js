function guardar() {
 
    let c = document.getElementById("txtCarrera").value
    let d = document.getElementById("txtDuracion").value
    let t = document.getElementById("txtTecnologias").value
    let i = document.getElementById("txtImage").value
 
    let oferta = {
        carrera: c,
        duracion: d,
        tecnologias: t,
        image: i
    }
    let url = "https://monimelgarejo.pythonanywhere.com/ofertas"
    //"http://localhost:5000/ofertas"
    var options = {
        body: JSON.stringify(oferta),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Guardado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al guardar" )
            console.error(err);
        })
}
