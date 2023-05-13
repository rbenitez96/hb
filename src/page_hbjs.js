// Definimos las palabras clave para la búsqueda
const keywords = ['happy birthday', 'romance couple'];

// Generamos una cadena de búsqueda a partir de las palabras clave
const query = keywords.join(',');
// Hacemos una petición a la API de Unsplash para obtener una imagen aleatoria
fetch(`https://api.unsplash.com/photos/random?query=${query}`, {
  headers: {
    Authorization: 'Client-ID w5HourH24CYVe9TaD_SpVAOVgcXi0L98wIM-tMLeZfY',
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Obtenemos la URL de la imagen y la asignamos como fondo de la página
    const imageUrl = data.urls.regular;
    document.body.style.backgroundImage = `url(${imageUrl})`;
  })
  .catch((error) => {
    console.error(error);
  });
