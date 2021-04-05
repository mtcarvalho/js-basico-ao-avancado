//20) Crie uma função que receba um parâmetro e usando os conceitos do operador Rest/Spread
//apresente a variável ‘cliente1' que tenha todos os dados do parâmetro recebido (cliente) mas com o nome
//alterado para ‘Felicity Jones’, e a variável ‘cliente2' com todos os dados de ‘cliente' mas com o país alterado
//para 'EUA':

let cliente = {
    nome: "Angelina Jolie",
    idade: 48,
    endereco: {
        cidade: "Campo Grande",
        uf: "MS",
        pais: "Brasil"
    }
};


let cliente1 = { ...cliente, ...{ nome: "Felicity Jones" } };

console.log(cliente1);

let cliente2 = { ...cliente, ...{ endereco: {
    cidade: "Campo Grande",
    uf: "MS",
    pais: "EUA"
} } };

console.log(cliente2);