//17) Altera a função abaixo usando o conceito de destructuring para extrair os parâmetros necessários e
//apresentar o return já com as variáveis extraídas:

function mostrarInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`
}

console.log(mostrarInfo({ nome: "Angelina Jolie", idade: 46 }));

// O retorno da função deve ser
// return `${nome} tem ${idade} anos.`;

function mostrarInfo2(usuario){
    let { nome, idade } = usuario;

    return `${nome} tem ${idade} anos.`;
}

console.log(mostrarInfo2({ nome: "Angelina Jolie", idade: 46 }));