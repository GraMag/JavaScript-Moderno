/**
 * C Clubs 
 * H Hearts
 * S Spades
 * D Diamonds

 */

(() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          otras = ['J', 'Q', 'K', 'A'];
    
    let puntosJugadores = [];
    
    const mostrarPuntos = document.querySelectorAll('small');
    const divCartas = document.querySelectorAll('.div-cartas');
    
    const btnPedir   = document.querySelector('#btnPedir'),
          btnNuevo   = document.querySelector('#btnNuevo'),
          btnDetener = document.querySelector('#btnDetener');
    
    
    /**
     * Inicializa el juego
     */
    const inicializarJuego = () =>{
        deck = crearDeck();
        puntosJugadores = [0, 0];
        divCartas.forEach(element => element.innerHTML = '');
        mostrarPuntos.forEach(element => element.innerText = 0);
        switchearBoton();
    }

    /**
     * Crea una nueva baraja
     * @returns Bajara mezclada aleatoreamente
     */
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);;
    }
    
    /**
     * Cambia el estado de los botones
     */
    const switchearBoton = () => {
            btnPedir.disabled = !btnPedir.disabled;
            btnDetener.disabled = !btnDetener.disabled;
    }

    /**
     * Extrae y elimina una carta del mazo
     * @returns una carta del mazo
     */
    const pedirCarta = () => {
        if( deck.length === 0) {
            throw 'No hay cartas';
        }
        return deck.pop();
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
    
    /**
     * Muestra la carta en pantalla
     * @param {*} carta 
     * @param {*} turno 
     */
    const mostrarCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.className = 'carta';
        divCartas[turno].append(imgCarta);
    }

    /**
     * Suma los puntos del jugador
     * @param {*} carta 
     * @param {*} turno 
     * @returns Puntaje del jugador
     */
    const calcularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        mostrarPuntos[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    
    /**
     * Jugada de la computadora
     * @param {*} puntosMinimos 
     */
    const turnoComputadora = (puntosMinimos) => {
        do{
            const carta = pedirCarta();
            puntosJugadores[1] = calcularPuntos(carta, 1);
            mostrarCarta(carta, 1);
        }while((puntosJugadores[1] <= puntosMinimos && puntosMinimos <= 21))
        
        calcularGanador();
    }
    
    /**
     * Saca una carta
     */
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        mostrarCarta(carta, 0);
        puntosJugadores[0] = calcularPuntos(carta, 0);
        
        if(puntosJugadores[0] >= 21){
            switchearBoton();
            turnoComputadora(puntosJugadores[0]);
        }
    });
    
    /**
     * Inicia un nuevo juego
     */
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
        });
    
    /**
     * El jugador no saca mas cartas
     */
    btnDetener.addEventListener('click', () => {
        switchearBoton();
        turnoComputadora(puntosJugadores[0]);
    });
    
    /**
     * Evalua los puntajes y le dice al jugador el resultado de la partida
     */
    const calcularGanador = () => {
        setTimeout ( () => {
            if(puntosJugadores[1] === puntosJugadores[0]){
                alert("Empate");
            } else if (puntosJugadores[0] > 21 || (puntosJugadores[1] <= 21 && puntosJugadores[1]> puntosJugadores[0])){
                alert("Perdiste!");
            } else {
                alert("Ganaste!!!");
            }
        }, 100);
    }
    
})();
