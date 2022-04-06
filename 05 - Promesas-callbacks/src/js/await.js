import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesId = ['spider','iron','thor'];
const heroesPromesas = heroesId.map(buscarHeroe);

export const obtenerHeroesArr = async() => {
    return await Promise.all(heroesId.map(buscarHeroe));
    // const heroesArr = [];
    // for(const id of heroesId){
    //     heroesArr.push(buscarHeroe(id));
    // }
    // return await Promise.all(heroesArr);
}

export const obtenerHeroesAwait = (id) => {
    try{
        const heroe = buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('catch!!')
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }
}

export const hereosCiclo = async () => {
    console.time('HeroesCiclo');
    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }
    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id) => {
    if((await buscarHeroeAsync(id)).nombre  === 'Spiderman'){
        console.log('Es el mejor');
    } else {
        console.log('meeeeeh');
    }
}