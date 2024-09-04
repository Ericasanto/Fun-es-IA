const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Você tem um plano de evacuação para sua casa?",
        alternativas:[
           " a)Sim",
           " b)Não",
           " c)Estou trabalhando nisso"
        ]
    },
    {
        enunciado: "Qual é o seu nível de conhecimento sobre primeiros socorros?",
    alternativas:[
       " a)Avançado",
       "b)Intermediário",
       "c)Básico",
       "d)Nenhum"
    ]
    },
    {
        enunciado: "Você está em um supermercado e ouve zumbis se aproximando. O que você faz?    ",
         alternativas:[
       "a)Pegar o máximo de suprimentos possível e sair correndo sem se preocupar com o barulho.",
       "b) Buscar uma saída segura e deixar uma pista falsa para os zumbis se distraírem.",
       "c) Tentar se esconder em um dos corredores até que os zumbis saiam.",
       "d) Fazer uma barricada improvisada e esperar os zumbis saírem antes de continuar."
    ]
    },
    {
        enunciado: "Você encontra um grupo de sobreviventes que parece amigável, mas não tem certeza de suas intenções. O que você faz?",
        alternativas:[
       "a) Se aproximar imediatamente e oferecer ajuda, sem pensar duas vezes.",
       "b) Observar de longe e procurar sinais de que são confiáveis antes de se aproximar.",
       "c) Evitar o grupo e seguir seu próprio caminho para não correr riscos.",
       "d) Tentar formar uma aliança sem garantias, pois a força em números é importante."
    ]
    },
    {
        enunciado: "Você precisa viajar através de uma cidade cheia de zumbis. Qual é a melhor estratégia?",
        alternativas:[
       "a) Ir pela rota mais direta, assumindo que você pode lidar com qualquer zumbi que apareça.",
       "b) Planejar uma rota segura, evitando áreas de alto risco e movendo-se silenciosamente.",
       "c) Criar distrações para os zumbis enquanto você se move pela cidade.",
       "d) Esperar até a noite, quando há menos zumbis, para fazer a travessia."
    ]
    },
    {
        enunciado: "Você descobre que um membro do grupo está doente. Qual é a melhor abordagem?    ",
         alternativas:[
       "a) Isolar o doente para evitar a propagação da doença e buscar tratamento imediato.",
       "b) Fornecer cuidados básicos e esperar que a doença passe sem tratamento especializado.",
       "c) Deixar o doente para trás e se concentrar na sobrevivência do grupo.",
       "d) Tentar buscar ajuda médica em uma área potencialmente perigosa."
    ]
    },
    {
        enunciado: "Qual seria o seu plano de sobrevivência a longo prazo?",
        alternativas:[
       "a) Formar uma comunidade com outros sobreviventes e construir um assentamento fortificado.",
       "b) Viajar constantemente para evitar a infestação e buscar novos suprimentos.",
       "c) Viver escondido em um local remoto e esperar que a situação se resolva por si mesma.",
       "d) Tentar encontrar uma cura ou solução científica para o surto."
    ]
    }
];


let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas(); 
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; 

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta(); 