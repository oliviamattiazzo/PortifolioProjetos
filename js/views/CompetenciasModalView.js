class CompetenciasModalView extends ModalView {
    template(detalhesMagia) {
        return `<div class="conteudo-modal">
                    <div class="cabecalho-magia">
                        <div class="nome-magia">
                            <p>${detalhesMagia.titulo}</p>
                        </div>
                        <div class="bandeiras">
                            <div class="badge tooltip">
                                ${detalhesMagia.badge_uso_atualmente ? 
                                    '<i class="fas fa-certificate"></i><span class="tooltiptext"><img src="img/infoicon.png" alt="">Uso atualmente no meu trabalho</span>' : ''}
                            </div>
                            <div class="badge tooltip">
                                ${detalhesMagia.badge_somente_estudei ? 
                                    '<i class="fas fa-journal-whills"></i><span class="tooltiptext"><img src="img/infoicon.png" alt="">Já estudei sobre</span>' : ''}
                            </div>
                            <div class="badge tooltip">
                                ${detalhesMagia.badge_usei_anteriormente ? 
                                    '<i class="fas fa-medal"></i><span class="tooltiptext"><img src="img/infoicon.png" alt="">Já trabalhei, mas não uso atualmente</span>' : ''}
                            </div>
                        </div>
                        <a class="close-btn">&times;</a>
                    </div>
                    <div class="conteudo-magia">
                        <div class="texto-magia">
                            <p>${detalhesMagia.texto}</p>
                        </div>
                        <div class="cursos-magia">
                            <ul>
                                <li><i class="fas fa-scroll"></i> Curso xpto</li>
                            </ul>
                            <p>CURSOS</p>
                        </div>
                    </div>
                    <div class="rodape-magia">
                        <div class="info-magia">
                            <p class="titulo-info-magia">DURAÇÃO</p>
                            <p class="descricao-info-magia">2 anos</p>
                        </div>
                        <div class="nivel-progresso-magia">
                            <p class="titulo-info-magia">NÍVEL</p>
                            <div class="progresso-magia">
                                <div class="barra-progresso-magia"></div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}