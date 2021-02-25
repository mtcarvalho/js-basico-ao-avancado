// set - conjuntos, não aceitam repetição de valores e não são indexados, usam menos memória

// declarando um conjunto
let cursos = new Set();

// adicionando valores
cursos.add("Programação para leigos");
cursos.add("Algoritmos e lógica de programação");

// adicionando valores concatenados
cursos.add("Programação em C").add("Programação em Java").add("Programação em Python");

cursos.add("Banco de dados");
cursos.add("Programação Web com Django Framework");

let out = cursos.add("Banco de dados"); // funciona mas não adiciona a mais, pois é repetido
console.log(out); // retorna todo o conjunto

console.log(cursos);
console.log(cursos.size);

console.log(typeof(cursos)); // object

console.log(cursos.has("Banco de dados"));

// deletar elementos de um conjunto
let ret = cursos.delete("Programação para leigos");

console.log(ret); // true se deletou, false se não deletou

ret = cursos.delete("Programação para Leigos");

console.log(ret);

console.log(cursos);

// Quando houver necessidade de pegar elementos únicos, além do filter podemos usar o set
let frutas = ["Manga", "Uva", "Jaca", "Uva"];
let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);