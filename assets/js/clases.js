class Personaje {
    constructor(nombre, img, poder, raza) {
        let Nombre = nombre;
        let Img = img;
        let Poder = poder;
        let Raza = raza;

        this.getNombre = () => Nombre;
        this.getImg = () => Img;
        this.getPoder = () => Poder;
        this.getRaza = () => Raza;

      

    }
}