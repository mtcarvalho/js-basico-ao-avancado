// for... of (valores) e for... in (indices)

let nome = "Geek University";

for (let letra of nome) {
    console.log(letra);
}

console.log();

let numeros = [1,2,3,4,5,6,7,8,9,0]

for (let numero of numeros) {
    console.log(numero * 2);
}

console.log();

for (let indice in numeros) {
    console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
}

console.log();

let cursos = new Map([
    [1, "Programação para Leigos"],
    [2, "Programação em C"],
    [3, "Banco de dados"],
    [4, "Programação Web com Django Framework"],
    [5, "Programação em Java"],
    [6, "Algoritmos e lógica de programação"],
    [7, "Programação em Python"],
]);

for (let curso of cursos) {
    console.log(`${curso[0]} - ${curso[1]}`);
}

console.log();

for (let curso of cursos) {
    console.log(curso);
}

console.log();

// somente a chave
for (let chave of cursos.keys()) {
    console.log(chave);
}

console.log();

// somente o valor
for (let valor of cursos.values()) {
    console.log(valor);
}

console.log();

// chave e valor
for (let [chave, valor] of cursos.entries()) {
    console.log(`${chave} - ${valor}`);
}

console.log();

let conjunto = new Set([1,2,3,4,5,6]);

for (let numero of conjunto) {
    console.log(numero);
}