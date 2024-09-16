// Lista de poemas románticos
const poemas = [
    "Eres la luz que ilumina mi vida y la razón por la que sonrío cada día. Tu amor es mi mayor tesoro, y siempre estaré agradecido por ti.",
    "En cada latido de mi corazón, encuentro tu amor. Eres mi sol en los días nublados y mi refugio en la tormenta.",
    "Tus ojos son estrellas que brillan en mi cielo, y tu sonrisa es la melodía que alegra mi alma. No hay palabras suficientes para describir cuánto te amo.",
    "El amor que siento por ti es un río interminable, que fluye con fuerza y ternura. Eres el sueño que se ha hecho realidad en mi vida.",
    "Cada momento contigo es un regalo precioso, y cada abrazo tuyo es un refugio cálido. Eres el sueño hecho realidad que nunca quiero despertar.",
    "En cada rincón de mi corazón, encuentro un pedacito de ti. Tu amor me envuelve y me da la fuerza para enfrentar cualquier cosa.",
    "Eres mi inspiración, mi fuerza y mi alegría. Sin ti, mi vida sería incompleta. Te amo más allá de las palabras.",
    "A tu lado, el mundo es un lugar más hermoso. Tu amor es el regalo más grande que he recibido y siempre lo atesoraré.",
    "Mi amor por ti es infinito, como el cielo estrellado en una noche clara. Eres mi todo, y siempre estaré a tu lado.",
    "Tu risa es la melodía más dulce, y tu amor es el poema más hermoso. Estoy agradecido por cada momento que compartimos juntos.",
    "Cada día contigo es una nueva aventura, llena de amor y felicidad. No puedo imaginar mi vida sin ti a mi lado.",
    "Eres mi sueño hecho realidad, mi amor eterno. Tu presencia en mi vida es un regalo que nunca dejaré de agradecer.",
    "Tu amor es el faro que guía mi camino en la oscuridad. Eres mi luz, mi esperanza y mi mayor felicidad.",
    "En cada mirada, encuentro la promesa de un futuro juntos. Tu amor es el sueño más hermoso que he vivido.",
    "Eres mi inspiración, mi alegría y mi paz. No hay nada en el mundo que pueda igualar el amor que siento por ti.",
    "Cada momento a tu lado es un tesoro precioso. Tu amor llena mi vida de alegría y me da fuerzas para enfrentar cualquier desafío.",
    "Tu amor es el sol que ilumina mis días y la luna que vela mis noches. Eres el sueño que nunca quiero despertar.",
    "A tu lado, el tiempo se detiene y el mundo se vuelve más hermoso. Tu amor es mi mayor bendición y siempre lo atesoraré.",
    "Eres el motivo de mi sonrisa y el latido de mi corazón. Sin ti, mi vida no tendría el mismo sentido.",
    "Cada palabra que compartimos, cada abrazo que nos damos, es una prueba del amor eterno que sentimos el uno por el otro."
];

// Función para mostrar un poema aleatorio
document.getElementById('mostrarPoema').addEventListener('click', function() {
    const poema = poemas[Math.floor(Math.random() * poemas.length)];
    document.getElementById('poemaTexto').textContent = poema;
});
