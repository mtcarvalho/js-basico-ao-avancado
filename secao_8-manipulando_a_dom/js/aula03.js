function mostrarAlerta() {
    alert("O botão foi clicado!");
}

function mudarTexto(elemento){
    elemento.innerHTML = "<b>Eu estou avisando!!!!</b>"
}

function mudarCor() {
    let cores = ["green", "red", "magenta", "purple", "blue", "yellow", "black", "orange"];
    
    const num = Math.floor((Math.random() * cores.length) + 1);
    
    document.bgColor = cores[num];
}

function escreverTexto(input) {
    let span = document.getElementById("texto");
    
    span.innerHTML = input.value;
}