let a = 10;
let b = a;
a = 30;
 
console.log({a, b});

let juan = {nombre: 'Juan'};
let matias = {... juan};
matias.nombre = 'Matias'; 

console.log({juan, matias});

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

const frutas = ['Manzana', 'Naranja', 'Frutilla'];
console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Uva'); 


console.table({frutas, otrasFrutas});