let juegos = ['tetris', 'pacman', 'mario', 'pokemon'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) =>
{
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('kirby');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('pimball');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log({juegosBorrados, juegos});

let buscarPokemon = juegos.indexOf('pokemon');
console.log({buscarPokemon});