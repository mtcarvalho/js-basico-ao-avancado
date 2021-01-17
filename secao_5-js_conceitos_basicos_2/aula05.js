// Filter

var numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros);

pares = numeros.filter(function(n){ // filtrar números pares
    return (n % 2 === 0);
});

console.log(pares);

impares = numeros.filter(function(n){
    return (n % 2 !== 0);
});

console.log(impares);

function eh_multiplo_de_5(n){
    return (n % 5 === 0)
}

console.log(numeros.filter(eh_multiplo_de_5))

alunos = [
    {
        "id": 0,
        "nome": "Maria"
    },
    {
        "id": 1,
        "nome": "Jorge"
    },
    {
        "id": 2,
        "nome": "Otávio"
    },
    {
        "id": 3,
        "nome": "Mariana"
    },
    {
        "id": 4,
        "nome": "Fellipe"
    },
];

function buscar_aluno_por_nome(aluno){
    return aluno.nome == this;
};

console.log(alunos.filter(buscar_aluno_por_nome, "Mariana"));