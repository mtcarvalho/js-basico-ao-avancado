class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome; // em JS, todos os atributos, funções e classes são públicos
        this._sobrenome = sobrenome;
    }

    // primeiro getters, depois setters
    get nome() {
        return this._nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    falar(msg) {
        console.log(`${this.nome} está falando ${msg}`)
    }

    comer() {
        console.log(`${this.nome} está comendo...`)
    }

    beber() {
        console.log(`${this.nome} está bebendo...`)
    }
}

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

    info() {
        console.log(`${this.marca} - ${this.modelo}`)
    }

    buzinar() {
        console.log(`bi bi`)
    }
}

// Instanciação de objetos - Forma 1 - new Object
//
console.log();
console.log("Instanciação de objetos - Forma 1 - new Object");
console.log();
//


let curso = new Object();

curso.nome = "Programação em JavaScript";
curso.preco = 27.99;

console.log(curso);

curso["qtd_alunos"] = 999;

console.log(curso);

delete curso["qtd_alunos"];
delete curso["preco"];

console.log(curso);

// Instanciação de objetos - Forma 2 - Objeto literal
//
console.log();
console.log("Instanciação de objetos - Forma 2 - Objeto literal inicializado preenchido");
console.log();
//

let programa = { 
    nome: "Photoshop",
    preco: 8999.99,
    fabricante: {
        nome: "Adobe",
        contato: "contact@adobe.com",
        endereco: {
            rua: "da paz, 45",
            bairro: "Nova Lima",
            cidade: "São Paulo"
        },
        filiais: [
            {
                cidade: "Rio de Janeiro"
            },
            {
                cidade: "Recife"
            }
        ]
    }
}

console.log(programa);
console.log(programa.nome); // Photoshop
console.log(programa.fabricante.nome); // Adobe
console.log(programa.fabricante.filiais.length); // 2

console.log(programa["fabricante"]["filiais"].length);

programa.nome = "Playstation OS";
console.log(programa.nome); // Playstation OS
console.log(programa);

delete programa.fabricante.filiais;
console.log(programa.fabricante.filiais); // undefined
//console.log(programa.fabricante.filiais.length); // TypeError

// Instanciação de objetos - Forma 3 - Objeto literal
//
console.log();
console.log("Instanciação de objetos - Forma 3 - Objeto literal inicializado vazio");
console.log();
//


let pessoa = {}; // isto é um objeto JS

console.log(typeof(pessoa));

pessoa.nome = "Angelina";

console.log(pessoa);

// Instanciação de objetos - Forma 4 - Função construtora
//
console.log();
console.log("Instanciação de objetos - Forma 4 - Função construtora");
console.log();
//

function Lampada(cor) {
    this.cor = cor;
}

let l1 = new Lampada("Branca");

console.log(l1);

console.log(typeof(l1));

// Instanciação de objetos - Forma 5 - Objeto a partir de classe - Exemplo 1
//
console.log();
console.log("Instanciação de objetos - Forma 5 - Objeto a partir de classe - Exemplo 1");
console.log();
//

let p1 = new Pessoa("Felicity", "Diaz");
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); // função get
console.log(p1.sobrenome); // função get

p1.nome = "Maria";
console.log(p1);

p1.falar("boa noite");
p1.comer();
p1.beber();

// Instanciação de objetos - Forma 5 - Objeto a partir de classe - Exemplo 2
//
console.log();
console.log("Instanciação de objetos - Forma 5 - Objeto a partir de classe - Exemplo 2");
console.log();
//

c1 = new Carro("Fit");
c1.info();

// Teste
c1._marca = "Chevrolet";
c1.info();