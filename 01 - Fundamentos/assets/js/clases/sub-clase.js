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

class Heroe extends Persona{
    clan = 'sin';
    constructor (nombre, identidad, frase, clan){
        super(nombre, identidad, frase);
        this.clan = clan;
    }

    quienSoy(){
        super.quienSoy();
        console.log(`Pertenezco a ${this.clan}`);
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Hola, soy Spiderman', 'Marvel');
const superman = new Persona('Clark Kent', 'Superman', 'Mas rapido que una bala');
const batman = new Persona('Bruno Diaz', 'Batman', 'I\'m Batrman');

console.log(spiderman.quienSoy());