//2) Crie uma função que receba dois inteiros como parâmetro de entrada e exiba todos os números pares 
//entre estes dois números (inclusive), conforme esqueleto abaixo:

function pares_no_intervalo(num1, num2) {
    // implementação
    for (let i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            console.log(i);        
        }
    }
}

// usando
pares_no_intervalo(1, 42);