// O HTML deve ter 5 botões, cada um representando uma cor diferente
// cada vez que um botão for clicado, o fundo da página deve ter a cor deste botão

let cores = ["green", "red", "magenta", "purple", "blue", "black", "orange"];

let buttonElements = document.querySelectorAll("button.btn");

let bodyElement = document.querySelector("body");

let coresUsadas = ["red"]

for (let i = 0; i < buttonElements.length; i++) {
    let num = 0;

    do {
        num = Math.floor(Math.random() * cores.length);
    } while (coresUsadas.includes(cores[num])); // .includes - ECMAScript 2016; while roda até que condição seja falsa

    coresUsadas.push(cores[num]);

    buttonElements[i].style.backgroundColor = cores[num];
    buttonElements[i].style.color = "white";
    
    buttonElements[i].onclick = function() {
        bodyElement.style.backgroundColor = buttonElements[i].style.backgroundColor;
    };
}