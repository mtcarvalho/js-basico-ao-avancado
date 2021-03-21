//1) Crie uma função que receba como parâmetro de entrada o objeto abaixo e imprima no console a string 
//de saída, conforme:

// objeto de entrada da função
let endereco = {
    rua: "Rua da paz",
    numero: 42,
    bairro: "Cachoeira",
    cidade: "Campo Grande",
    uf: "MS"
};

// saída
// O usuário mora em Campo Grande/MS, no bairro Cachoeira, na Rua da Paz, número 42.

function imprime_endereco_usuario(endereco) {
    console.log(`O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua}, número ${endereco.numero}.`);
}

imprime_endereco_usuario(endereco);