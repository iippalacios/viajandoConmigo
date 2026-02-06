// Prueba de conexión rápida
console.log("El archivo funciones.js está cargado correctamente");

document.addEventListener('click', function (event) {
    // 1. Detectamos si hacemos clic en una imagen
    if (event.target.tagName === 'IMG') {
        const imagenPulsada = event.target;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        // 2. Si existe el lightbox, le pasamos la foto
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'flex'; // Usamos flex para centrar
            lightboxImg.src = imagenPulsada.src;
            console.log("Abriendo imagen: " + imagenPulsada.src);
        }
    }

    // 3. Cerrar si pulsamos la X o fuera de la foto
    if (event.target.classList.contains('close-btn') || event.target.id === 'lightbox') {
        document.getElementById('lightbox').style.display = 'none';
    }
});