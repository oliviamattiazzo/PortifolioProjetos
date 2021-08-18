class CompetenciasView extends View {
    template(idioma) {
        return `<h1>${idioma.competencias.titulo}</h1>
                <div class="conteudo-competencias">
                    <div class="spellbook">
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>1</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_backend.titulo}</h3>
                            </div>
                            <ul>
                                ${idioma.competencias.conteudo.magias_backend.itens.map(backend => `
                                <li>
                                    <i class="fas fa-server"
                                        onmouseover="competenciasController.toggleBarraProgresso(${backend.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${backend.id})"></i> ${backend.titulo}
                                    <div class="nivel-progresso-magia" id="${backend.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${backend.class_css_nivel}">
                                                <p>${backend.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                                `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>2</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_bd.titulo}</h3>
                            </div>
                            <ul>
                                ${idioma.competencias.conteudo.magias_bd.itens.map(bd => `
                                <li>
                                    <i class="fas fa-server"
                                        onmouseover="competenciasController.toggleBarraProgresso(${bd.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${bd.id})"></i> ${bd.titulo}
                                    <div class="nivel-progresso-magia" id="${bd.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${bd.class_css_nivel}">
                                                <p>${bd.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                                `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>3</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_frontend.titulo}</h3>
                            </div>
                            <ul>
                               ${idioma.competencias.conteudo.magias_frontend.itens.map(frontend => `
                               <li>
                                    <i class="fas fa-server"
                                        onmouseover="competenciasController.toggleBarraProgresso(${frontend.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${frontend.id})"></i> ${frontend.titulo}
                                    <div class="nivel-progresso-magia" id="${frontend.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${frontend.class_css_nivel}">
                                                <p>${frontend.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                               `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>4</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_idiomas.titulo}</h3>
                            </div>
                            <ul>
                                ${idioma.competencias.conteudo.magias_idiomas.itens.map(idiomas => `
                                <li>
                                    <i class="fas fa-language"
                                        onmouseover="competenciasController.toggleBarraProgresso(${idiomas.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idiomas.id})"></i> ${idiomas.titulo}
                                    <div class="label ${idiomas.cor}" id="${idiomas.id}" style="display: none;">
                                        <p>${idiomas.duracao} <p>
                                    </div>
                                </li> 
                                `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>5</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_infra.titulo}</h3>
                            </div>
                            <ul>
                               ${idioma.competencias.conteudo.magias_infra.itens.map(infra => `
                               <li>
                                    <i class="fas fa-cogs"
                                        onmouseover="competenciasController.toggleBarraProgresso(${infra.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${infra.id})"></i> ${infra.titulo}
                                    <div class="nivel-progresso-magia" id="${infra.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${infra.class_css_nivel}">
                                                <p>${infra.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                               `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>6</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_marketing.titulo}</h3>
                            </div>
                            <ul>
                                ${idioma.competencias.conteudo.magias_marketing.itens.map(marketing => `
                               <li>
                                    <i class="fas fa-poll"
                                        onmouseover="competenciasController.toggleBarraProgresso(${marketing.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${marketing.id})"></i> ${marketing.titulo}
                                    <div class="label ${marketing.cor}" id="${marketing.id}" style="display: none;">
                                        <p>${marketing.duracao} <p>
                                    </div>
                                </li> 
                               `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>7</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_testes.titulo}</h3>
                            </div>
                            <ul>
                                ${idioma.competencias.conteudo.magias_testes.itens.map(testes => `
                                <li>
                                    <i class="fas fa-flag-checkered"
                                        onmouseover="competenciasController.toggleBarraProgresso(${testes.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${testes.id})"></i> ${testes.titulo}
                                    <div class="nivel-progresso-magia" id="${testes.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${testes.class_css_nivel}">
                                                <p>${testes.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                                `).join('')}
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>8</h3>
                                </div>
                                <h3>${idioma.competencias.conteudo.magias_outros.titulo}</h3>
                            </div>
                            <ul>
                                ${idioma.competencias.conteudo.magias_outros.itens.map(outros => `
                                <li>
                                    <i class="fas fa-laptop-code"
                                        onmouseover="competenciasController.toggleBarraProgresso(${outros.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${outros.id})"></i> ${outros.titulo}
                                    <div class="nivel-progresso-magia" id="${outros.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${outros.class_css_nivel}">
                                                <p>${outros.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>`;
    }
}