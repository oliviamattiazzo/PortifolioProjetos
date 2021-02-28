class CompetenciasController {
    constructor() {
        var $ = document.querySelector.bind(document);
        let idSection = "competencias";
        this._idiomaAtual = ptbr;

        this._competenciasView = new CompetenciasView($("#competenciasView"), idSection);
        this._competenciasViewEn = new CompetenciasView($("#competenciasViewEn"), idSection);
        this._competenciasViewEs = new CompetenciasView($("#competenciasViewEs"), idSection);
    }

    ptbr() {
        this._idiomaAtual = ptbr;
        this._competenciasView.update(ptbr);
    }

    english() {
        this._idiomaAtual = en;
        this._competenciasViewEn.update(en);
    }

    espanol() {
        this._idiomaAtual = es;
        this._competenciasViewEs.update(es);
    }

    fechar() {
        FecharSections.fechar(this._competenciasView, this._competenciasViewEn, this._competenciasViewEs);
    }

    abrirModal(idTipoMagia, idConteudoModal) {
        this._competenciasModalView = new CompetenciasModalView(document.querySelector(`#competenciasView${this._idiomaAtual.id == 'ptbr' ? '' : this._idiomaAtual.id}`));
        this._competenciasModalView.updateModal(this._idiomaAtual.competencias.conteudo[idTipoMagia].itens[idConteudoModal]);
    }
}