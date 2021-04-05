// Closures - é o escopo criado quando a função é chamada, tem relação com contexto léxico da função

let variavel = "global";

function imprimir(outra) {
    console.log(variavel);
}

function outra() {
    let variavel = "local";
    imprimir(); // imprime global
    console.log(variavel); // imprime local
}

outra();

// Exemplo 2

let variavel2 = "global";

function externa() {
    let variavel2 = "local";

    function interna() {
        return variavel2;
    }

    return interna;
}

let executa = externa();

console.log(executa());