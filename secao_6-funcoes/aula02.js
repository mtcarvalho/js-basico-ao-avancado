// Funções - First-Class Citizens ou High-Order Function

function somar(a, b){
    return a + b;
}

let res = somar(12, 8);
console.log(res);

console.log(somar(7, 8));

// Exemplo 1 - executando função simples
let executar = somar;

console.log(executar(8, 22));

// Exemplo 2 - executando função como parâmetro de outra função
function subtrair(a, b){
    return a - b;
}

function faz_algo(num1, num2, funcao){
    return funcao(num1, num2);
}

console.log(faz_algo(5, 5, somar));
console.log(faz_algo(5, 5, subtrair));

// Exemplo 3 - variável recebendo função - na var que passamos os params
function outra(funcao){
    return funcao;
}

let ret = outra(somar);
console.log(ret(2, 1));

// Exemplo 4 - função com console.log dentro
function mensagem(){
    console.log("Evolua seu lado geek!");
}

mensagem();

let reto = mensagem();
console.log(reto); //undefined

// first class citizen

let valores = [1, 3.4, true, somar];

for (let i = 0; i < valores.length; i++) {
    console.log(typeof(valores[i]));
} // o tipo do último elemento é function