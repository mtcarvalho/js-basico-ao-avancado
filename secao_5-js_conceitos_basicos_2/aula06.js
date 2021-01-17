// Reduce - reduzir coleção de valores em um único valor e Filter-Map-Reduce

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;
for (var i = 0; i < precos.length; i++) {
    soma += precos[i];
}

console.log(soma);

soma = 0;
precos.forEach(function(valor){
    soma += valor;
})

console.log(soma);

function somar(n,m){
    return n+m;
}

console.log(precos.reduce(somar));

//Map-Reduce

function adicionar_taxa(valor){
    return valor + this;
}

var taxa = 5;
var ret = precos.map(adicionar_taxa, taxa).reduce(somar);
console.log(ret);

//Exemplo filter/map/reduce
function preco_maior_que_4(valor){
    return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa, taxa).reduce(somar);
console.log(ret);