import { buscarHeroe as buscarHeroeCallback} from './callbacks';
import { buscarHeroe } from './promesas';
import './styles.css';

const heroeId = 'spider';
const heroeId2 = 'th or';

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
}).catch( err =>{
    alert(err);
}).finally{
    console.log('Se termino el promise.all');
};
// buscarHeroe(heroeId).then(heroe1 => {
//     //console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

// buscarHeroeCallback(heroeId, (err, heroe1) => {
//     if(err){ return console.error(err);}
//     buscarHeroeCallback(heroeId2, (err, heroe2) => {
//         if(err){ return console.error(err);}
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
// });