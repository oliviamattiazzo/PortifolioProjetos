class ModalView {
    constructor(elementoPai) {
        this._elementoPai = elementoPai;
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    updateModal(conteudoModal) {
        this._elementoModal = this._elementoPai.childNodes[4];
        console.log(this);
        this._elementoModal.innerHTML = this.template(conteudoModal);
    }

    limpar() {
        this._elemento.innerHTML = "";
    }
}