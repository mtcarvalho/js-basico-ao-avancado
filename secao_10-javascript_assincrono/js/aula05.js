// Axios

let btnElement = document.querySelector("#btn");
let divElement = document.querySelector("#app");

btnElement.onclick = function() {
    // Limpar a div
    divElement.innerHTML = "";

    // Criar o span
    let spanNoneElement = document.createElement("span");

    // Criar a variável nome
    let txtNomeElement = "";

    // Recuperar o input
    let github_user = document.querySelector("input[name=github_user").value;

    // GET, POST, PUT, DELETE
    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response) {

            if (response.data.name !== null) {
                txtNomeElement = document.createTextNode(response.data.name);

                let img = document.createElement("img");
                img.setAttribute("src", response.data.avatar_url);
                img.setAttribute("alt", response.data.name);
                img.setAttribute("width", "45px");
                img.setAttribute("height", "45px");

                divElement.appendChild(img);
            } else {
                txtNomeElement = document.createTextNode(`O usuário ${inputElement.value} não tem nome.`);
            }

            // Adiciona o texto ao span e o span à div
            spanNoneElement.appendChild(txtNomeElement);
            divElement.appendChild(spanNoneElement);

        })
        .catch(function(error) {
            
            txtNomeElement = document.createTextNode(`Não foi possível realizar a requisição.`);

            // Adiciona o texto ao span e o span à div
            spanNoneElement.appendChild(txtNomeElement);
            divElement.appendChild(spanNoneElement);

        })

}