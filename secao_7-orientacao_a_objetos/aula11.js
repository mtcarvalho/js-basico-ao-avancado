// criando objeto através de uma factory function

let pessoa1 = (nome, sobrenome)  => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

let p1 = pessoa1("Mary", "Ann");
console.log(p1);
console.log(typeof(p1));

p1.andar();

// criando objeto através de uma função construtora

function Pessoa2(nome, sobrenome) {
    this._nome = nome;
    this._sobrenome = sobrenome;

    this.andar = function() {
        console.log(`${this._nome} ${this._sobrenome} está andando...`);
    }
}

let p2 = new Pessoa2("Mary", "Ann");
console.log(p2);
console.log(typeof(p2));

p2.andar();

// criando objeto através de uma classe

class Pessoa3 {

    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    andar() {
        console.log(`${this._nome} ${this._sobrenome} está andando...`);
    }

}

let p3 = new Pessoa3("Mary", "Ann");
console.log(p3);
console.log(typeof(p3));

p3.andar();