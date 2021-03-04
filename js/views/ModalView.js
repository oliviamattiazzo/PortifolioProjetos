class ModalView {
    constructor(elementoPai) {
        this._elementoPai = elementoPai;
        this._elementoModal = this._elementoPai.childNodes[4];
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    updateModal(conteudoModal, labelsModal) {
        this._elementoModal.innerHTML = this.template(conteudoModal, labelsModal);
        this._elementoModal.style.display = "block";
    }

    limpar() {
        this._elementoModal.style.display = "none";
    }
}