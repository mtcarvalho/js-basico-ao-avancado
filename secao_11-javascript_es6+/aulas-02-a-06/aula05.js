// object short syntax

let nome = "Programação em JS"
let preco = "R$ 9.99";

let curso = {
    nome: nome,
    preco: preco,
    instrutor: "Geek University"
};

console.log(curso);

let horas = 25;

let curso2 = {
    nome,
    preco,
    horas,
    instrutor: "Geek University"
}

console.log(curso2);