class SobreController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._sobreView = new SobreView($("#sobreView"));
        this._sobreViewEn = new SobreView($("#sobreViewEn"));
        this._sobreViewEs = new SobreView($("#sobreViewEs"));
    }

    sobre() {
        this._sobreView.update(ptbr);
    }

    about() {
        this._sobreViewEn.update(en);
    }

    sobreEs() {
        this._sobreViewEs.update(es);
    }
}