//6) Crie uma função que receba uma idade como parâmetro e retorne uma promise que após 3 segundos irá
//mostrar se o usuário é maior ou menor de idade, conforme:

function maior_de_idade(idade){
    // Retornar uma promise

    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            if (idade >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}

// Execução
maior_de_idade(21)
    .then(function(){
        console.log("Maior de idade");
    })
    .catch(function(){
        console.log("Menor de idade");
    });