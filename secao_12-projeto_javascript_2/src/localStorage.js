class LocalStorage {

    constructor(chave) {
        this._chave = chave;
    }

    get items() {
        let itens_existentes = JSON.parse(localStorage.getItem(this._chave));

        if (itens_existentes === null) {
            let vazio = [];
            this.inicializar(vazio);
            
            return vazio;
        }

        return itens_existentes;
    }

    set items(item) {
        let itens_existentes = this.items;
        itens_existentes.push(item);

        localStorage.setItem(this._chave, JSON.stringify(itens_existentes));
    }

    inicializar(valorInicio) {
        localStorage.setItem(this._chave, JSON.stringify(valorInicio));
    }

    removerItem(index) {
        let itens = this.items;
        //itens.splice(itens.indexOf(chave), 1);
        itens.splice(index, 1);

        this.removerItens();
        this.inicializar(itens);
    }

    removerItens() {
        localStorage.removeItem(this._chave);
    }

};

export default LocalStorage;