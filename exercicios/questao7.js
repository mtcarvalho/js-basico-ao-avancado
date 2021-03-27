//7) Crie duas classes sendo Usuario, com atributos email e senha, e uma classe Admin que herda de
//usuário e tem um atributo boolean admin com valor true.
//No construtor de Usuario, receba os parâmetros para setar nos atributos. No construtor de Admin, receba
//os parâmetros para repassar à classe pai.
//Crie um método na classe Usuario que retorna um boolean informando se determinado usuário é admin
//ou não, conforme exemplo abaixo:

class Usuario {

    constructor(email, senha, admin) {
        this._email = email;
        this._senha = senha;
        this._admin = admin || false;
    }

    ehAdmin() {
        return this._admin;
    }

}

class Admin extends Usuario {

    constructor(email, senha) {
        super(email, senha, true);
    }

}

let usuario1 = new Usuario("joao@gmail.com", "senhasegura");
let usuario2 = new Admin("maria@gmail.com", "senhasupersegura");

console.log(usuario1.ehAdmin()); //false
console.log(usuario2.ehAdmin()); //true