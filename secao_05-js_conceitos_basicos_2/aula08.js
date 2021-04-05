// Template strings

const idade = 21;
const nome = "Geek";

function ano_nascimento(idade){
    return (new Date().getFullYear() - idade)
}

console.log(nome + " tem " + idade + " anos.");

console.log(`${nome} tem ${idade + 3} anos, pois nasceu em ${ano_nascimento(idade + 3)}`)