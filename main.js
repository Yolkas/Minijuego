// Configuración de Phaser
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#282c34',
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: '¿Cuál es la capital de Francia?',
        answers: ['A. Madrid', 'B. París', 'C. Berlín', 'D. Roma'],
        correctAnswer: 'B. París'
    },
    {
        question: '¿Cuál es el país más grande del mundo?',
        answers: ['A. Canadá', 'B. China', 'C. Estados Unidos', 'D. Rusia'],
        correctAnswer: 'D. Rusia'
    },
    {
        question: '¿Quién ganó la Copa Mundial de la FIFA en 2018?',
        answers: ['A. Alemania', 'B. Brasil', 'C. Francia', 'D. Argentina'],
        correctAnswer: 'C. Francia'
    },
    {
        question: '¿En qué equipo de fútbol jugó Pelé?',
        answers: ['A. Santos', 'B. Real Madrid', 'C. Barcelona', 'D. Manchester United'],
        correctAnswer: 'A. Santos'
    },
    {
        question: '¿Cuál es el videojuego más vendido de todos los tiempos?',
        answers: ['A. Minecraft', 'B. Tetris', 'C. Grand Theft Auto V', 'D. Super Mario Bros.'],
        correctAnswer: 'A. Minecraft'
    },
    {
        question: '¿En qué año se lanzó el primer juego de la serie "The Legend of Zelda"?',
        answers: ['A. 1985', 'B. 1986', 'C. 1987', 'D. 1988'],
        correctAnswer: 'B. 1986'
    }
];

function preload() {
    // Cargar assets aquí si es necesario
}

function create() {
    this.add.text(400, 50, 'Trivia Game', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
    this.scoreText = this.add.text(700, 50, 'Puntuación: 0', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);
    this.questionText = this.add.text(400, 150, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);

    this.answers = [
        this.add.text(400, 250, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive(),
        this.add.text(400, 300, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive(),
        this.add.text(400, 350, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive(),
        this.add.text(400, 400, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive()
    ];

    this.answers.forEach(answer => {
        answer.on('pointerdown', () => checkAnswer.call(this, answer.text));
    });

    loadQuestion.call(this);
}

function update() {
    // Lógica de actualización del juego
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        this.questionText.setText('¡Juego terminado! Tu puntuación es: ' + score);
        this.answers.forEach(answer => answer.setText(''));
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    this.questionText.setText(currentQuestion.question);

    this.answers.forEach((answer, index) => {
        answer.setText(currentQuestion.answers[index]);
    });
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
        this.scoreText.setText('Puntuación: ' + score);
    } else {
        alert('Incorrecto. La respuesta correcta es ' + currentQuestion.correctAnswer);
    }

    currentQuestionIndex++;
    loadQuestion.call(this);
}
