//22) Faça uso do conceito de Object Short Sintax no objeto abaixo:

let nome = "Felicity Jones";
let idade = 32;

let cliente = {
    nome: nome,
    idade: idade,
    cidade: "Campo Grande",
}

console.log(cliente);

let cliente2 = {
    nome,
    idade,
    cidade: "Campo Grande",
}

console.log(cliente2);