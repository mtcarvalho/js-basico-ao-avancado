//12) Converta a função abaixo em uma Arrow Function:

let lista = [2, 4, 6, 8, 10];

console.log(lista.map(function(valor) {
    return valor + 3;
}));

console.log(lista.map(valor => valor + 3 ));