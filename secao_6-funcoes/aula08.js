// Callbacks - passar uma função para outra como parâmetro

let cursos = [ "Python", "Java", "C++", "Visual Basic", "Estrutura de dados", "C#", "Ruby" ];

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
};

cursos.forEach(apresentar); // aqui está ocorrendo o callback

// usando lambda
//
console.log();
console.log("Usando lambda");

cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
})

// usando arrow function

console.log();
console.log("Usando arrow function");

cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

// Exemplo 2
console.log();

// forma 1

let precos = [12.45, 64.65, 33.99, 23.95, 10.00, 72.87]

let menor_que_50 = precos.filter((p) => p < 50);

console.log(menor_que_50);

// forma 2

let menores = [];

for(let p in precos){
    if (precos[p] < 50){
        menores.push(precos[p]);
    }
}

console.log(menores);