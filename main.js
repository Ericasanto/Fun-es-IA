// main.js

const questions = [
    {
        question: "Qual é a sua atividade favorita?",
        options: [
            "Ficar sozinho em casa",
            "Fazer novas amizades",
            "Organizar festas e eventos",
            "Explorar lugares novos",
            "Viajar e experimentar novas culturas"
        ]
    },
    {
        question: "Como você lida com problemas?",
        options: [
            "Prefiro resolver sozinho",
            "Busco ajuda dos amigos",
            "Tento encontrar uma solução criativa",
            "Enfrento de frente, sem medo",
            "Uso meu charme e astúcia para resolver"
        ]
    },
    {
        question: "Qual é a sua comida favorita?",
        options: [
            "Comida caseira",
            "Pratos exóticos",
            "Doces e guloseimas",
            "Pizza e fast food",
            "Pratos sofisticados e gourmet"
        ]
    },
    {
        question: "Qual é o seu tipo de humor?",
        options: [
            "Sarcástico e irônico",
            "Divertido e engraçado",
            "Inteligente e perspicaz",
            "Despreocupado e leve",
            "Dramático e intenso"
        ]
    },
    {
        question: "Qual é a sua atividade favorita em um dia livre?",
        options: [
            "Assistir a filmes e relaxar",
            "Fazer esportes ou atividades ao ar livre",
            "Ler um bom livro",
            "Reunir-se com amigos para uma festa",
            "Trabalhar em projetos pessoais ou criativos"
        ]
    },
    {
        question: "Como você prefere passar seu tempo livre?",
        options: [
            "Sozinho, aproveitando a solitude",
            "Com amigos e família, socializando",
            "Em atividades criativas e artísticas",
            "Aventurando-se e explorando novos lugares",
            "Organizando eventos e sendo o anfitrião"
        ]
    }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // Limpa o conteúdo atual

    const q = questions[index];

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach((option, i) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="q${index}" value="${i + 1}"> ${option}`;
        questionDiv.appendChild(label);
        questionDiv.appendChild(document.createElement('br'));
    });

    container.appendChild(questionDiv);

    document.getElementById('prev-btn').style.display = (index === 0) ? 'none' : 'inline-block';
    document.getElementById('next-btn').style.display = (index === questions.length - 1) ? 'none' : 'inline-block';
    document.getElementById('submit-btn').style.display = (index === questions.length - 1) ? 'inline-block' : 'none';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function calculateResult() {
    const answers = document.querySelectorAll('input[type=radio]:checked');
    
    if (answers.length < questions.length) {
        document.getElementById('result').innerHTML = '<p>Por favor, responda a todas as perguntas para ver o resultado.</p>';
        return;
    }

    let scores = [0, 0, 0, 0, 0, 0, 0]; // Pontuações para Shrek, Donkey, Fiona, Lord Farquaad, Gato de Botas, Pinóquio, Biscoito

    answers.forEach(answer => {
        scores[parseInt(answer.value) - 1]++;
    });

    const maxScore = Math.max(...scores);
    const resultIndex = scores.indexOf(maxScore);

    const characters = [
        { name: 'Shrek', description: 'Você seria o Shrek! Assim como o Shrek, você valoriza sua privacidade, tem um coração generoso e é leal aos amigos.', img: 'shrek.jpg' },
        { name: 'Burro', description: 'Você seria o Burro! Você é amigável, falante e adora estar cercado de pessoas. Seu entusiasmo é contagiante.', img: 'donkey.jpg' },
        { name: 'Fiona', description: 'Você seria a Fiona! Forte e determinada, você sabe o que quer e luta pelos seus objetivos. Além disso, você tem um grande coração.', img: 'fiona.jpg' },
        { name: 'Lord Farquaad', description: 'Você seria o Lord Farquaad! Você é ambicioso e adora estar no controle. Você pode ser um pouco exigente, mas sempre busca o melhor.', img: 'farquaad.jpg' },
        { name: 'Gato de Botas', description: 'Você seria o Gato de Botas! Charmoso e astuto, você sabe como usar seu charme para sair de situações complicadas e adora aventuras.', img: 'puss_in_boots.jpg' },
        { name: 'Pinóquio', description: 'Você seria o Pinóquio! Ingênuo e curioso, você tem um grande desejo de ser honesto e sempre quer fazer o melhor para os outros.', img: 'pinocchio.jpg' },
        { name: 'Biscoito', description: 'Você seria o Biscoito! Divertido e despreocupado, você tem uma personalidade leve e adora fazer os outros rirem.', img: 'cookie.jpg' }
    ];

    const character = characters[resultIndex];
    document.getElementById('result').innerHTML = `
        <p>${character.description}</p>
        <img src="${character.img}" alt="${character.name}">
    `;

    // Ocultar botões de navegação e exibir apenas o botão de resultado
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
}

// Inicializar o quiz mostrando a primeira pergunta
window.onload = () => {
    showQuestion(currentQuestionIndex);

    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-btn').addEventListener('click', calculateResult);
};

