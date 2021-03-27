//11) Dado o vetor abaixo, multiplique por 2 a idade de todos os clientes e então realize um filtro apresentando
//apenas os clientes que possuam mais de 60 anos:

let clientes = [ 
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" }, 
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" }, 
    { nome: "Maria Silva", idade: 33, empresa: "Google" }, 
];


function multiplica_idade_cliente_por_2(cliente) {
    cliente.idade *= 2
    return cliente;
}

function verifica_idade_cliente_acima_60(cliente) {
    return cliente.idade > 60;
}

let novos_clientes = 
    clientes
        .map((cliente) => multiplica_idade_cliente_por_2(cliente))
        .filter((cliente) => verifica_idade_cliente_acima_60(cliente));

console.log(novos_clientes);

// saída
//[ 
//    { nome: "Fernanda Piereti", idade: 64, empresa: "Google" }, 
//    { nome: "Maria Silva", idade: 66, empresa: "Google" }, 
//]