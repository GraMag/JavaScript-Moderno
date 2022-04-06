const heroes = {
    spider: {
        nombre: 'Spiderman',
        poder: 'Lanzar telarañas'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Tener dinero'
    },
    thor: {
        nombre: 'Thor',
        poder: 'Cabellera increible'
    }
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);
    } else {
        callback(`No existe un heroe con el id ${id}`);
    }
};