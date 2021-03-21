//5) Crie uma função que receba uma lista de objetos e apresente as saídas conforme exemplo abaixo:

var programadores = [
    {
        nome: "Julia Pascoal",
        skills: ["Python", "Bash", "Linux"]
    },
    {
        nome: "Patricia Silveira",
        skills: ["JavaScript", "Flutter", "Ruby"]
    },
    {
        nome: "Mariana Carvalho",
        skills: ["MuleSoft", "Java", "Python", "JavaScript", "NodeJS"]
    }
];

// Saídas:
// O(a) programador(a) Julia Pascoal possui os skills: Python, Bash e Linux
// O(a) programador(a) Patricia Silveira possui os skills: JavaScript, Flutter e Ruby

function formata_skills(skills) {
    let saida = "";

    for (let i = 0; i < (skills.length - 1); i++) {
        saida += skills[i];

        if (i !== (skills.length - 2)) {
            saida += ", ";
        } else {
            saida += (" e " + skills[i + 1]);
        }
    }

    return saida;
}

function imprime_skills_programadores(programadores) {
    for (programador of programadores) {
        console.log(`O(a) programador(a) ${programador.nome} possui os skills: ${formata_skills(programador.skills)}`);
    }
}

imprime_skills_programadores(programadores);