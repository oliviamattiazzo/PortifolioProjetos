class CompetenciasController {
    constructor() {
        var $ = document.querySelector.bind(document);
        let idSection = "competencias";
        this._idiomaAtual = ptbr;
        
        this._competenciasView = new CompetenciasView($("#competenciasView"), idSection);
        this._competenciasViewEn = new CompetenciasView($("#competenciasViewEn"), idSection);
        this._competenciasViewEs = new CompetenciasView($("#competenciasViewEs"), idSection);

        this._viewAtual = this._competenciasView;
    }

    ptbr() {
        this._idiomaAtual = ptbr;
        this._viewAtual = this._competenciasView;
        this._competenciasView.update(ptbr);
    }

    english() {
        this._idiomaAtual = en;
        this._viewAtual = this._competenciasViewEn;
        this._competenciasViewEn.update(en);
    }

    espanol() {
        this._idiomaAtual = es;
        this._viewAtual = this._competenciasViewEs;
        this._competenciasViewEs.update(es);
    }

    fechar() {
        FecharSections.fechar(this._competenciasView, this._competenciasViewEn, this._competenciasViewEs);
    }

    toggleBarraProgresso(idMagia) {
        var display = idMagia.style.display;
        if(display == "none")
            idMagia.style.display = 'block';
        else
            idMagia.style.display = 'none';
    }
}