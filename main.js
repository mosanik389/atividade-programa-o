const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha e utilizar a IA como automatização de tarefas administrativas?",
        alternativas: [
            {
                texto: "Concordo",
                afirmacao: "Utilizar a IA como automatização de tarefas administrativas, como correção de provas e organização de material didático, os professores podem focar mais em interações significativas com os alunos, melhorando a qualidade do ensino."
            },
            {
                texto: " Não Concordo",
                afirmacao: "Embora a inteligência artificial prometa revolucionar a automação de tarefas administrativas,  a substituição de trabalhadores humanos por sistemas automatizados levanta sérias preocupações sobre o desemprego tecnológico."
            }
        ]
    },
    {
        enunciado: " você acredita que a IA pode identificar áreas de dificuldade e fornecer intervenções personalizadas para melhorar o aprendizado?",
        alternativas: [
            {
                texto: "Concordo",
                afirmacao: "a IA pode identificar áreas de dificuldade e fornecer intervenções personalizadas para melhorar o aprendizado e o progresso acadêmico." 
            },
          
            {
                texto: "Não Concordo",
                afirmacao: "Discordar da capacidade da inteligência artificial de identificar áreas de dificuldade e fornecer intervenções personalizadas para melhorar o aprendizado e o progresso acadêmico seria ignorar os avanços significativos que a tecnologia trouxe para a educação. "
            }
                
        ]
    },
    {
        enunciado: "Como integrar a IA no currículo escolar pode capacitar os alunos com habilidades essenciais para o mundo tecnológico?",
        alternativas: [
            {
                texto: "Concordo",
                afirmacao: "Integrar a IA no currículo escolar capacita os alunos com habilidades essenciais para o mundo tecnológico, como pensamento crítico, resolução de problemas e colaboração, preparando-os para o sucesso em ambientes de trabalho cada vez mais tecnológicos."
            },
            {
                texto: "Não Concordo",
                afirmacao: " há o risco de criar uma dependência excessiva de tecnologias específicas, em detrimento da diversidade de habilidades e abordagens necessárias em um mundo cada vez mais interconectado. "
            }
        ]
    },
    {
        enunciado: " A dependência crescente da IA no currículo escolar poderia prejudicar a capacidade dos alunos de desenvolver habilidades críticas de pensamento independente?",
        alternativas: [
            {
                texto: "Concordo parcialmente",
                afirmacao: "Se os alunos se acostumarem com a conveniência e a facilidade proporcionadas pela IA, pode-se criar uma geração que se torna excessivamente dependente da tecnologia para pensar, aprender e resolver problemas, prejudicando sua capacidade de desenvolver habilidades críticas de pensamento independente."
            },
            {
                texto: "Descordo totalmente",
                afirmacao: "Discordar dessa afirmação significa reconhecer os riscos associados à dependência excessiva da inteligência artificial no processo educacional."
            }
        ]
    },
    {
        enunciado: "Você utiliza a IA?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Uma das principais vantagens de usar a inteligência artificial (IA) reside na sua capacidade de processar grandes volumes de dados de maneira rápida e eficiente, algo que seria humanamente impossível de realizar no mesmo tempo e escala"
            },
            {
                texto: "não",
                afirmacao: "Uma desvantagem significativa de usar inteligência artificial (IA) é o potencial de viés nos dados e nos algoritmos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Resultado final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();