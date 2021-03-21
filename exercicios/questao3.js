//3) Crie uma função que receba um array como entrada e verifique se neste array contém a habilidade 
//“JavaScript”. Imprima a informação conforme cada caso, de acordo com o esqueleto abaixo:

function sabe_javascript(habilidades) {
    // implementação
    for (habilidade of habilidades) {
        if (habilidade == "JavaScript") {
            console.log("Sabe JavaScript");
            return;
        }
    }
    console.log("Não sabe JavaScript");
}

// Exemplos

// 1
habilidades1 = ["Python", "React", "JavaScript"];

// 2
habilidades2 = ["Python", "Bash", "Linux"];

// Execução
sabe_javascript(habilidades1); // Sabe JavaScript

sabe_javascript(habilidades2); // Não sabe JavaScript