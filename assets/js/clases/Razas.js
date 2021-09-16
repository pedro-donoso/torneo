import Personaje from './Personaje';

class Saijayin extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }

    Transformacion() {
        let poder = this.getPoder();
        this.setPoder(parseInt(poder * 1.8));
    }

}

class Humano extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }

    Coraje() {
        let poder = this.getPoder();
        this.setPoder(parseInt(poder * 1.2));
    }

}