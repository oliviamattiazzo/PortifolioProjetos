class CarreiraView extends View {
    template(idioma) {
        return `<h1>${idioma.carreira.titulo}</h1>
                <div class="conteudo">
                    <p class="trabalho">
                        <span>Unipartner IT Services <i class="fas fa-map-marker-alt"></i> <i class="em em-flag-pt" aria-role="presentation" aria-label="Portugal Flag"></i></span><br>
                        <span class="subtitulo"><i class="fas fa-id-badge"></i> ${idioma.carreira.conteudo.empresa_unipartner.titulo}</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 01/2019 - presente</span>
                        <span class="subtitulo"><i class="fas fa-laptop-code"></i> HTML, Javascript, C# (.NET 4.5 e 4.6), WCF, VB.NET, SQL (OS2200), Selenium e Visual Studio <br></span>
                        Implementação de novas funcionalidades e melhorias no Sistema Integrado de Pensões (SIP) da Segurança Social de Portugal, além da documentação das mesmas. Construção de serviços WCF de integração entre sistemas. Inclusão e desenvolvimento de testes automatizados, tais como: testes unitários com MSTest nos serviços de integração, testes de regressão e de carga no SIP através do framework Selenium e do componente de carga do Visual Studio 2017.
                    </p>
                    <p class="trabalho">
                        <span>DB1 Global Software <i class="fas fa-map-marker-alt"></i> <i class="em em-flag-br" aria-role="presentation" aria-label="Brazil Flag"></i></span><br>
                        <span class="subtitulo"><i class="fas fa-id-badge"></i> Desenvolvedora Web .NET</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 07/2018 - 01/2019</span>
                        <span class="subtitulo"><i class="fas fa-laptop-code"></i> HTML, Razor, Javascript, jQuery, C# (.NET 4.7.1), PL/SQL (Oracle), Visual Studio e SpecFlow<br></span>
                        Implementação de novas funcionalidades para o novo sistema de gerenciamento do BRDE, banco de desenvolvimento governamental. Construção e manutenção de layouts com a sintaxe Razor e Javascript. Desenvolvimento e manutenção de testes automatizados de comportamento com a framework SpecFlow. Neste projeto, também houve a oportunidade de trabalhar de forma muito próxima com os analistas de requisitos do cliente, demandando boas habilidades de comunicação e relacionamento interpessoal.
                    </p>
                    <p class="trabalho">
                        <span>Paschoalotto Serviços Financeiros</span><br>
                        <span class="subtitulo"><i class="fas fa-id-badge"></i> Desenvolvedora Backend .NET</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 10/2016 - 07/2018</span>
                        <span class="subtitulo"><i class="fas fa-laptop-code"></i> HTML, CSS, C# (.NET 4.5 e 4.7.1), WCF, WebAPI, PL/SQL (PostgreSQL) e Visual Studio<br></span>
                        Implementação de novas funcionalidades, como novas formas de pagamento diferente de boleto, por exemplo, e novos clientes em um dos sistemas de cobrança, o Pagou Fácil B2C, desenvolvido pelo departamento de Inovação da empresa. Desenvolvimento de outros serviços e APIs do ecossistema do Pagou Fácil, como seu respectivo Chatbot, Atendente Virtual, Pagou Fácil B2B e Enviou Fácil. Também houve alguma manutenção no principal sistema de cobrança da empresa, utilizado pelos operadores.
                    </p>
                    <p class="estudos">
                        <span>Universidade Estadual Paulista - Unesp <i class="fas fa-map-marker-alt"></i> <i class="em em-flag-br" aria-role="presentation" aria-label="Brazil Flag"></i></span><br>
                        <span class="subtitulo"><i class="fas fa-user-graduate"></i> Bacharel em Sistemas de Informação</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 2012 - 2017</span>
                        <span class="subtitulo"><i class="fas fa-medal"></i> 7.38/10<br></span>
                    </p>
                    <p class="estudos">
                        <span>Trinity College Dublin</span><br>
                        <span class="subtitulo"><i class="fas fa-id-badge"></i> Desenvolvedora Backend .NET</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 10/2016 - 07/2018</span>
                        <span class="subtitulo"><i class="fas fa-laptop-code"></i> HTML, CSS, C# (.NET 4.5 e 4.7.1), WCF, WebAPI, PL/SQL (PostgreSQL) e Visual Studio<br></span>
                    </p>
                    <p class="trabalho">
                        <span>MStech</span><br>
                        <span class="subtitulo"><i class="fas fa-id-badge"></i> Desenvolvedora Web .NET</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 04/2012 - 03/2014</span>
                        <span class="subtitulo"><i class="fas fa-laptop-code"></i> ASP.NET, C#, Javascript, Microsoft SQL Server, SQL e Visual Studio<br></span>
                    </p>
                    <p class="estudos">
                        <span>CTI - Colégio Técnico Industrial</span><br>
                        <span class="subtitulo"><i class="fas fa-id-badge"></i> Desenvolvedora Backend .NET</span>
                        <span class="subtitulo"><i class="far fa-calendar-alt"></i> 10/2016 - 07/2018</span>
                        <span class="subtitulo"><i class="fas fa-laptop-code"></i> HTML, CSS, C# (.NET 4.5 e 4.7.1), WCF, WebAPI, PL/SQL (PostgreSQL) e Visual Studio<br></span>
                    </p>
                </div>
                `;
    }
}