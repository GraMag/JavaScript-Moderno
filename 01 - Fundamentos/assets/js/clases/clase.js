class Persona {
    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Soy un metodo estatico');
    }

    nombre    = '';
    identidad = '';
    frase     = '';
    comida    = '';
    constructor(nombre = 'Sin informacion', identidad = 'Sin informacion', frase = 'Sin informacion'){
        this.nombre    = nombre;
        this.identidad = identidad;
        this.frase     = frase;

        Persona._conteo++;
    }
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return this.comida;
    }
     

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad secreta es ${this.identidad}`);
    }

    decirFrase(){
        console.log(`${this.identidad} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hola, soy Spiderman');
const superman = new Persona('Clark Kent', 'Superman', 'Mas rapido que una bala');
const batman = new Persona('Bruno Diaz', 'Batman', 'I\'m Batrman');

spiderman.setComidaFavorita = 'Pie de cereza de la Tia May';

spiderman.quienSoy();
superman.decirFrase();

console.log(spiderman);
console.log(Persona.getConteo);