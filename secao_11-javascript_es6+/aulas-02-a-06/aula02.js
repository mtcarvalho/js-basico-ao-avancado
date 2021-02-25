// rest/spread (juntar/espalhar valores)

// exemplo 1

function total(...precos) {
    let total = 0;
    precos.forEach(p => total += p);

    return total;
}

console.log(total(23.65, 34, 75.00, 16.78).toFixed(2));

console.log(total(35, 90));

console.log(total(87, 56.98));

console.log(total());

// exemplo 2

let frutas1 = ["Manga", "Uva", "Melancia"];
let frutas2 = ["Abacate", "Morango", "Jaca"];

let compras = [...frutas1, ...frutas2];

console.log(compras);

// exemplo 3

alunos = ["Paula", "Felipe", "Fernanda"];
novo_aluno = "Joana";

//alunos.push(novo_aluno);
//console.log(alunos);

let todos_alunos = [...alunos, novo_aluno];
console.log(alunos);