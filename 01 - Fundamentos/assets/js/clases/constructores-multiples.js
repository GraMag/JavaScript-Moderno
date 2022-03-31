class Persona{
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }
    
    getInfo() {
        return `info: ${this.nombre} ${this.apellido}, ${this.pais}`;
    }
}

const nombre1 = 'Pedro',
apellido1 = 'Picapiedras',
pais1 = 'EEUU';

const persona1 = new Persona(nombre1, apellido1, pais1);

console.log(persona1.getInfo());
 
const personaObj = {
    nombre: 'Pablo',
    apellido: 'Marmol',
    pais: 'Canada'
}

const persona2 = Persona.porObjeto(personaObj);
console.log(persona2.getInfo());