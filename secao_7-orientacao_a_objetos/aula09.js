class Funcao {

    constructor(descricao, salario) {
        this._descricao = descricao; 
        this._salario = salario;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario) {
        this._salario = salario;
    }

    imprimir_dados() {
        console.log(`Descrição: ${this._descricao} \nSalário: ${this._salario}`);
    }
}

class Pessoa {

    constructor(nome, sobrenome, email, cpf) {
        this.nome = nome; 
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    // métodos extras

    get nome_completo() {
        return `${this._nome} ${this._sobrenome}`
    }

    set nome_completo(nome_completo) {
        nome_completo = nome_completo.split(" ");

        this._nome = nome_completo.shift(); // puxa o primeiro elemento
        this._sobrenome = nome_completo.join(" "); // considera todos os outros elementos como sobrenome (bom p/ diversos sobrenomes)
    }

    imprimir_dados() {
        console.log(`Nome Completo: ${this.nome_completo}`);
    }

}

class Funcionario extends Pessoa {

    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf);
        this.funcao = funcao;
        this.registro = registro;
    }

    get funcao() {
        return this._funcao;
    }

    set funcao(funcao) {
        this._funcao = funcao;
    }

    get registro() {
        return this._registro;
    }

    set registro(registro) {
        this._registro = registro;
    }

    // sobrescrita de método / overwriting
    imprimir_dados() {
        super.imprimir_dados();
        console.log(`Registro: ${this.registro}`);
        this.funcao.imprimir_dados();
    }

}

class Cliente extends Pessoa {

    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf);
        this.renda = renda;
    }

    get renda() {
        return this._renda;
    }

    set renda(renda) {
        this._renda = renda;
    }

}

let prog = new Funcao("Programador", 7.999);
let f1 = new Funcionario("Paula", "Fernandes", "paula@gmail.com", "987.654.321.00", prog, "E8F7da7");

f1.imprimir_dados(); // Pessoa

console.log();

let c1 = new Cliente("Pedro", "Silveira", "pedro@silveira.com", "789.455.213-54", 6569.55);

c1.imprimir_dados(); // Pessoa
// Polimorfismo - dois objetos do mesmo tipo tendo comportamentos diferentes - f1 e c1