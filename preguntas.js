// Base de datos de preguntas generadas por los alumnos con IA
const BANCO_PREGUNTAS = {
    "Geografía": [
        { q: "¿Cuál es el río más largo del mundo?", a: ["Amazonas", "Nilo", "Misisipi", "Danubio"], correcta: 0 },
        { q: "¿En qué país se encuentra la Torre Eiffel?", a: ["Italia", "Francia", "España", "Alemania"], correcta: 1 }
    ],
    "Arte y Literatura": [
        { q: "¿Quién pintó la Mona Lisa?", a: ["Van Gogh", "Da Vinci", "Picasso", "Velázquez"], correcta: 1 }
    ],
    "Historia": [
        { q: "¿En qué año llegó Cristóbal Colón a América?", a: ["1492", "1588", "1789", "1350"], correcta: 0 }
    ],
    "Entretenimiento": [
        { q: "¿Qué personaje vive en una piña debajo del mar?", a: ["Bob Esponja", "Patricio", "Calamardo", "Arenita"], correcta: 0 }
    ],
    "Ciencia y Naturaleza": [
        { q: "¿Cuál es el símbolo químico del agua?", a: ["CO2", "H2O", "O2", "H2"], correcta: 1 }
    ],
    "Deportes": [
        { q: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?", a: ["11", "7", "9", "12"], correcta: 0 }
    ]
};

// Exportar para que index.html pueda leerlo si se usan módulos, o dejarlo global
window.BANCO_PREGUNTAS = BANCO_PREGUNTAS;
