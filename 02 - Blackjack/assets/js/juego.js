/**
 * C Clubs 
 * H Hearts
 * S Spades
 * D Diamonds
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const otras = ['J', 'Q', 'K', 'A'];

let puntosJugador = 0,
    puntosComputadora = 0;

const mostrarPuntos = document.querySelectorAll('small');

const btnPedir   = document.querySelector('#btnPedir');
const btnNuevo   = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')

/**
 * Crea una nueva baraja
 * @returns Bajara mezclada aleatoreamente
 */
const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let otra of otras){
        for(let tipo of tipos){
            deck.push(otra + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

crearDeck();

/**
 * Extrae y elimina una carta del mazo
 * @returns una carta del mazo
 */
const pedirCarta = () => {
    if( deck.length === 0) {
        throw 'No hay cartas';
    }
    let carta = deck.pop();
    return carta
}

/**
 * Convierte el valor string de la carta en numerico
 * @param {*} carta 
 * @returns valor numerico de la carta
 */
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? 
            (( valor === 'A') ? 11 : 10) 
            : valor * 1;
}

const mostrarCarta = (carta, div) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.className = 'carta';
    div.append(imgCarta);
}

const turnoComputadora = (puntosMinimos) => {
    while((puntosComputadora <= puntosMinimos) && puntosMinimos <= 21){
        const carta = pedirCarta();
        mostrarCarta(carta, divCartasComputadora);
        puntosComputadora += valorCarta(carta);
        mostrarPuntos[1].innerText = puntosComputadora;
    
    }
    
    calcularGanador();
}

btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    mostrarPuntos[0].innerText = puntosJugador;

    mostrarCarta(carta, divCartasJugador);
    
    
    if(puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        calcularGanador();
    } else if(puntosJugador == 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    }
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    crearDeck();
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    mostrarPuntos[0].innerText = puntosJugador;
    mostrarPuntos[1].innerText = puntosComputadora;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

const calcularGanador = () => {
    setTimeout ( () => {
        if(puntosComputadora === puntosJugador){
            alert("Empate");
        } else if (puntosComputadora > 21){
            alert("Ganaste!!!");
        } else {
            alert("Perdiste!");
        }
    } , 100);
}
