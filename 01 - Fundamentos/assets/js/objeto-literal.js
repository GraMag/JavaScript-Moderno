let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40, 
    cords: {
        lat: 34.034,
        long: -118.7
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};
console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log("Coordenadas: ", personaje.cords);
console.log("Lat: ", personaje.cords.lat);
console.log('Numero de trajes: ', personaje.trajes.length);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula'])

delete personaje.edad;
console.log(personaje);

 const entriesPares = Object.entries(personaje);
 console.log(entriesPares);

 personaje.casado = true;

 console.log(personaje);

 Object.freeze( personaje );

 const propiedades = Object.getOwnPropertyNames(personaje);
 const valores = Object.values (personaje);
 console.log({propiedades, valores});
