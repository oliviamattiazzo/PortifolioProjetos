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
                                <h3>${idioma.competencias.conteudo.titulo}</h3>
                            </div>
                            <ul>
                                <li>
                                    <button id="btnAtivaModal" onclick="competenciasController.abrirModal('${idioma.competencias.conteudo.magias_backend.id}', '${idioma.competencias.conteudo.magias_backend.itens.csharp.id}')">
                                    <i class="fas fa-save"></i></button> ${idioma.competencias.conteudo.magias_backend.itens.csharp.titulo}
                                </li>
                                <li>
                                    <button id="btnAtivaModal" onclick="competenciasController.abrirModal('${idioma.competencias.conteudo.magias_backend.id}', '${idioma.competencias.conteudo.magias_backend.itens.ling_c.id}')">
                                    <i class="fas fa-save"></i></button> ${idioma.competencias.conteudo.magias_backend.itens.ling_c.titulo}
                                </li>
                                <li>
                                    <button id="btnAtivaModal" onclick="competenciasController.abrirModal('${idioma.competencias.conteudo.magias_backend.id}', '${idioma.competencias.conteudo.magias_backend.itens.java.id}')">
                                    <i class="fas fa-save"></i></button> ${idioma.competencias.conteudo.magias_backend.itens.java.titulo}
                                </li>
                                <li><i class="fas fa-save"></i> PHP</li>
                                <li><i class="fas fa-save"></i> SQL</li>
                                <li><i class="fas fa-save"></i> VB.NET</li>
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
                                <li><i class="fas fa-server"></i> Microsoft SQL Server</li>
                                <li><i class="fas fa-server"></i> PostgreSQL</li>
                                <li><i class="fas fa-server"></i> Oracle</li>
                                <li><i class="fas fa-server"></i> OS2200</li>
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