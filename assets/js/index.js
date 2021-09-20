import { Saijayin, Humano } from "./clases/Razas.js";

let participantes = [];
document.getElementById("btnRegistrar").addEventListener("click", () => {
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
      imgSrc,
      ki.value,
      raza.value
    );
  } else if (raza.value == "Humano") {
    nuevoParticipante = new Humano(nombre.value, imgSrc, ki.value, raza.value);
  }

    participantes.push(nuevoParticipante);
    reloadTable();

});

const reloadTable = () => {
  const participantesTemplate = document.getElementById("Participantes");
  participantesTemplate.innerHTML = "";
  participantes.forEach((p, i) => {
    participantesTemplate.innerHTML += `
        <div class="px-3 pb-2 participante" data-fighter="${p.getNombre()}">
            <div class="card">
                <img
                    src="${p.getImg()}"
                    class="card-img-top"
                    />
                    <div class="card-body">
                    <h4 class="card-title">${p.getNombre()}</h4>
                    <hr class="w-50 mx-auto ">
                    <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                    <h6 class="card-text">Poder de pelea: <span class="text-danger"> ${p.getPoder()} </span>
                    <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')">Habilidad Especial</button>
                    </div>
                </div>
            </div>       
        `;
  });
};
