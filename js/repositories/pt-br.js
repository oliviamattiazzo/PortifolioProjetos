let ano = " ano";
let anos = " anos";
let meses = " meses";

let ptbr = {
    id: "ptbr",
    sobre: {
        titulo: "Sobre",
        conteudo: {
            lista_habilidades: {
                titulo: "HABILIDADES",
                texto_tooltip: "As habilidades destacadas são as utilizadas na aventura atual",
                dotnet: ".NET (C# e Visual Basic)",
                bd: "Banco de dados",
                css: "CSS",
                desenvolvimento_software: "Desenv. de software",
                git: "Git",
                ingles: "Inglês",
                javascript: "Javascript",
                jquery: "jQuery",
                html: "HTML",
                nunit: "NUnit",
                os2200: "OS2200",
                testes_automatizados: "Testes automatizados",
                testes_carga: "Testes de carga",
                razor: "Razor",
                selenium: "Selenium",
                sql: "SQL",
                visual_studio: "Visual Studio",
                xml: "XML"
            },
            pontos_habilidade: {
                titulo_idade: "IDADE",
                valor_idade: Calculos.calculaIdadeAtual(),
                titulo_anos_xp: "ANOS XP",
                valor_anos_xp: Calculos.calculaAnosExperiencia(),
                titulo_idiomas: "IDIOMAS",
                valor_idiomas: Constantes.numIdiomas,
                titulo_cursos: "CURSOS",
                valor_cursos: Constantes.numCursos,
                titulo_empresas: "EMPRESAS",
                valor_empresas: Constantes.numEmpresas
            },
            texto: {
                paragrafo1: "Olá! Meu nome é Olivia Mattiazzo e atualmente trabalho como Consultora .NET em Oeiras, no distrito de Lisboa, Portugal.",
                paragrafo2: "Nasci e cresci no interior de São Paulo e grande parte da minha formação acadêmica vem de lá — fiz um técnico em informática e bacharelado em Sistemas de Informação, tudo pela Unesp de Bauru. Também tive a oportunidade de realizar o sonho do intercâmbio, através do programa Ciência Sem Fronteiras, na Trinity College, em Dublin. Fiz um ano letivo completo lá e três meses de estágio. Na época, era uma das 100 melhores universidades do mundo!",
                paragrafo3: "Desde o início da minha graduação até agora, tive a oportunidade de estagiar e trabalhar com desenvolvimento. A maior parte da minha carreira se deu desenvolvendo sistemas governamentais — com clientes como a FDE (SP – BR), o BRDE (RS – BR) e a Segurança Social de Portugal.",
                paragrafo4: "Eu sou apaixonada por tecnologias Microsoft, especialmente o C#, e estudo e pratico muito porque gostaria de me tornar uma referência em relação à isso. Também tenho uma grande preferência e facilidade com o backend — eu também gosto de front, mas não sou tão boa. Prefiro encará-lo quase como um artesanato do que ter que trabalhar exclusivamente com ele!",
                paragrafo5: "Fora do mundo do desenvolvimento, gosto muito de estudar idiomas — além do meu português brasileiro fluente (e português de Portugal avançado 😂), tenho inglês fluente, algumas noções de alemão e atualmente faço aulas de espanhol, e já estou no nível intermediário.",
                paragrafo6: "No meu tempo livre, você também pode me encontrar montando fichas de RPG e escrevendo backgrounds para personagens, assistindo séries, jogando videogame ou planejando minha próxima viagem e/ou show! Gosto muito de explorar: lugares, comidas, culturas, conceitos e sentimentos. Seguimos com a cabeça sempre aberta e o coração muito cheio!"
            }
        }
    },
    carreira: {
        titulo: "Carreira",
        conteudo: { 
        }
    },
    competencias: {
        titulo: "Competências",
        conteudo: {
            magias_backend: {
                id: "magias_backend",
                titulo: "BACKEND",
                itens: [
                    {
                        id: "csharp",
                        titulo: "C#",
                        duracao: Constantes.numAnosCSharp + anos,
                        class_css_nivel: "barra-progresso-magia90"
                    },
                    {
                        id: "ling_c",
                        titulo: "C",
                        duracao: Constantes.numAnosLingC + anos,
                        class_css_nivel: "barra-progresso-magia60"
                    },
                    {
                        id: "java",
                        titulo: "Java",
                        duracao: Constantes.numMesesJava + meses,
                        class_css_nivel: "barra-progresso-magia50"
                    },
                    {
                        id: "php",
                        titulo: "PHP",
                        duracao: Constantes.numMesesPhp + meses,
                        class_css_nivel: "barra-progresso-magia50"
                    },
                    {
                        id: "sql",
                        titulo: "SQL",
                        duracao: Constantes.numAnosSQL + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    },
                    {
                        id: "vb_net",
                        titulo: "VB.NET",
                        duracao: Constantes.numAnosVBNET + anos,
                        class_css_nivel: "barra-progresso-magia60"
                    }
                ]
            },
            magias_bd: {
                id: "magias_bd",
                titulo: "BANCOS DE DADOS",
                itens: [
                    {
                        id: "postgre",
                        titulo: "PostgreSQL",
                        duracao: Constantes.numAnosPostgre + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    },
                    {
                        id: "oracle",
                        titulo: "Oracle",
                        duracao: Constantes.numAnosOracle + " ano",
                        class_css_nivel: "barra-progresso-magia60"
                    },
                    {
                        id: "os2200",
                        titulo: "OS2200",
                        duracao: Constantes.numAnosOS2200 + anos,
                        class_css_nivel: "barra-progresso-magia60"
                    },
                    {
                        id: "sqlserver",
                        titulo: "SQLServer",
                        duracao: Constantes.numAnosSQLServer + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    }
                ]
            },
            magias_frontend: {
                id: "magias_frontend",
                titulo: "FRONTEND",
                itens: [
                    {
                        id: "aspnet",
                        titulo: "ASP.NET",
                        duracao: Constantes.numAnosASPNET + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    },
                    {
                        id: "css",
                        titulo: "CSS",
                        duracao: Calculos.calculaAnosExperienciaCSS() + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    },
                    {
                        id: "html",
                        titulo: "HTML",
                        duracao: Calculos.calculaAnosExperienciaHTML() + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    },
                    {
                        id: "javascript",
                        titulo: "Javascript",
                        duracao: Calculos.calculaAnosExperienciaJavascript() + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    },
                    {
                        id: "razor",
                        titulo: "Razor",
                        duracao: Constantes.numMesesRazor + meses,
                        class_css_nivel: "barra-progresso-magia60"
                    }
                ]
            },
            magias_idiomas: {
                id: "magias_idiomas",
                titulo: "IDIOMAS",
                itens: [
                    {
                        id: "alemao",
                        titulo: "Alemão",
                        duracao: "Noções",
                        cor: "label-laranja"
                    },
                    {
                        id: "espanhol",
                        titulo: "Espanhol",
                        duracao: "Intermediário",
                        cor: "label-amarelo"
                    },
                    {
                        id: "ingles",
                        titulo: "Inglês",
                        duracao: "Fluente",
                        cor: "label-azul"
                    },
                    {
                        id: "portugues",
                        titulo: "Português",
                        duracao: "Nativo",
                        cor: "label-azul"
                    }
                ]
            },
            magias_infra: {
                id: "magias_infra",
                titulo: "INFRAESTRUTURA",
                itens: [
                    {
                        id: "docker",
                        titulo: "Docker",
                        duracao: Constantes.numAnosDocker + ano,
                        class_css_nivel: "barra-progresso-magia50"
                    },
                    {
                        id: "git",
                        titulo: "Git",
                        duracao: Calculos.calculaAnosExperienciaGit() + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    }
                ]
            },
            magias_marketing: {
                id: "magias_marketing",
                titulo: "MARKETING",
                itens: [
                    {
                        id: "seo",
                        titulo: "SEO",
                        duracao: "Estudos",
                        cor: "label-azul"
                    },
                    {
                        id: "twitter",
                        titulo: "Twitter",
                        duracao: "Estudos",
                        cor: "label-azul"
                    }
                ]
            },
            magias_testes: {
                id: "magias_testes",
                titulo: "TESTES",
                itens: [
                    {
                        id: "nunit",
                        titulo: "NUnit",
                        duracao: Constantes.numAnosNunit + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    },
                    {
                        id: "selenium",
                        titulo: "Selenium",
                        duracao: Constantes.numAnosSelenium + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    },
                    {
                        id: "carga",
                        titulo: "Carga",
                        duracao: Constantes.numAnosSelenium + anos,
                        class_css_nivel: "barra-progresso-magia60"
                    },
                    {
                        id: "xunit",
                        titulo: "xUnit",
                        duracao: Constantes.numAnosxUnit + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    }
                ]
            },
            magias_outros: {
                id: "magias_outros",
                titulo: "OUTROS",
                itens: [
                    {
                        id: "visual_studio",
                        titulo: "VisualStudio",
                        duracao: Constantes.numAnosVisualStudio + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    },
                    {
                        id: "vscode",
                        titulo: "VScode",
                        duracao: Calculos.calculaAnosExperienciaVScode() + anos,
                        class_css_nivel: "barra-progresso-magia70"
                    },
                    {
                        id: "xml",
                        titulo: "XML",
                        duracao: Calculos.calculaAnosExperienciaXML() + anos,
                        class_css_nivel: "barra-progresso-magia80"
                    }
                ]
            }
        }
    }
}