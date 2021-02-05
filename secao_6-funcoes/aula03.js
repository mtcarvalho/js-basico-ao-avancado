// funções com parâmetro e retorno, objeto Date

function calcular_idade(ano_nascimento){
    let data = new Date(); //gera a data atual
    let idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_escrever_idade(ano_nascimento){
    let data = new Date(); //gera a data atual
    let idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

let idade = calcular_idade(1997);
console.log(idade);

calcular_escrever_idade(1997);

// Fique esperto!

function somar(a, b){
    return a + b;
}

console.log(somar(12, 8));

console.log(somar(12)); //NaN

console.log(somar(12, 8, 2)); //20 - somou dois primeiros elementos, apenas. não dá erro.

//
console.log()
console.log("objeto Date");
//

let data = new Date();

console.log("Data completa " + data);

console.log("Ano: " + data.getFullYear());

console.log("Mês: " + data.getMonth()); // 0 para Janeiro, 1 para Fevereiro...