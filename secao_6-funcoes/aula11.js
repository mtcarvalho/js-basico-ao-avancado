// Função fábrica - Function Factory, é uma fábrica de objetos

function fabricar_curso(n, p) {
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso("Programação em JavaScript", 27.99));
console.log(fabricar_curso("Criação de APIs com Django Rest Framework", 35.99));

function get_random_number(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let cursos = [ "Python", "Java", "C++", "Visual Basic", "Estrutura de dados", "C#", "Ruby" ];
let cursos_precos = [];

for (curso in cursos) {
    cursos_precos.push(fabricar_curso(cursos[curso], get_random_number(0, 100)));
}

console.log(cursos_precos);