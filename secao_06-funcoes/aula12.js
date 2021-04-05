console.log(somar(4, 6));


function somar(n1, n2) { // porque funciona? porque quando a função está descrita na forma LITERAL
    return n1 + n2;      // o JS pega todas as funções e joga pro início do código - HOISTING!
}

console.log(multiplicar(4, 6));

let multiplicar = function(v1, v2) { // é uma função anônima, não funciona!
    return v1 * v2;
}