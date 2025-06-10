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