class SobreController {
    constructor() {
        let $ = document.querySelector.bind(document);
        let idSection = "sobre";

        this._sobreView = new SobreView($("#sobreView"), idSection);
        this._sobreViewEn = new SobreView($("#sobreViewEn"), idSection);
        this._sobreViewEs = new SobreView($("#sobreViewEs"), idSection);
    }

    ptbr() {
        this._sobreView.update(ptbr);
    }

    english() {
        this._sobreViewEn.update(en);
    }

    espanol() {
        this._sobreViewEs.update(es);
    }

    fechar() {
        FecharSections.fechar(this._sobreView, this._sobreViewEn, this._sobreViewEs);
    }
}