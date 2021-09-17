import { Saijayin, Humano } from "./Razas";

let participantes = []
document.getElementsByName("btnRegistrar").addEventListener("click", () => {
    
    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let previewElement = document.getElementById("preview");
    let ImagenSrcbg = previewElement.style.backgroundImage;
    let imgSrc = ImagenSrcbg.slice(5, ImagenSrcbg.length - 2);
    let ki = document.getElementById("poderPelea");

    let nuevoParticipante;

    if (raza.value == "Saiyajin") {
        nuevoParticipante = new Saijayin(
            nombre.value,
            imgSrc.value,
            ki.value,
            raza.value)
    } else if (raza.value == "Humano") {
        nuevoParticipante = new Humano(
            nombre.value,
            imgSrc.value,
            ki.value,
            raza.value)
    }

    participantes.push(nuevoParticipante);
    console.log(participantes);

});