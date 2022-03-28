const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';
console.log(elMayor(15, 14));
console.log(tieneMembresia(true));

const amigo = true;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
]

console.log(amigoArr)

const nota = 82;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C'  :
              nota >= 70 ? 'D'  : 'F';

console.log({nota, grado});