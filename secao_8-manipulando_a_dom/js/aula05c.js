let btns = document.querySelectorAll("button.btn");


for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        document.querySelector("#app").removeChild(this); // ou .removeChild(btns[i]);
    };
}