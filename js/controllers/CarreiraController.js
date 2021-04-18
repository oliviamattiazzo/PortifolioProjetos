class CarreiraController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._carreiraView = new CarreiraView($("#carreiraView"));
        this._carreiraViewEn = new CarreiraView($("#carreiraViewEn"));
        this._carreiraViewEs = new CarreiraView($("#carreiraViewEs"));
    }

    ptbr() {
        this._idiomaAtual = ptbr;
        this._carreiraView.update(ptbr);
    }

    english() {
        this._idiomaAtual = en;
        this._carreiraViewEn.update(en);
    }

    espanol() {
        this._idiomaAtual = es;
        this._carreiraViewEs.update(es);
    }

    fechar() {
        FecharSections.fechar(this._carreiraView, this._carreiraViewEn, this._carreiraViewEs);
    }

    toogleMenuBussola(event) {
        var items = document.querySelectorAll('.circle a');

        for (var i = 0, l = items.length; i < l; i++) {
            items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

            items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        }

        event.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
        document.querySelector('.legenda-menu').classList.toggle('open');
    }

    abrirLocal(nomeLocal) {
    }
}