// Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML

let btnElement = document.querySelector("#btn");
let inputElement = document.querySelector("input[name=github_user");
let divElement = document.querySelector("#app");

btnElement.onclick = function() {
    // Limpar o conteúdo da div
    divElement.innerHTML = "";

    // Instanciando objeto ajax
    let ajax = new XMLHttpRequest();
    // console.log(ajax.readyState); // 0

    // Abrir uma conexão (GET, POST, PUT, DELETE, PATCH)
    ajax.open("GET", `https://api.github.com/users/${inputElement.value}`);
    // console.log(ajax.readyState); // 1

    // Enviar a requisição
    ajax.send(null); // GET não envia dados


    ajax.onreadystatechange = function() {
        // Criar elemento span
        let spanNoneElement = document.createElement("span");

        // Criar a variável nome
        let txtNomeElement = "";

        /*
            ajax.readyState -> 0 => Antes da conexão ser aberta
            ajax.readyState -> 1 => Após abrir a conexão
            ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos
            ajax.readyState -> 3 => Carregando o corpo da requisição (conteúdo/dados)
            ajax.readyState -> 4 => O conteúdo (dados) está pronto para uso
         */
        if (ajax.readyState === 4) {

            if (ajax.status === 200) {

                // Transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                // Se o usuário possui nome
                if (usuario["name"] !== null) {
                    txtNomeElement = document.createTextNode(usuario["name"]);

                    let img = document.createElement("img");
                    img.setAttribute("src", usuario["avatar_url"]);
                    img.setAttribute("alt", usuario["name"]);
                    img.setAttribute("width", "45px");
                    img.setAttribute("height", "45px");

                    divElement.appendChild(img);
                } else {
                    txtNomeElement = document.createTextNode(`O usuário ${inputElement.value} não tem nome.`);
                }

            } else {
                txtNomeElement = document.createTextNode(`O usuário ${inputElement.value} não foi encontrado.`);
            }

            // Adiciona o texto ao span e o span à div
            spanNoneElement.appendChild(txtNomeElement);
            divElement.appendChild(spanNoneElement);

            // Limpar o input
            inputElement.value = "";
        }
        
    }

}