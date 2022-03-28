function crearPersona(nombre, apellido){
    return{ nombre, apellido }
}

//const personaFlecha =  (nombre, apellido) => { return {nombre, apellido} }
const personaFlecha =  (nombre, apellido) => ( {nombre, apellido} )

const persona = crearPersona('Harry', 'Potter');
console.log(persona);

console.log(personaFlecha('Ron', 'Wesley'));

function imprimirArgs(){
    console.log(arguments);
}

const imprimirArgsFlecha = (edad, ...args) => {
    return(args);
}

imprimirArgs(10, true, false, 'Hermione', 'Granger');
const [gryffindor, slythering, nombre, apellido ] = imprimirArgsFlecha(10, true, false, 'Hermione', 'Granger');
console.log({gryffindor, slythering, nombre, apellido});

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
   // edad: 40, 
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    'ultima-pelicula': 'Infinity War'
};

const imprimirProps = ({nombre, codeName, vivo, edad=20, trajes}) => {
    console.log({nombre}); 
    console.log({codeName});
    console.log({vivo});
    console.log({edad}); 
    console.log({trajes });  
}

imprimirProps(tony);