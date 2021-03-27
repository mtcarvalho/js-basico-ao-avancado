//9) Dado o vetor abaixo, utilizando filter, crie e apresente uma variável que contenha uma lista de todos os
//clientes que trabalham na empresa Google presentes no vetor, conforme imagem:

let clientes = [ 
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" }, 
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" }, 
    { nome: "Maria Silva", idade: 33, empresa: "Google" }, 
];

let clientes_google = clientes.filter(cliente => cliente.empresa === "Google" );

console.log(clientes_google);

// saída
//[ 
//    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" }, 
//    { nome: "Maria Silva", idade: 33, empresa: "Google" }, 
//];