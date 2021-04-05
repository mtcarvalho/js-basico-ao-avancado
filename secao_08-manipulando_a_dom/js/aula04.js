let itexto = document.getElementById("produto");

console.log(itexto);

let spans = document.getElementsByTagName("span");

console.log(spans);

let eles = document.getElementsByClassName("texto");

console.log(eles);

// Ler valores

console.log(spans[0].textContent); // maneira 1
console.log(spans[1].innerHTML); // maneira 2

// Alterar valores
spans[0].textContent = "JavaScript"; // maneira 1
spans[1].innerHTML = "Geek University" // maneira 2

// Outros exemplos capturando valores

let span = document.getElementsByTagName("span")[0];
console.log(span.innerHTML);

// Texto para uppercase
span.style.textTransform = "uppercase"



let inp = document.querySelector("input"); // busca pela tag

let element = document.querySelector(".texto"); // busca pela classe um único elemento

let elements = document.querySelectorAll(".texto"); // busca pela classe todos os elementos

console.log(inp);

console.log(element);

console.log(elements);

let div1 = document.querySelector("#div1"); // busca elemento pelo ID

console.log(div1);

let imp = document.querySelector("input[name=preco]");

console.log(imp);

//

let btn = document.querySelector("button.btn");

let ipt = document.querySelector("input[name=produto]");

btn.onclick = function() {
    alert(`Temos o texto ${inp.value}`);
}