var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i]);
}
console.log(args)
console.log(parts)
document.getElementById("txtId").value = parts[0][1]
// document.getElementById("txtCarrera").value = [1][1]
// document.getElementById("txtDuracion").value = [2][1]
// document.getElementById("txtTecnologias").value = [3][1]
document.getElementById("txtCarrera").value = decodeURIComponent(parts[1][1])
document.getElementById("txtDuracion").value = decodeURIComponent(parts[2][1])
document.getElementById("txtTecnologias").value = decodeURIComponent(parts[3][1])
document.getElementById("txtImage").value = parts[4][1]

 
function modificar() {
    let id = document.getElementById("txtId").value
    let i = document.getElementById("txtImage").value
    let c = document.getElementById("txtCarrera").value
    let d = document.getElementById("txtDuracion").value
    let t = document.getElementById("txtTecnologias").value
    let oferta = {
        carrera: c ,
        duracion: d ,
        tecnologias: t,
        image : i
    }
    console.log(oferta);
    let url = "https://monimelgarejo.pythonanywhere.com/ofertas/" + id
    //"http://localhost:5000/ofertas/"+id
    var options = {
        body: JSON.stringify(oferta),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
