// var, let e const

//
console.log();
console.log("var e let");
//

//var
var numero = 42;
console.log(numero);

numero += 18;
console.log(numero);

//let - forma moderna de declarar variaveis em js, evita erros no programa, e mantem escopo local
let outro_numero = 42;
console.log(outro_numero);

outro_numero += 18;
console.log(outro_numero);

let nome = "Geek";
console.log(nome);

nome = "University";
console.log(nome);

for (var i = 0; i < 5; i++) {
    var valor = i * 3;
    console.log(valor);   
}

console.log(valor);   
console.log(i);   


for (let j = 0; j < 5; j++) {
    let v = j * 3;
    console.log(v);   
}

//console.log(v);  // ReferenceError: v is not defined
//console.log(j);  // ReferenceError: j is not defined

//
console.log();
console.log("Redeclaração de variáveis");
//

var numero = 80;
console.log(numero);

var numero = 32; //não tem problema em redeclarar
console.log(numero);

let numero2 = 80;
console.log(numero2);

//let numero2 = 32; //SyntaxError: Identifier 'numero2' has already been declared
//console.log(numero2);

//
console.log();
console.log("const");
//

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

//TAXA = 5; //TypeError: Assignment to constant variable.
//console.log(res);

//
console.log();
console.log("const e mutação");
//

const CURSO = { nome: "Programação em JS" }

console.log(CURSO.nome);

//não é possível alterar o valor de uma constante
//CURSO = 43; //TypeError: Assignment to constant variable.
//console.log(CURSO);

//podemos realizar mutação em dados contidos na constante
CURSO.nome = "Programação em Python"; // mutação
console.log(CURSO);