export class gato {
    //propiedades
    nombre;
    imagen;
    sexo;
    comida;
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }
    saludar() {
        return `Hola! me llamo ${this.nombre}`;
    }
    maullar() {
        return 'Miauuuuu!!!';
    }
    comer(comida) {
        if (this.comida == comida) {
            return 'Gracias!';
        }else {
    return `Lo siento, solo como ${this.comida}`;
}
}
}