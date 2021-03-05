class CompetenciasModalView extends ModalView {
    template(detalhesMagia, labelsMagia) {
            return `<div class="conteudo-modal">
                    <div class="cabecalho-magia">
                        <div class="nome-magia">
                            <p>${detalhesMagia.titulo}</p>
                        </div>
                        <div class="bandeiras">
                            <div class="badge tooltip">
                                ${detalhesMagia.badge_uso_atualmente ? 
                                    `<i class="fas fa-certificate"></i><span class="tooltiptext"><img src="img/infoicon.png" alt="">${labelsMagia.tooltip_badge_uso_atualmente}</span>` : ''}
                            </div>
                            <div class="badge tooltip">
                                ${detalhesMagia.badge_somente_estudei ? 
                                    `<i class="fas fa-journal-whills"></i><span class="tooltiptext"><img src="img/infoicon.png" alt="">${labelsMagia.tooltip_badge_somente_estudei}</span>` : ''}
                            </div>
                            <div class="badge tooltip">
                                ${detalhesMagia.badge_usei_anteriormente ? 
                                    `<i class="fas fa-medal"></i><span class="tooltiptext"><img src="img/infoicon.png" alt="">${labelsMagia.tooltip_badge_usei_anteriormente}</span>` : ''}
                            </div>
                        </div>
                        <a class="close-btn" onclick="competenciasController.fecharModal()">&times;</a>
                    </div>
                    <div class="conteudo-magia">
                        <div class="texto-magia">
                            <p>${detalhesMagia.texto}</p>
                        </div>
                        <div class="cursos-magia">
                             <ul>
                                ${detalhesMagia.cursos.map(n => `
                                    <li>
                                        <a href="${n.link_certificado}" target="_blank">
                                            <i class="fas fa-scroll"></i>
                                        </a>
                                        ${n.titulo_curso}
                                    </li>
                                `).join('')}
                            </ul>
                            <p>${labelsMagia.label_cursos}</p>
                        </div>
                    </div>
                    <div class="rodape-magia">
                        <div class="info-magia">
                            <p class="titulo-info-magia">${labelsMagia.label_duracao}</p>
                            <p class="descricao-info-magia">${detalhesMagia.duracao}</p>
                        </div>
                        <div class="nivel-progresso-magia">
                            <p class="titulo-info-magia">${labelsMagia.label_nivel}</p>
                            <div class="progresso-magia">
                                <div class="${detalhesMagia.class_css_nivel}"></div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}