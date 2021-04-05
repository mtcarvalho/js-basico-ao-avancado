// Arrow functions

// Forma usual 1 - declarando função nomeada

function somar1(n1, n2) {
    return n1 + n2;
}

console.log(somar1(4, 6));

// Forma usual 2 - declarando função anônima

let somar2 = function(n1, n2) {
    return n1 + n2;
}

console.log(somar2(4, 6));

// Forma usual 3 - atribuindo função à variavel, como first class citizen

let somar3 = somar1;

console.log(somar3(4, 6));

// Arrow Function

let somar4 = (n1, n2) => { // não tem function, mas tem o arrow =>
    return n1 + n2;
}

console.log(somar4(4, 6));

// Atenção! A arrow function pode ser simplificada caso tenha 1 parâmetro de entrada e execute apenas 1 linha

let dobrar = valor => valor * 2; // não tem return, pois ele é intrínseco

console.log(dobrar(5));

// Exemplo 2

function mensagem1(){
    console.log("Evolua seu lado geek!");
}

mensagem1();

let msg = () => console.log("Evolua seu lado geek!");

msg();