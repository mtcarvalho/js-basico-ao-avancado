// Destructuring

// com array
const numeros = [1,3,5,7];

const [num1, num2, num3, num4] = numeros;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// podemos descartar valores
const [n1, , n3, ] = numeros;

console.log(num1);
console.log(num3);

// podemos definir valor default que será usado caso não haja no container
const [nu1, nu2, nu3, nu4 = 34, nu5] = numeros;
console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);

// destructuring com objeto
const produto = {
    nome: "Playstation 4",
    preco: 1679.90
}

const {nome, preco} = produto; // tem que ser o mesmo nome

console.log(nome)
console.log(preco)

console.log(`${nome} custa ${preco}`)


const {n, p} = produto; // tem que ser o mesmo nome

console.log(n)
console.log(p)

console.log(`${n} custa ${p}`)