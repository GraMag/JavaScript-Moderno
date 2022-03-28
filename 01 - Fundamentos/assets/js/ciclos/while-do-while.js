const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

console.warn('=== WHILE === ')
while(carros[i]){
    console.log(carros[i]);
    i++;
}

i = 0;
console.warn('=== DO WHILE === ')

do{
    console.log(carros[i]);
    i++;
}while(carros[i])