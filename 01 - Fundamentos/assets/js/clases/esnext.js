class Rectangulo{
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura,
        this.#area = this.#calcularArea();
    }

    #calcularArea(){
        return this.base*this.altura;
    }

    mostrar(){
        return `El area del rectangulo es ${this.#area}`;
    }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo.mostrar());