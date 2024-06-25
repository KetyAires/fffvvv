

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere chá ou café?",
        alternativas: [
            {
                texto: "café!",
                afirmacao: "Altamente independente, você quer se libertar das expectativas de outras pessoas e abraçar suas próprias ideias."
            },
            {
                texto: "chá!",
                afirmacao: "quer estar em um mundo onde você, e todos os outros, tenham a liberdade de viver de acordo com suas vontades, sem serem julgados."
            }
        ]
    },
    {
        enunciado: "Prefere assistir filmes ou séries?",
        alternativas: [
            {
                texto: "séries.",
                afirmacao: "Não aprende coisas novas apenas para impressionar os outros, você realmente se deleita ao ampliar os horizontes do conhecimento."
            },
            {
                texto: "filmes.",
                afirmacao: "A menos que reserve um tempo para si, corre o risco de se sentir perdido na correria da vida cotidiana, reagindo constantemente às circunstâncias externas em vez de seguir seu próprio rumo."
            }
        ]
    },
    {
        enunciado: "Gosta mais de cozinhar ou de comer fora?",
        alternativas: [
            {
                texto: "cozinhar.",
                afirmacao: "Guiado pela estratégia ao invés da sorte,analisa atentamente os pontos fortes e fracos de cada situação. Além disso, nunca deixa de acreditar que, com a dose certa de  perspicácia, podem encontrar uma maneira de vencer, independentemente dos desafios que possam surgir ao longo do caminho."
            },
            {
                texto: "comer fora.",
                afirmacao: "Em vez de se concentrarem em como as coisas poderiam ser diferentes, você têm uma capacidade incrível de apreciar o lado positivo da vida como ela é."
            }
        ]
    },
    {
        enunciado: "Você prefere praia ou montanha para passar férias?
",
        alternativas: [
            {
                texto: "praia.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: a natureza humana."
            },
            {
                texto: "montanha.",
                afirmacao: "Seu senso de lealdade é intenso,mas a intensidade do seu compromisso e desejo de servir tem suas desvantagens. Há quem possa se aproveitar da natureza prestativa e trabalhadora, levando-o a se sentir exausto e sobrecarregado."
            }
        ]
    },
    {
        enunciado: "Você prefere viajar sozinho(a) ou em grupo? ",
        alternativas: [
            {
                texto: "sozinho.",
                afirmacao: "vocễ seria elemento água!"
            },
            {
                texto: "grupo.",
                afirmacao: "vocễ seria elemento fogo!"
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
    caixaPerguntas.textContent = "Você…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
