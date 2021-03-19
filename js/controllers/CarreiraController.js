class CarreiraController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._carreiraView = new CarreiraView($("#carreiraView"));
        this._carreiraViewEn = new CarreiraView($("#carreiraViewEn"));
        this._carreiraViewEs = new CarreiraView($("#carreiraViewEs"));
    }

    carreira() {
        this._carreiraView.update(ptbr);
    }

    career() {
        this._carreiraViewEn.update(en);
    }

    carrera() {
        this._carreiraViewEs.update(es);
    }

    abrirLocal(nomeLocal) {
    }
}