class Carro {

    constructor(modelo) {
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    imprimir_dados() {
        console.log(`${this._marca} ${this._modelo}`);
    }

    static retornar_marca() {
        return "Honda";
    }

}

let fit = new Carro("fit");

// método de instância
fit.imprimir_dados();

// método estático

console.log(Carro.retornar_marca());

// Object.defineProperty(); usamos esse método anteriormente para definir valores estáticos, também

console.log(Math.random());

console.log(Math.PI);