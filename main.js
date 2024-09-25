const questions = [
    {
        question: "Como você lida com desafios?",
        answers: [
            { text: "Encaro de frente, com força e coragem", character: "Shrek" },
            { text: "Uso criatividade e estratégia", character: "Fiona" },
            { text: "Procuro ajuda e falo muito sobre isso", character: "Burro" },
            { text: "Resolvo sozinho, com astúcia", character: "Gato de Botas" },
            { text: "Tento escapar, mas sempre com humor", character: "Biscoito de Gengibre" }
        ],
        image: "img/desafios.jpg"
    },
    {
        question: "Como você reage a uma crítica?",
        answers: [
            { text: "Ignoro, não ligo para o que os outros pensam", character: "Shrek" },
            { text: "Aceito bem e tento melhorar", character: "Fiona" },
            { text: "Faço piada e tento aliviar o clima", character: "Burro" },
            { text: "Me defendo de forma charmosa", character: "Gato de Botas" },
            { text: "Fico ofendido, mas tento superar", character: "Biscoito de Gengibre" }
        ],
        image: "img/critica.jpg"
    },
    {
        question: "Qual sua maior motivação na vida?",
        answers: [
            { text: "Ter paz e ficar sozinho", character: "Shrek" },
            { text: "Proteger e cuidar de quem eu amo", character: "Fiona" },
            { text: "Viver aventuras e conhecer novas pessoas", character: "Burro" },
            { text: "Ser admirado e respeitado", character: "Gato de Botas" },
            { text: "Ficar seguro e manter minha doçura", character: "Biscoito de Gengibre" }
        ],
        image: "img/motivacao.jpg"
    },
    {
        question: "Como você descreve sua personalidade?",
        answers: [
            { text: "Reservado, mas de bom coração", character: "Shrek" },
            { text: "Forte, mas gentil", character: "Fiona" },
            { text: "Extrovertido e falante", character: "Burro" },
            { text: "Charmoso e esperto", character: "Gato de Botas" },
            { text: "Doce e um pouco impulsivo", character: "Biscoito de Gengibre" }
        ],
        image: "img/personalidade.jpg"
    },
    {
        question: "O que te faz se sentir confortável?",
        answers: [
            { text: "Ficar no meu canto, longe de tudo", character: "Shrek" },
            { text: "Estar ao lado de pessoas queridas", character: "Fiona" },
            { text: "Ter companhia e conversar", character: "Burro" },
            { text: "Estar no centro das atenções", character: "Gato de Botas" },
            { text: "Estar longe de perigo", character: "Biscoito de Gengibre" }
        ],
        image: "img/confortavel.jpg"
    },
    {
        question: "Como você age quando está com raiva?",
        answers: [
            { text: "Explodo e tento afastar todo mundo", character: "Shrek" },
            { text: "Respiro fundo e tento manter a calma", character: "Fiona" },
            { text: "Reclamo muito e falo sem parar", character: "Burro" },
            { text: "Uso minha sagacidade para ganhar vantagem", character: "Gato de Botas" },
            { text: "Fico frustrado, mas tento não mostrar", character: "Biscoito de Gengibre" }
        ],
        image: "img/raiva.jpeg"
    },
    {
        question: "Qual sua maior virtude?",
        answers: [
            { text: "Sinceridade", character: "Shrek" },
            { text: "Coragem", character: "Fiona" },
            { text: "Lealdade", character: "Burro" },
            { text: "Confiança", character: "Gato de Botas" },
            { text: "Resiliência", character: "Biscoito de Gengibre" }
        ],
        image: "img/virtude.jpg"
    },
    {
        question: "O que te traz felicidade?",
        answers: [
            { text: "Ter tempo para mim mesmo", character: "Shrek" },
            { text: "Ajudar os outros", character: "Fiona" },
            { text: "Estar cercado de amigos", character: "Burro" },
            { text: "Ser reconhecido", character: "Gato de Botas" },
            { text: "Conseguir escapar de problemas", character: "Biscoito de Gengibre" }
        ],
        image: "img/felicidade.jpg"
    },
    {
        question: "Como você reage diante de uma perda?",
        answers: [
            { text: "Demoro para superar, mas sigo em frente", character: "Shrek" },
            { text: "Encaro de frente e fico mais forte", character: "Fiona" },
            { text: "Procuro apoio emocional", character: "Burro" },
            { text: "Escondo minha dor por trás de um sorriso", character: "Gato de Botas" },
            { text: "Fico bastante abalado, mas tento me manter otimista", character: "Biscoito de Gengibre" }
        ],
        image: "img/perda.jpg"
    },
    {
        question: "O que você mais valoriza em uma amizade?",
        answers: [
            { text: "Confiança mútua", character: "Shrek" },
            { text: "Apoio em todos os momentos", character: "Fiona" },
            { text: "Divertimento e companheirismo", character: "Burro" },
            { text: "Admiração e respeito", character: "Gato de Botas" },
            { text: "Lealdade, mesmo nas situações difíceis", character: "Biscoito de Gengibre" }
        ],
        image: "img/amizade.jpg"
    }
];

const results = {
    "Shrek": {
        title: "Você é o Shrek!",
        text: "Você gosta da sua independência e valoriza sua solidão, mas é leal aos amigos.",
        image: "img/shrek.jpg"
    },
    "Fiona": {
        title: "Você é a Fiona!",
        text: "Você tem um coração bondoso e é uma verdadeira guerreira em todos os sentidos.",
        image: "img/fiona.jpg"
    },
    "Burro": {
        title: "Você é o Burro!",
        text: "Você é falante, leal e sempre traz humor em qualquer situação.",
        image: "img/burro.jpg"
    },
    "Gato de Botas": {
        title: "Você é o Gato de Botas!",
        text: "Você é astuto, elegante e sempre tem um truque na manga.",
        image: "img/gato.jpg"
    },
    "Biscoito de Gengibre": {
        title: "Você é o Biscoito de Gengibre!",
        text: "Pequeno mas poderoso, você é doce e rápido em escapar de problemas.",
        image: "img/biscoito.jpg"
    }
};

let currentQuestionIndex = 0;
let characterCount = {
    "Shrek": 0,
    "Fiona": 0,
    "Burro": 0,
    "Gato de Botas": 0,
    "Biscoito de Gengibre": 0
};

const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const questionImage = document.getElementById('question-image');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    characterCount = {
        "Shrek": 0,
        "Fiona": 0,
        "Burro": 0,
        "Gato de Botas": 0,
        "Biscoito de Gengibre": 0
    };
    showQuestion();
    updateProgressBar();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionImage.src = currentQuestion.image;
    answerButtonsElement.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.character));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(character) {
    characterCount[character]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        updateProgressBar();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progress + '%';
}

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');

    const topCharacter = Object.keys(characterCount).reduce((a, b) => characterCount[a] > characterCount[b] ? a : b);
    const result = results[topCharacter];

    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-image').src = result.image;
    document.getElementById('result-text').textContent = result.text;
}
