//18) Crie uma função que receba um array como parâmetro e usando os conceitos do operador Rest/Spread
//apresente uma variável ‘x' com o primeiro elemento do array e a variável ‘y' contendo o restante do array:

let lista = [1, 2, 3, 4, 5, 6];

function apresentarDados(array) {
   let [a, ...b] = array;

   return [a, b];
}

let [x, y] = apresentarDados(lista);

console.log(x);
console.log(y);

// Saída
// x: 1
// y: [2, 3, 4, 5, 6]