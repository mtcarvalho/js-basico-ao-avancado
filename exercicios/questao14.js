//14) Converta a função abaixo em uma Arrow Function:

let nome = "Fernanda Lima";
let idade = 34;

function mostrarUsuario(nome = "Fernanda Lima", idade = 19) {
    return { nome, idade };
}

console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));

let mostrar_usuario = (nome = "Fernanda Lima", idade = 19) => { return { nome, idade } };

console.log(mostrar_usuario(nome, idade));
console.log(mostrar_usuario(nome));