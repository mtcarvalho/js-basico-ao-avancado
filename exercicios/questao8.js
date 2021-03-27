//8) Dado o vetor abaixo, utilizando map, crie e apresente uma variável que contenha uma lista de todas
//as idades dos clientes presentes no vetor, conforme imagem:

let clientes = [ 
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" }, 
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" }, 
    { nome: "Maria Silva", idade: 33, empresa: "Google" }, 
];

let clientes_idades = clientes.map(function(cliente){
    return cliente.idade;
});

console.log(clientes_idades);

//saída
//[32, 29, 33] 