ano = " year";
anos = " years";
meses = " months";

let en = {
    id: "en",
    sobre: {
        titulo: "About",
        conteudo: {
            lista_habilidades: {
                titulo: "SKILLS",
                texto_tooltip: "Highlighted skills are the ones being used in the current adventure",
                dotnet: ".NET (C# and Visual Basic)",
                bd: "Databases",
                css: "CSS",
                desenvolvimento_software: "Software development",
                git: "Git",
                ingles: "English",
                javascript: "Javascript",
                jquery: "jQuery",
                html: "HTML",
                nunit: "NUnit",
                os2200: "OS2200",
                testes_automatizados: "Automated tests",
                testes_carga: "Load tests",
                razor: "Razor",
                selenium: "Selenium",
                sql: "SQL",
                visual_studio: "Visual Studio",
                xml: "XML"
            },
            pontos_habilidade: {
                titulo_idade: "AGE",
                valor_idade: Calculos.calculaIdadeAtual(),
                titulo_anos_xp: "XP YEARS",
                valor_anos_xp: Calculos.calculaAnosExperiencia(),
                titulo_idiomas: "IDIOMS",
                valor_idiomas: Constantes.numIdiomas,
                titulo_cursos: "COURSES",
                valor_cursos: Constantes.numCursos,
                titulo_empresas: "COMPANIES",
                valor_empresas: Constantes.numEmpresas
            },
            texto: {
                paragrafo1: "Hi there! My name is Olivia Mattiazzo and I'm currently working as a .NET Consultant, based in Oeiras, Lisbon district, Portugal.",
                paragrafo2: "I was born and raised in the countryside of São Paulo state, in Brazil, and most of my academic formation comes from there - I'm a Computer Technician and also have a Bachelor degree in Information Systems, all by the Unesp located in Bauru. I also had the opportunity to make one of my dreams come true: studying abroad through the Science Without Borders program, at the Trinity College, in Dublin. I studied there for an academic year and also accomplished a three month internship. At the time, it was one of the top 100 universities of the world!",
                paragrafo3: "Since the beginning of my course in college until now, I had the opportunity to be an intern and also work profissionally with software development. The most part of my career was developing governmental systems - with clients as FDE (SP - BR), BRDE (RS - BR) and Portugal's Social Security.",
                paragrafo4: "I'm passionate about Microsoft technologies, especially C#, and I've been studying and practicing a lot because I really would like to become a reference about it. I consider myself a backend developer because it's easier for me and it's what I prefer to work with. I also like frontend, but I'm not so good at it. I rather see it as a hobby than having to work exclusively with it! ",
                paragrafo5: "Out of the software development bubble, I really like to study idioms — besides my brazilian Portuguese fluent, I'm fluent at English, I have some notions of German and I'm currently having Spanish classes, and I'm already in the intermediate level.",
                paragrafo6: "In my free time, you can find me creating characters and backgrounds for RPG games, watching TV shows, playing videogame or planning my next trip and/or concert! I really like to explore: places, foods, cultures, concepts and feelings. We keep on going with the head always open and the heart very full!"
            }
        }
    },
    carreira: {
        titulo: "Career",
        conteudo: {
        }
    },
    competencias: {
        titulo: "Skills",
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
                titulo: "DATABASES",
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
                titulo: "IDIOMS",
                itens: [
                    {
                        id: "alemao",
                        titulo: "German",
                        duracao: "Notions",
                        cor: "label-laranja"
                    },
                    {
                        id: "espanhol",
                        titulo: "Spanish",
                        duracao: "Intermediate",
                        cor: "label-amarelo"
                    },
                    {
                        id: "ingles",
                        titulo: "English",
                        duracao: "Fluent",
                        cor: "label-azul"
                    },
                    {
                        id: "portugues",
                        titulo: "Portuguese",
                        duracao: "Native",
                        cor: "label-azul"
                    }
                ]
            },
            magias_infra: {
                id: "magias_infra",
                titulo: "INFRASTRUCTURE",
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
                        duracao: "Studies",
                        cor: "label-azul"
                    },
                    {
                        id: "twitter",
                        titulo: "Twitter",
                        duracao: "Studies",
                        cor: "label-azul"
                    }
                ]
            },
            magias_testes: {
                id: "magias_testes",
                titulo: "TESTS",
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
                        titulo: "Load",
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
                titulo: "OTHERS",
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