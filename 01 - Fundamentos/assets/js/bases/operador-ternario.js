/** Dias de semana abrimos a las 11
 * fines de semana abrimos a las 9
 */

const dia = 3;
const horaActual = 10;

let horaApertura;
let mensaje;

//if( dia === 0 || dia === 6) {
/*if( [0, 6].includes(dia)) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Dia de semana');
    horaApertura = 11;
}*/
horaApertura = ( [0, 6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado. Abrimos a las ${horaApertura}`;

console.log({mensaje});