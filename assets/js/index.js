import { Saijayin, Humano } from "./clases/Razas.js";

let participantes = [];
document.getElementById("btnRegistrar").addEventListener("click", () => {
  let nombre = document.getElementById("nombre");
  let raza = document.getElementById("raza");
  let previewElement = document.getElementById("preview");
  let imagenSrcbg = previewElement.style.backgroundImage;
  let imgSrc = imagenSrcbg.slice(5, imagenSrcbg.length - 2);
  let ki = document.getElementById("poderPelea");

  let nuevoParticipante;

  if (raza.value == "Saiyajin") {
    nuevoParticipante = new Saijayin(
      nombre.value,
      imgSrc,
      ki.value,
      raza.value
    );
  } else if (raza.value == "Humano") {
    nuevoParticipante = new Humano(nombre.value, imgSrc, ki.value, raza.value);
  }


    if (raza.value && nombre.value && ki.value && imagenSrcbg) {
        participantes.push(nuevoParticipante);

        nombre.selectedIndex = 0;

        raza.selectedIndex = 0;

        previewElement.style.backgroundImage = "none";

        imagenSrcbg = previewElement.style.backgroundColor = "#f0f0f0";

        ki.value = "";

        reloadTable();

    } else {
        alert("Faltan datos por llenar");
    }
 });

const reloadTable = () => {
  const participantesTemplate = document.getElementById("Participantes");
  participantesTemplate.innerHTML = "";
  participantes.forEach((p, i) => {
    participantesTemplate.innerHTML += `
        <div class="px-1 pb-1 participante" data-fighter="${p.getNombre()}">
            <div class="card">
                <img
                    src="${p.getImg()}"
                    class="card-img-top"
                    />
                    <div class="card-body">
                    <h4 class="card-title">${p.getNombre()}</h4>
             
                    <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                    <h6 class="card-text">Poder: <span class="text-danger"> ${p.getPoder()} </span>
                    <button class="btn btn-warning mt-1" onclick="activarHabilidad('${i}')">¡Especial!</button>
                    </div>
                </div>
            </div>       
        `;
  });
};

window.activarHabilidad = (i) => {
    const participante = participantes[i];
    if (participante.getRaza() == "Saiyajin") {
        participante.Transformacion();
    } else if (participante.getRaza() == "Humano") {
        participante.Coraje();
    }
    reloadTable();
};

document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a, b) => b.getPoder() - a.getPoder())[0];
    const nombre = masFuerte.getNombre();

    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 10px 5px red"
});