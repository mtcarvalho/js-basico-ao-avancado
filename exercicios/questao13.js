//13) Converta a função abaixo em uma Arrow Function:

let usuario = { nome: "Fernanda Silva", idade: 45 };

function mostrarIdade(usuario) {
    return usuario.idade;
}

console.log(mostrarIdade(usuario));

let mostrar_idade = usuario => usuario.idade;

console.log(mostrar_idade(usuario));