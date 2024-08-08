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

function preload() {
    // Cargar assets aquí si es necesario
}

function create() {
    this.add.text(400, 50, 'Trivia Game', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);

    this.questionText = this.add.text(400, 150, '¿Cuál es la capital de Francia?', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);

    this.answers = [
        this.add.text(400, 250, 'A. Madrid', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive(),
        this.add.text(400, 300, 'B. París', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive(),
        this.add.text(400, 350, 'C. Berlín', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive(),
        this.add.text(400, 400, 'D. Roma', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5).setInteractive()
    ];

    this.answers.forEach(answer => {
        answer.on('pointerdown', () => checkAnswer(answer.text));
    });
}

function update() {
    // Lógica de actualización del juego
}

function checkAnswer(answer) {
    const correctAnswer = 'B. París';
    if (answer === correctAnswer) {
        alert('¡Correcto!');
    } else {
        alert('Incorrecto. La respuesta correcta es ' + correctAnswer);
    }
}
