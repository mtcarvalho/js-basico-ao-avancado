//19) Crie uma função que receba um parâmetro e usando os conceitos do operador Rest/Spread
//apresente a soma de todos os elementos:

function somar(...lista) {
    let soma = 0;

    lista.forEach(l => soma += l);

    return soma;
}

console.log(somar(1, 2, 3, 4, 5, 6)); // 21
console.log(somar(42, 44)); //86