// Classe Object e suas funções, e console.table

const curso = {
    nome: "Programação em JavaScript",
    horas: 25,
    preco: 27.99
}

console.log(curso);

console.log(typeof(curso));

// classe object e algumas funções para auxiliar na captura de chave-valor

//
console.log();
console.log("classe object e algumas funções para auxiliar na captura de chave-valor");
console.log();
//

console.log(Object.keys(curso)); // imprimir chaves do objeto que passei como parâmetro

console.log(Object.values(curso)); // imprimir valores do objeto que passei como parâmetro

console.log(Object.entries(curso)); // imprimir chaves-valores do objeto que passei como parâmetro

// imprimir valores do objeto
//
console.log();
console.log("imprimir valores do objeto");
console.log();
//

Object.entries(curso).forEach(element => {
    console.log(`(Chave) ${element[0]} : (Valor) ${element[1]}`);
});

console.log();

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`);
});

// não permitir que atributos do objeto sejam modificados
//
console.log();
console.log("não permitir que atributos do objeto sejam modificados");
console.log();
//

curso.nome = "Criação de APIs com Django Rest Framework";

console.log(curso); // foi alterado

Object.defineProperty(curso, "publicacao", {
    enumerable: false, // true mostra o atributo quando no console.log, false ele fica invisível ao imprimir o objeto, 
                        // porém ele é acessível e imprimível quando no console.log. ex (curso.criacao)
    writable: false,
    value: "4/2/2021"
});

curso.publicacao = "4/1/2020";

console.log(curso);

console.log(curso.publicacao);

// outra maneira de não permitir que TODOS os atributos do objeto sejam alterados

Object.freeze(curso);

curso.nome = "Dança da Garrafa";

console.log(curso);

//
console.log();
console.log("console.table");
console.log();
//

let usuarios = [
    {
        nome: "Aline Moraes",
        empresa: "Geek University",
    },
    {
        nome: "Ricardo Brandão",
        empresa: "Google",
    },
    {
        nome: "Felipe Xavier",
        empresa: "Sony",
    }
];

console.table(usuarios);

console.table(curso);

console.table("Teste");