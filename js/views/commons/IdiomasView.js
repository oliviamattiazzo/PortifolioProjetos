class IdiomasView {
    static template(idSection) {
        return `<a href="#${idSection}" onclick="${idSection}Controller.ptbr()"><i class="em em-flag-br" aria-role="presentation"
                    aria-label="Brazil Flag"></i></a> -
                <a href="#${idSection}-en" onclick="${idSection}Controller.english()"><i class="em em-gb" aria-role="presentation"
                        aria-label="United Kingdom Flag"></i></a> -
                <a href="#${idSection}-es" onclick="${idSection}Controller.espanol()"><i class="em em-es" aria-role="presentation"
                        aria-label="Spain Flag"></i></a>`;
    }
}