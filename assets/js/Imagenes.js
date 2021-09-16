import Personajes from "./Consulta.js";

document.getElementById("buttonImages").addEventListener("click", async () => {
    const { personajes } = await Personajes.getData();
    console.log(personajes);
    const pj = document.getElementById("nombre").value;
    const imagenesPjTemplate = personajes
        .find((p) => p.name == pj)
        .imagenes.map((i) => `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
        .join("");
    
    document
        .getElementsByClassName(
            "personajes"
        )[0].innerHTML = imagenesPjTemplate;
});



