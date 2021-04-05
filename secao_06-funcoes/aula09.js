// Função construtora

function Pessoa(n, s) {
    // atributos privados - só conseguimos acessar dentro da função construtora

    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público - pode ser acessado fora da função construtora
    this.raca = "Humano";

    // método privado - só conseguimos acessar dentro da função construtora
    let imprimir_dados = function(r) {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${r}`)
    }

    // método público - pode ser acessado fora da função construtora
    this.fazer_aniversario = function() {
        idade += 1;
        imprimir_dados(this.raca);
    }

    this.getIdade = function() {
        return idade;
    }

    this.getRaca = function() {
        return this.raca;
    }
}

let angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);

console.log(angelina.peso); // fora da function, não tem acesso

console.log(angelina.raca);

angelina.fazer_aniversario();
angelina.fazer_aniversario();

// Exemplo 2

let felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();

console.log(felicity.getIdade());
console.log(felicity.getRaca());

console.log(typeof(Pessoa));
console.log(typeof(felicity));