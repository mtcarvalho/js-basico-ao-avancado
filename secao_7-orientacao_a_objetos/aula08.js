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
        console.log(`${this.nome_completo}`);
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

let mary = new Cliente("Mary", "Ann", "mary@ann.com", "123.456.789-00", 999.99);
let joe = new Cliente("Joe", "Ann", "joe@ann.com", "999.999.999-00", 0.00);

console.log(mary);
console.log(joe);

console.log(mary.nome_completo);
mary.nome_completo = "M. Anne";

console.log(mary);

mary.imprimir_dados();

let professor = new Funcao("Professor", 4999.99);

console.log(professor);

let harry = new Funcionario("Harry", "Potter", "harry@hogwarts.com", "987.654.321-99", professor, "GRIFF-987");

console.log(harry);

console.log(harry.funcao.salario);