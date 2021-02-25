let btnElement = document.querySelector("#btn");
let inputElement = document.querySelector("input[name=github_user");
let divElement = document.querySelector("#app");

let promise = function() {
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector("input[name=github_user").value;
        let ajax = new XMLHttpRequest();

        ajax.open("GET", `https://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) { 

                if (ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                } else {
                    reject("Não foi encontrado nenhum usuário com este nome");
                }

            }

        }

    });

}

btnElement.onclick = function() {
    // Limpar a div
    divElement.innerHTML = "";

    // Criar o span
    let spanNoneElement = document.createElement("span");

    // Criar a variável nome
    let txtNomeElement = "";

    // Executando a promise
    promise()
        // resolve (sucesso)
        .then(function(response) {
            // Se o usuário tem nome
            if (response["name"] !== null) {
                txtNomeElement = document.createTextNode(response["name"]);
                console.log(txtNomeElement);

                let img = document.createElement("img");
                img.setAttribute("src", response["avatar_url"]);
                img.setAttribute("alt", response["name"]);
                img.setAttribute("width", "45px");
                img.setAttribute("height", "45px");

                divElement.appendChild(img);
            } else {
                txtNomeElement = document.createTextNode(`O usuário ${inputElement.value} não tem nome.`);
                console.log(txtNomeElement);
            }

        })
        .catch(function(error){
            txtNomeElement = document.createTextNode(error);
        })
        .then(function() {
            // Adiciona o texto ao span e o span à div
            spanNoneElement.appendChild(txtNomeElement);
            divElement.appendChild(spanNoneElement);
        });
        
}