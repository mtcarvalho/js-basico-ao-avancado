import api from "./api";
import LocalStorage from "./localStorage";

class App {

    constructor(doc) {

        // Local storage armazenando repositórios
        this.storageRepositorios = new LocalStorage("repositorios");

        // Form
        this.formulario = doc.querySelector("form");

        // Lista
        this.lista = doc.querySelector(".list-group");

        // Método para registrar os eventos do form
        this.registrarEventos();

        this.renderizarTela();

    }

    registrarEventos() {
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
    }

    async adicionarRepositorio(evento) {
        
        // Evita que formulário recarregue a página
        evento.preventDefault();

        // Recuperar o valor do input
        let input = this.formulario.querySelector("input[id=repositorio]").value;

        // Se o input vier vazio... sai da app
        if (input.length === 0) {
            return; // return sempre sai da app
        }

        this.apresentarBuscando();

        try {

            let response = await api.get(`/repos/${input}`);

            console.log(response);

            let { name, description, html_url, owner: { avatar_url } } = response.data;

            // Adiciona o repositorio na lista
            let repositorio = {
                id: this.storageRepositorios.items.length,
                nome: name,
                descricao: description,
                avatar_url,
                link: html_url,
            };

            this.storageRepositorios.items = repositorio;

            // Renderizar a tela
            this.renderizarTela();

        } catch (erro) {

            // Limpa buscando
            this.lista.removeChild(document.querySelector(".list-group-item-warning"));            

            // Limpa erro existente
            let danger = this.lista.querySelector(".list-group-item-danger");
            if (danger != null) {
                this.lista.removeChild(danger);
            }
            
            //<li>
            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item list-group-item-danger");

            let txtErro = document.createTextNode(`O repositório ${input} não existe.`);
            li.appendChild(txtErro);

            this.lista.appendChild(li);

        }
    }

    apresentarBuscando() {

        //<li>
        let li = document.createElement("li");
        li.setAttribute("class", "list-group-item list-group-item-warning");

        let txtBuscando = document.createTextNode(`Aguarde, buscando o repositório...`);
        li.appendChild(txtBuscando);

        this.lista.appendChild(li);

    }

    deletarRepositorio(evento) {
        this.storageRepositorios.removerItem(evento.target.id);
        this.renderizarTela();
    }

    renderizarTela() {

        // Limpar o conteúdo de lista
        this.lista.innerHTML  = "";

        // Percorrer toda a lista de repositórios e criar os elementos
        this.storageRepositorios.items.forEach(repositorio => {
            //<li>
            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item list-group-item-action");
            li.setAttribute("id", repositorio.id);

            li.onclick = evento => this.deletarRepositorio(evento);

            //<img>
            let img = document.createElement("img");
            img.setAttribute("src", repositorio.avatar_url);
            li.appendChild(img);

            //<strong>
            let strong = document.createElement("strong");
            let txtNome = document.createTextNode(repositorio.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            //<p>
            let p = document.createElement("p");
            let txtDescricao = document.createTextNode(repositorio.descricao);
            p.appendChild(txtDescricao);
            li.appendChild(p);

            //<a>
            let a = document.createElement("a");
            a.setAttribute("target", "_blank");
            a.setAttribute("href", repositorio.link);
            let txtA = document.createTextNode("Acessar");
            a.appendChild(txtA);
            li.appendChild(a);

            // Adicionar <l1> como filho da ul
            this.lista.appendChild(li);

            // Limpar o conteúdo do input
            this.formulario.querySelector("input[id=repositorio]").value = "";

            // Adiciona foco no input
            this.formulario.querySelector("input[id=repositorio]").focus();
        })

    }

}

new App(document);