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
                                <li>
                                    <i class="fas fa-save" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.csharp.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.csharp.id})"></i> ${idioma.competencias.conteudo.magias_backend.itens.csharp.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_backend.itens.csharp.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_backend.itens.csharp.class_css_nivel}"> 
                                                <p>${idioma.competencias.conteudo.magias_backend.itens.csharp.duracao} <p>
                                            </div> 
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-save" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.ling_c.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.ling_c.id})"></i> ${idioma.competencias.conteudo.magias_backend.itens.ling_c.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_backend.itens.ling_c.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_backend.itens.ling_c.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_backend.itens.ling_c.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-save" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.java.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.java.id})"></i> ${idioma.competencias.conteudo.magias_backend.itens.java.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_backend.itens.java.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_backend.itens.java.class_css_nivel}">
                                            </div>
                                            <p>${idioma.competencias.conteudo.magias_backend.itens.java.duracao} <p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-save" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.php.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.php.id})"></i> ${idioma.competencias.conteudo.magias_backend.itens.php.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_backend.itens.php.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_backend.itens.php.class_css_nivel}">
                                            </div>
                                            <p>${idioma.competencias.conteudo.magias_backend.itens.php.duracao} <p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-save" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.sql.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.sql.id})"></i> ${idioma.competencias.conteudo.magias_backend.itens.sql.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_backend.itens.sql.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_backend.itens.sql.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_backend.itens.sql.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-save" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.vb_net.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_backend.itens.vb_net.id})"></i> ${idioma.competencias.conteudo.magias_backend.itens.vb_net.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_backend.itens.vb_net.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_backend.itens.vb_net.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_backend.itens.vb_net.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>2</h3>
                                </div>
                                <h3>BANCOS DE DADOS</h3>
                            </div>
                            <ul>
                                <li>
                                    <i class="fas fa-server" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.postgre.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.postgre.id})"></i> ${idioma.competencias.conteudo.magias_bd.itens.postgre.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_bd.itens.postgre.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_bd.itens.postgre.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_bd.itens.postgre.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-server" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.oracle.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.oracle.id})"></i> ${idioma.competencias.conteudo.magias_bd.itens.oracle.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_bd.itens.oracle.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_bd.itens.oracle.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_bd.itens.oracle.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-server" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.os2200.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.os2200.id})"></i> ${idioma.competencias.conteudo.magias_bd.itens.os2200.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_bd.itens.os2200.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_bd.itens.os2200.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_bd.itens.os2200.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-server" 
                                        onmouseover="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.sql_server.id})"
                                        onmouseout="competenciasController.toggleBarraProgresso(${idioma.competencias.conteudo.magias_bd.itens.sql_server.id})"></i> ${idioma.competencias.conteudo.magias_bd.itens.sql_server.titulo}
                                    <div class="nivel-progresso-magia" id="${idioma.competencias.conteudo.magias_bd.itens.sql_server.id}" style="display: none;">
                                        <div class="progresso-magia">
                                            <div class="${idioma.competencias.conteudo.magias_bd.itens.sql_server.class_css_nivel}">
                                                <p>${idioma.competencias.conteudo.magias_bd.itens.sql_server.duracao} <p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>3</h3>
                                </div>
                                <h3>FRONTEND</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-hand-sparkles"></i> ASP.NET</li>
                                <li><i class="fas fa-hand-sparkles"></i> CSS</li>
                                <li><i class="fas fa-hand-sparkles"></i> HTML</li>
                                <li><i class="fas fa-hand-sparkles"></i> Javascript</li>
                                <li><i class="fas fa-hand-sparkles"></i> Razor</li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>4</h3>
                                </div>
                                <h3>IDIOMAS</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-language"></i> Alemão</li>
                                <li><i class="fas fa-language"></i> Espanhol</li>
                                <li><i class="fas fa-language"></i> Inglês</li>
                                <li><i class="fas fa-language"></i> Português</li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>5</h3>
                                </div>
                                <h3>INFRAESTRUTURA</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-cogs"></i> Docker</li>
                                <li><i class="fas fa-cogs"></i> Git</li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>6</h3>
                                </div>
                                <h3>MARKETING</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-poll"></i> SEO</li>
                                <li><i class="fas fa-poll"></i> Twitter</li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>7</h3>
                                </div>
                                <h3>SOFT SKILLS</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-hands-helping"></i> Comunicação</li>
                                <li><i class="fas fa-hands-helping"></i> Liderança</li>
                                <li><i class="fas fa-hands-helping"></i> Organização</li>
                                <li><i class="fas fa-hands-helping"></i> Resiliência</li>
                                <li><i class="fas fa-hands-helping"></i> Trabalho em equipe</li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>8</h3>
                                </div>
                                <h3>TESTES</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-flag-checkered"></i> NUnit</li>
                                <li><i class="fas fa-flag-checkered"></i> Selenium</li>
                                <li><i class="fas fa-flag-checkered"></i> Testes de carga</li>
                                <li><i class="fas fa-flag-checkered"></i> xUnit</li>
                            </ul>
                        </div>
                        <div class="lista-magias">
                            <div class="titulo-categoria-magia">
                                <div class="sigla-titulo-magia">
                                    <h3>9</h3>
                                </div>
                                <h3>OUTROS</h3>
                            </div>
                            <ul>
                                <li><i class="fas fa-laptop-code"></i> Visual Studio</li>
                                <li><i class="fas fa-laptop-code"></i> Visual Studio Code</li>
                                <li><i class="fas fa-laptop-code"></i> XML</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="detalhes-magia" id="modalDetalhesMagia">
                </div>`;
    }
}