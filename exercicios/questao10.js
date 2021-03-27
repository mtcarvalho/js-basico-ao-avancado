//10) Dado o vetor abaixo, utilizando find, crie e apresente uma variável que contenha o usuário que trabalhe
//na empresa Udemy presentes no vetor, conforme imagem:

let clientes = [ 
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" }, 
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" }, 
    { nome: "Maria Silva", idade: 33, empresa: "Google" }, 
];

let clientes_udemy = clientes.find(cliente => cliente.empresa === "Udemy");

console.log(clientes_udemy);

// saída
// undefined