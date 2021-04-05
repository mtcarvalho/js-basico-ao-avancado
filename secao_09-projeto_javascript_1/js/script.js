/* 
    Listar elementos
 */

// 1) temos que referenciar o input
// 2) temos que referenciar o button
// 3) temos que referenciar a lista

let inputElement = document.querySelector("input[name=tarefa]");
let buttonElement = document.querySelector("#botao");
let listaElement = document.querySelector("ul.list-group");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas(tarefas, listaElement) {

    // limpar a listagem de itens antes de renderizar a tela
    listaElement.innerHTML = "";

    for (tarefa of tarefas) {    

        // criar o item da lista
        let tarefaElement = document.createElement("li");

        // adicionar classes no item na lista
        tarefaElement.setAttribute("class", "list-group-item list-group-item-action");

        // adicionar evento de clique no item da lista - para deletar tarefa
        tarefaElement.onclick = function() {
            deletarTarefa(this);
        }

        // criar um text
        let textElement = document.createTextNode(tarefa);

        // adicionar elemento texto no elemento lista
        tarefaElement.appendChild(textElement);

        // adicionar tarefa li na lista ul
        listaElement.appendChild(tarefaElement);

    }

    // Salva os novos dados no banco de dados
    salvarDadosNoStorage();
}

renderizarTarefas(tarefas, listaElement);

/* 
    Adicionar elementos
 */

// 1) precisamos "escutar" o evento de clique no botão
// 2) precisamos capturar o valor digitado pelo usuário no input
// 3) precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela


/* Minha solução pro caso da lista não ser printada com os elementos 2x
não precisaria do listaElement.innerHTML = "";
buttonElement.onclick = function() {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa);

    renderizarTarefas([novaTarefa], listaElement);
}
*/

buttonElement.onclick = function() {
    let novaTarefa = inputElement.value;

    // Limpar mensagens de erro - spans
    removerSpans();

    if (novaTarefa != "") {

        tarefas.push(novaTarefa);

        renderizarTarefas(tarefas, listaElement);

        // Limpar o input
        inputElement.value = "";

    } else {
        let cardElement = document.querySelector(".card");
        let spanElement = document.createElement("span");
        spanElement.setAttribute("class", "alert alert-warning");

        let msgElement = document.createTextNode("Você precisa informar a tarefa!");

        spanElement.appendChild(msgElement);
        cardElement.appendChild(spanElement);
    }

}

function removerSpans() {
     let spansElement = document.querySelectorAll("span");
     let cardElement = document.querySelector(".card");

     for (spanElement of spansElement) {
         cardElement.removeChild(spanElement);
     }
}

/* 
    Deletar elementos
 */

function deletarTarefa(tarefa) {

    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tarefa.textContent), 1);

    // Renderiza novamente a tela
    renderizarTarefas(tarefas, listaElement);
}

/* 
    Salvar dados no storage
 */

 function salvarDadosNoStorage() {
     // todo navegador web possui esta capacidade
     localStorage.setItem("tarefas", JSON.stringify(tarefas));
 }