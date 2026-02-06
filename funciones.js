document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const fotos = document.querySelectorAll('.galeria-item img');
    const closeBtn = document.querySelector('.close-btn');

    // Cuando haces clic en cualquier foto de la galería
    fotos.forEach(foto => {
        foto.addEventListener('click', () => {
            lightbox.style.display = 'block'; // Mostramos la caja
            lightboxImg.src = foto.src; // Ponemos la misma foto
            // Buscamos el nombre que está arriba de la foto
            const nombre = foto.parentElement.querySelector('.nombre-foto').innerText;
            lightboxCaption.innerText = nombre;
        });
    });

    // Cuando haces clic en la (X) para cerrar
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // También se cierra si haces clic fuera de la foto
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});