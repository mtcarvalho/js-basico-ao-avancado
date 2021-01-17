// Hoisting

//exemplo 1
console.log(nome); // undefined - aqui ocorre o Hoisting (içamento)

var nome = "Geek";

console.log(nome);

//exemplo 2
console.log(idade + 4); // NaN

var idade = 23;

console.log(idade);

/* Comportamento explicado:
var nome; // é como se a variável fosse içada

console.log(nome); // undefined - aqui ocorre o Hoisting (içamento)

nome = "Geek";

console.log(nome);
*/

// Não funciona com let e const