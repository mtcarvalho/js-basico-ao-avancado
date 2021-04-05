// funções com parâmetros variáveis e valor padrão

//
console.log()
console.log("arguments");
//

function somar(a,b){
    let soma = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar()); //0
console.log(somar(2)); //2
console.log(somar(2,5)); //7
console.log(somar(5,3,9)); //17

function imprime_valores(a, b){    
    for (let i in arguments) {
        console.log(arguments[i]);
    }
}

imprime_valores();
imprime_valores(2);
imprime_valores(2,5);
imprime_valores(5,3,9);

//
console.log()
console.log("valores padrão");
//

// valores padrão

//
console.log()
console.log("Gambiarra 1");
//

// Gambiarra 1
function dividir(a, b){
    a = a || 1;
    b = b || 1;

    return a/b;
}

console.log(dividir()); //1
console.log(dividir(2)); //2
console.log(dividir(2,2)); //1

// Atenção!

console.log(dividir(0, 0)); //1 e não NaN - 0 é considerado como false

//
console.log()
console.log("Gambiarra 2");
//

// Gambiarra 2

function dividir2(a, b){
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;

    return a/b;
}

console.log(dividir2()); //1
console.log(dividir2(2)); //2
console.log(dividir2(2,2)); //1

console.log(dividir2(0, 0)); 

//
console.log()
console.log("Forma recomendada");
//

// Forma atual - recomendada

function dividir_correto(a=1, b=1){
    return a/b;
}

console.log(dividir_correto()); //1
console.log(dividir_correto(2)); //2
console.log(dividir_correto(2,5)); //0.4
console.log(dividir_correto(5,3,9)); //1.666

console.log(dividir_correto(0, 0)); 

// Atenção

function somar_3(a=1, b=2, c=3){
    return a + b + c;
}

console.log(somar_3("a", "b", "c")); //abc

console.log(somar_3(true, false, "c")); //1c

console.log(somar_3(2, true, false)); //3

//Em JS, 1 é true e 0 é false

//Como resolver?

function somar_3_safe(a=1, b=2, c=3){
    if (!(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3))) {
        return "Não foi possível efetuar a soma!"
    }

    return a + b + c;
}