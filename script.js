document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nenQuizForm');
    const resultDiv = document.getElementById('result');

        // Descripción de cada tipo de Nen
    const nenDescriptions = {
        "Potenciador": {
            title: "¡Tu tipo de Nen es POTENCIADOR (強化系)! 💥",
            description: "Eres directo, honesto y determinado. Tu fuerza reside en mejorar tus propias capacidades físicas y defensivas. Tu Nen se enfoca en hacer más fuerte lo que ya existe. Como Gon Freecss, te lanzarías de cabeza a cualquier desafío con una convicción inquebrantable."
        },
        "Transformador": {
            title: "¡Tu tipo de Nen es TRANSFORMADOR (変化系)! ⚡",
            description: "Eres caprichoso e ingenioso. Tu aura puede cambiar sus propiedades para imitar otras cosas, dándote habilidades muy versátiles y sorprendentes. Como Killua Zoldyck o Hisoka, disfrutas adaptando y sorprendiendo con tus métodos."
        },
        "Manipulador": {
            title: "¡Tu tipo de Nen es MANIPULADOR (操作系)! 🧠",
            description: "Eres lógico y dominante. Tu habilidad reside en controlar cosas o seres vivos, ya sea a distancia o directamente. Te gusta tener el control de las situaciones y de las personas a tu alrededor. Piensa en Illumi o Shalnark, moviendo los hilos desde las sombras."
        },
        "Conjurador": {
            title: "¡Tu tipo de Nen es CONJURADOR (具現化系)! ⛓️",
            description: "Eres serio y responsable. Tienes la habilidad de crear objetos físicos a partir de tu aura, dándoles propiedades únicas y útiles para cumplir tus objetivos. Como Kurapika, tus creaciones son herramientas precisas para tus metas."
        },
        "Emisor": {
            title: "¡Tu tipo de Nen es EMISOR (放出系)! 💫",
            description: "Eres impaciente y sociable. Tu Nen te permite proyectar tu aura a distancia, lanzando poderosos ataques o comunicándote sin contacto físico. Como Leorio, eres capaz de alcanzar objetivos lejanos con tu energía."
        },
        "Especialista": {
            title: "¡Tu tipo de Nen es ESPECIALISTA (特質系)! ✨",
            description: "Eres único e individualista. Tu Nen no encaja en ninguna de las otras categorías y a menudo involucra habilidades muy específicas, sorprendentes y poderosas, a menudo con condiciones únicas. Eres como Chrollo Lucilfer o un Kurapika en Emperor Time, con un camino propio."
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const formData = new FormData(form);
        const nenCounts = {
            "Potenciador": 0,
            "Transformador": 0,
            "Manipulador": 0,
            "Conjurador": 0,
            "Emisor": 0,
            "Especialista": 0
        };

        // Recorre las respuestas y cuenta los votos para cada tipo de Nen
        for (let [name, value] of formData.entries()) {
            if (nenCounts.hasOwnProperty(value)) { // Verifica si el valor es un tipo de Nen válido
                nenCounts[value]++;
            }
        }

        // Encuentra el tipo de Nen con la puntuación más alta
        let highestCount = 0;
        let nenTypeResult = '';
        let possibleTypes = []; // Para manejar empates

        for (const type in nenCounts) {
            if (nenCounts[type] > highestCount) {
                highestCount = nenCounts[type];
                nenTypeResult = type;
                possibleTypes = [type]; // Reinicia si encontramos uno nuevo más alto
            } else if (nenCounts[type] === highestCount && highestCount > 0) {
                // Si hay un empate con el valor más alto actual, añade al tipo
                possibleTypes.push(type);
            }
        }

        let resultTitle = '';
        let resultDescription = '';

        if (possibleTypes.length === 1) {
            // Un claro ganador
            const data = nenDescriptions[nenTypeResult];
            resultTitle = data.title;
            resultDescription = data.description;
        } else if (possibleTypes.length > 1) {
            // Hay un empate
            resultTitle = "¡Tu tipo de Nen es complejo! 🌀";
            resultDescription = `Parece que tus características se alinean con varios tipos de Nen. Podrías ser una mezcla de: ${possibleTypes.join(' y ')}. Esto te da una gran versatilidad.`;
            // Si quieres puedes añadir la descripción del tipo dominante si hubo uno con más de 0 votos
            if (highestCount > 0) {
                resultDescription += `<br><br>Sin embargo, los rasgos de ${possibleTypes.join(' y ')} son los más prominentes en ti.`;
            }
        } else {
            // En caso de que no se seleccione nada (aunque el 'required' lo evitaría)
            resultTitle = "Por favor, completa todas las preguntas.";
            resultDescription = "Necesitamos tus respuestas para determinar tu tipo de Nen.";
        }


        // Muestra el resultado en la página
        resultDiv.innerHTML = `<h2>${resultTitle}</h2><p>${resultDescription}</p>`;
        resultDiv.style.display = 'block'; // Hace visible el bloque de resultados

        // Opcional: Desplazarse al resultado
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
});