// Prueba de conexión rápida
console.log("El archivo funciones.js está cargado correctamente");

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FUNCIÓN PARA ORDENAR PAÍSES ---
    const ordenarListas = () => {
        // Seleccionamos todas las listas desplegables
        const listas = document.querySelectorAll('.desplegable');
        
        listas.forEach(lista => {
            // Obtenemos los elementos <li>
            const items = Array.from(lista.querySelectorAll('li'));

            // Los ordenamos
            items.sort((a, b) => {
                // Buscamos el texto dentro del <a> y limpiamos espacios
                const textoA = a.querySelector('a').innerText.trim().toUpperCase();
                const textoB = b.querySelector('a').innerText.trim().toUpperCase();
                
                return textoA.localeCompare(textoB, 'es', { sensitivity: 'base' });
            });

            // Limpiamos la lista y volvemos a añadir los items ordenados
            lista.innerHTML = "";
            items.forEach(li => lista.appendChild(li));
        });
        
        console.log("¡Listas ordenadas alfabéticamente!");
    };

    ordenarListas();

    // --- 2. LOGICA DEL LIGHTBOX (Solo si existe en la página) ---
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const imgFull = document.getElementById('lightbox-img');
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.galeria-item')) {
                imgFull.src = e.target.src;
                lightbox.style.display = 'flex';
            }
            if (e.target.id === 'lightbox' || e.target.classList.contains('close-btn')) {
                lightbox.style.display = 'none';
            }
        });
    }
});