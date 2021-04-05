//Tratamento de exceções: try-catch-finally

try {
    console.log(nome);
} catch(e) {
    console.log("Não foi possível imprimir nome.")
    console.log(e.name);
    console.log(e.message);
}

console.log("Oi...")

// Lançando exceções

function dividir(n1, n2){
    if (n1 === 0 || n2 === 0){
        throw("Os valores devem ser positivos") // lançando erro
    } 

    return n1 / n2;
}

try {
    let ret = dividir(10,0);
    console.log(ret);
} catch(e) {
    console.log("Não foi possível dividir");
} finally {
    console.log("Vamos continuar...")
}