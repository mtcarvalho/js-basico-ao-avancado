function removerBotao(btn) {
    // Recuperar o elemento div
    let divElement = document.querySelector("#app");
    
    // Remove o filho selecionado da div
    divElement.removeChild(btn);
}

function removerBotao2(btn) {
    document.querySelector("#app").removeChild(btn);
}