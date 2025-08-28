document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "Hola, ¿Cómo estás?",
    "Hello, how are you?",
    "Bonjour, ça va bien ?",
    "Oi, tudo bem?"
  ];

  // Mezcla tipo Fisher–Yates
  function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Mezcla palabras dentro de una frase
  function mezclarPalabras(oracion) {
    const palabras = oracion.split(/\s+/);   // separa por espacios
    mezclar(palabras);
    return palabras.join(" ");
  }

  // 1) Elegir UNA frase al azar (distinta cada recarga)
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  // 2) Mezclar SUS palabras y mostrar
  const resultado = mezclarPalabras(fraseAleatoria);

  document.getElementById("contenedor").textContent = resultado;
});
