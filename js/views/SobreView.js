class SobreView extends View {
    template(idioma) {
        return `<h1>${idioma.sobre.titulo}</h1>
                <div class="conteudo-sobre">
                    <div class="foto-ptos-habilidade">
                        <div>
                            <figure>
                                <img src="img/selfie_blog.png" alt="">
                            </figure>
                            <div class="lista-skills tooltip">
                                <ul>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.dotnet}</li>
                                    <li><img src="img/blank_skill.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.bd}</li>
                                    <li><img src="img/blank_skill.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.css}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.desenvolvimento_software}</li>
                                    <li><img src="img/blank_skill.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.git}</li>
                                    <li><img src="img/blank_skill.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.ingles}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.javascript}</li>
                                    <li><img src="img/blank_skill.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.jquery}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.html}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.nunit}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.os2200}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.testes_automatizados}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.testes_carga}</li>
                                    <li><img src="img/blank_skill.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.razor}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.selenium}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.sql}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.visual_studio}</li>
                                    <li><img src="img/checkmark.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.xml}</li>
                                </ul>
                                <p>${idioma.sobre.conteudo.lista_habilidades.titulo}</p>
                                <span class="tooltiptext"><img src="img/infoicon.png" alt=""> ${idioma.sobre.conteudo.lista_habilidades.texto_tooltip}</span>
                            </div>
                        </div>
                        <div class="pto-habilidade-idade">
                            <p class="titulo-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.titulo_idade}</p>
                            <p class="valor-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.valor_idade}</p>
                        </div>
                        <div class="pto-habilidade-experiencia">
                            <p class="titulo-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.titulo_anos_xp}</p>
                            <p class="valor-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.valor_anos_xp}</p>
                        </div>
                        <div class="pto-habilidade-idiomas">
                            <p class="titulo-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.titulo_idiomas}</p>
                            <p class="valor-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.valor_idiomas}</p>
                        </div>
                        <div class="pto-habilidade-cursos">
                            <p class="titulo-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.titulo_cursos}</p>
                            <p class="valor-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.valor_cursos}</p>
                        </div>
                        <div class="pto-habilidade-empresas">
                            <p class="titulo-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.titulo_empresas}</p>
                            <p class="valor-pto-habilidade">${idioma.sobre.conteudo.pontos_habilidade.valor_empresas}</p>
                        </div>
                    </div>
                    <div class="texto">
                        <p>${idioma.sobre.conteudo.texto.paragrafo1}</p>
                        <p>${idioma.sobre.conteudo.texto.paragrafo2}</p>
                        <p>${idioma.sobre.conteudo.texto.paragrafo3}</p>
                        <p>${idioma.sobre.conteudo.texto.paragrafo4}</p>
                        <p>${idioma.sobre.conteudo.texto.paragrafo5}</p>
                        <p>${idioma.sobre.conteudo.texto.paragrafo6}</p>
                    </div>
                </div>`;
    }
}