// Objetos VS JSON - JavaScript Object Notation

let curso = {
    nome: "Programação em JavaScript",
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

console.log(curso);
console.log(curso.preco());
console.log(typeof(curso));

// Convertendo do formato JavaScript para JSON
//
console.log();
console.log("Convertendo do formato JavaScript para JSON");
console.log();
//

let json = JSON.stringify(curso);

console.log(json);
console.log(typeof(json));

// Convertendo do formato JSON para JavaScript
//
console.log();
console.log("Convertendo do formato JSON para JavaScript");
console.log();
//

let aluno = '{ "nome": "Mary Ann" }'

console.log(aluno);
console.log(typeof(aluno));

let obj = JSON.parse(aluno);

console.log(obj);
console.log(typeof(obj));