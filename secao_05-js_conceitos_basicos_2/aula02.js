// Arrays - criação, verificação de tamanho e manipulação de elementos com push/pop, shift/unshift, delete e splice
// Introdução aos métodos slice, concat, sort
// Iterar em arrays com for
// Matrizes

//
console.log("Manipulação básica do array");
//

// Forma 1
var alunos = new Array("Cristina", "Ricardo", "Lucas", "Maria", "Sofia");
//var alunos = ["Cristina", "Ricardo", "Lucas", "Maria", "Sofia"];

console.log(alunos);

// Forma 2 (recomendada - mais simples)
var notas = [1, 3, 5, 7, 9];

console.log(notas);

// Criando um array vazio
var dados = [];
console.log(dados);

// Fazendo acesso ao valor de um índice
console.log(notas[2]);

// Alterando o valor a partir do índice
notas[2] = 12;
console.log(notas);

//
console.log();
console.log("Atenção abaixo!")
//

// Atenção ao acessar um valor com um índice que não existe
notas[9] = 10; // Não existe, mas não ocorre erro!
console.log(notas); // 4 índices vazios - pois adicionou em um índice muito à frente!

console.log(notas[5]); // undefined
console.log(notas[9]);

if (notas[5] == undefined) {
    notas[5] = 54;
}

console.log(notas[5] == undefined); //false

//
console.log();
console.log("Tamanho do array");
//

var nomes = ["Joana", "Marcela", "Ângela"];
console.log(nomes);

// Tamanho do array
console.log(nomes.length); //4
var tam = nomes.length;

console.log(tam); //4

//
console.log();
console.log("Adição e remoção de elementos no fim do array com push e pop");
//

// Inserindo elementos no final do array
nomes.push("Paola"); // insere o valor no final do array
console.log(nomes);

// Removendo elementos da ÚLTIMA posição do array
var nome = nomes.pop();
console.log(nome);
console.log(nomes);

//
console.log();
console.log("Adição e remoção de elementos no início do array com shift e unshift");
//

// Removendo elementos da PRIMEIRA posição do array
nome = nomes.shift();
console.log(nome);
console.log(nomes);

// Adicionando elementos da PRIMEIRA posição do array
nomes.unshift("Simone");
console.log(nomes);

//
console.log();
console.log("Comando delete");
//

// Deletar dados de um array
delete nomes[3];
console.log(nomes); // 1 empty item em nomes[3]

//
console.log();
console.log("Manipulação de elementos com splice");
//

nomes.splice(2, 1); // a partir do índice 2, delete um elemento - o próprio índice 2
console.log(nomes);

// Adicionando itens com splice
nomes.splice(3, 0, "Rafaela", "Bárbara"); // A partir do índice 3, não delete nenhum, mas adicione "Rafaela" e "Bárbara"
console.log(nomes);

// Adicionando E removendo itens ao mesmo tempo com splice
nomes.splice(3, 1, "Helena"); // A partir do índice 3, delete, e adicione "Helena"
console.log(nomes);

//
console.log();
console.log("Partição de arrays com slice");
//

// Retorna um novo array a partir do índice informado - do índice para a frente
var novo = nomes.slice(2);
console.log(novo);

// Retorna um novo array a partir do índice informado até o índice do segundo parâmetro, sem incluí-lo
novo = nomes.slice(0, 2);
console.log(novo);

//
console.log();
console.log("Concatenação de arrays com concat");
//

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9]

var rest = pares.concat(impares); // concatena os dois arrays
console.log(rest);

rest = impares.concat(pares); // concatena os dois arrays - a ordem importa
console.log(rest);

//rest.sort()...

//
console.log();
console.log("Ordenação de elementos do array");
//

// Ordenar dados do array

//ordenar strings com .sort()
var professores = ["João", "Jorge", "Marcelo", "Fernando"]
console.log(professores);

professores.sort();
console.log(professores);

//ordenar floats com .sort() - não funciona!
var precos = [144.85, 54.97, 52.65, 32.41, 91.44];

precos.sort(); // considera todos os elementos como string

console.log(precos);

//ordenar ints com .sort() - não funciona!
var idades = [100, 74, 85, 10, 55, 33]
idades.sort(); // considera todos os elementos como string
console.log(idades);

//ordenação de floats da forma correta
precos.sort(function(a, b) {return a - b;});
console.log(precos);

//ordenação de ints da forma correta
idades.sort(function(a, b) {return a - b;});
console.log(idades);

//
console.log();
console.log("Iterar sobre os elementos do array");
//

for (var i = 0; i < idades.length; i++) {
    console.log(idades[i]);
}

// Matrizes

// 3x3
var tabuleiro = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];