function saludar(nombre){
    console.log('Hola ' + nombre);
}

const saludarAnonimo = function (nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludar('Maga');
saludarAnonimo('Magui');
saludarFlecha('Magu');

function sumar(a , b){
    return a + b;

}

const sumar2 = (a, b) => a + b;

console.log(sumar2(2, 1));

function getAleatorio(){
    return Math.random();
}

const aleatorio = () => Math.random();

console.log(getAleatorio());
console.log(aleatorio());
