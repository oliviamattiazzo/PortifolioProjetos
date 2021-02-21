class View {
    constructor(elemento, section) {
        this._elemento = elemento;
        this._divIdiomas = document.querySelector("#idiomasView");

        this._idSection = section;
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    update(idioma) {
        this._elemento.innerHTML = this.template(idioma);
        this._divIdiomas.innerHTML = IdiomasView.template(this._idSection);
    }

    limpar() {
        this._elemento.innerHTML = "";
    }
}