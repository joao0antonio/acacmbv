const flashcards = [
    {
        question: "Qual é a fórmula da área de um círculo?",
        answer: "A = πr², onde r é o raio."
    },
    {
        question: "O que é uma oração subordinada?",
        answer: "Uma oração que depende de outra para ter sentido completo."
    },
    {
        question: "Quem foi Dom Pedro I?",
        answer: "O primeiro imperador do Brasil e responsável pela independência em 1822."
    },
    {
        question: "Qual é a função dos ribossomos na célula?",
        answer: "Produzir proteínas."
    },
    {
        question: "Qual é a fórmula da hipotenusa em um triângulo retângulo?",
        answer: "c² = a² + b², onde c é a hipotenusa e a e b são os catetos."
    },
    {
        question: "O que é uma figura de linguagem?",
        answer: "Um recurso estilístico utilizado para dar mais expressividade ao texto."
    },
    {
        question: "Quem foi Getúlio Vargas?",
        answer: "Um importante presidente do Brasil, conhecido por suas políticas trabalhistas."
    },
    {
        question: "O que são mitocôndrias?",
        answer: "Organelas responsáveis pela produção de energia nas células."
    },
    {
        question: "Qual é a capital do Brasil?",
        answer: "Brasília."
    },
    {
        question: "O que é a fotossíntese?",
        answer: "Processo que as plantas usam para converter luz solar em energia."
    }
];

let currentCard = 0;

function displayCard() {
    const question = document.querySelector('.question');
    const answer = document.querySelector('.answer');
    question.textContent = flashcards[currentCard].question;
    answer.textContent = flashcards[currentCard].answer;
    answer.style.display = "none";
    question.style.display = "block";
}

function toggleCard() {
    const question = document.querySelector('.question');
    const answer = document.querySelector('.answer');
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        question.style.display = "none";
    } else {
        answer.style.display = "none";
        question.style.display = "block";
    }
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
}

// Inicializa o primeiro card
displayCard();
