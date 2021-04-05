let a = document.querySelector(".link");

// caminhando para dentro da classe link
console.log(a.innerText); // imprime texto do Texto link

// caminhando para fora da tag classe
console.log(a.parentNode); // imprime toda a tag body
console.log(a.parentNode.parentNode); // imprime toda a tag html
console.log(a.parentNode.parentNode.parentNode); // imprime todo o document
console.log(a.parentNode.parentNode.parentNode.parentNode); // chegou ao limite, não tem quem imprimir

console.log(a.parentNode.parentNode.childNodes); // lista todos os filhos da tag HTML 
// o elemento "text" no array de saída se refere ao espaço entre head e body

console.log(a.parentNode.parentNode.firstChild); // primeiro filho da tag HTML - head
console.log(a.parentNode.parentNode.lastChild); // primeiro filho da tag HTML - body

console.log(a.parentNode.parentNode.firstChild.nextSibling); // pega primeiro filho do HTML (firstChild), pega próximo filho (nextSibling) - "text"
console.log(a.parentNode.parentNode.firstChild.nextSibling.nextSibling); // pega primeiro filho do HTML (firstChild), pega próximo filho (nextSibling) - "body"

