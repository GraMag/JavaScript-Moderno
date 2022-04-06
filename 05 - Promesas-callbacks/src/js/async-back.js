import './styles.css';

import { buscarHeroe, buscarHeroeAsync } from './js/promesas';
buscarHeroe('spider').then(console.log).catch(console.warn );
buscarHeroeAsync('thor').then(console.log).catch(console.warn );
