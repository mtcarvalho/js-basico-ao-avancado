//16) Utilize o conceito de destructuring para transformar em variáveis a partir do objeto abaixo:

let cliente = {
    nome: "Angelina Jolie",
    endereco: {
        rua: "Rua da paz",
        numero: 42,
        bairro: "Cachoeira",
        cidade: "Campo Grande",
        uf: "MS"
    }
};

let { nome, endereco: { rua, numero, bairro, cidade, uf } } = cliente; 

// Saída
console.log(nome); // Angelina Jolie
console.log(rua); // Rua da paz
console.log(numero); // 42
console.log(bairro); // Cachoeira
console.log(cidade); // Campo Grande
console.log(uf); // MS