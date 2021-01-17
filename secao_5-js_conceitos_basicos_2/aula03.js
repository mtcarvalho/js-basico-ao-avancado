// Foreach com funções nomeadas e anônimas (com template string)

var cursos = [
    "Programação para leigos",
    "Algoritmos e lógica de programação",
    "Programação em C",
    "Programação em Java",
    "Programação em Python",
    "Banco de Dados",
    "Programação Web com Django Framework",
    "Programação em JavaScript",
];

//console.log(cursos);
//console.log(cursos.length);

cursos.forEach
// definir uma função
function imprimir(item, indice, array){
    console.log(indice + ' - ' + item);

    console.log(array);}

// para cada
cursos.forEach(imprimir);

// utilização de função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);
})

for (var i = 0; i < cursos.length; i++) {
    console.log(i + ' - ' + cursos[i]);
}