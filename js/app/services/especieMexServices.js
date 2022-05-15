
const especieMex = require("../../app/models/especiesMex")

const especieTotoaba = new especieMex("Totoaba", "Totoaba Mcdonaldi", "Alto golfo de California", "Sciaenidae", "2m", "100kg","https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/06/totoaba-gob-mexico.png")
var url = especieTotoaba.getURL()

const informacion = () =>{
    const info = especieTotoaba.getinfo()
    return info; //regresa la descripcion
}

const imagen = () => {
    const imagenFron = especieTotoaba.getURL()
    return imagenFron //regresa url imagen
}

const frontendImagen = (url = imagen()) =>{
    var imagen = document.getElementById("imagenFrontend");
    imagen.scr(url) //cambia imagen
    /* return url */
}

const sendID = () => {
    frontendImagen(url)
    console.log("ejecutando");
}

console.log(frontendImagen());

module.exports = sendID




