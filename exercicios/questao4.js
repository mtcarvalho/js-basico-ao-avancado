//4) Crie uma função que receba um inteiro como parâmetro de entrada sendo os anos de experiência de um 
//programador e imprima qual é o tipo de programador de acordo com esta experiência em anos.

function nivel_de_programador(experiencia_em_anos) {
    // implementação
    switch(true){ // referência - https://tinyurl.com/r2knr3nk
        case (experiencia_em_anos <= 1):
            console.log("Iniciante");
            break;
        case (experiencia_em_anos > 1 && experiencia_em_anos <= 3):
            console.log("Intermediário");
            break;
        case (experiencia_em_anos > 3 && experiencia_em_anos <= 6):
            console.log("Avançado");
            break;
        case (experiencia_em_anos > 6):
            console.log("Jedi Fuck Master");
            break;
        default:
            console.log("Desconhecido");
            break;
    }
}

// Execução
let experiencia = 4;
nivel_de_programador(experiencia);

/*
    Entre 0 e 1 ano: Iniciante
    Entre 1 e 3 anos: Intermediário
    Entre 3 e 6 anos: Avançado
    Igual ou maior 7 anos: Jedi Fuck Master
*/