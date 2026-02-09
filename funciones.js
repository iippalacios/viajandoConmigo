document.addEventListener('DOMContentLoaded', () => {
    
    const ordenarListas = () => {
        const listas = document.querySelectorAll('.desplegable');
        
        listas.forEach(lista => {
            const items = Array.from(lista.querySelectorAll('li'));

            items.sort((a, b) => {
                const textoA = a.querySelector('a').innerText.trim().toUpperCase();
                const textoB = b.querySelector('a').innerText.trim().toUpperCase();
                
                return textoA.localeCompare(textoB, 'es', { sensitivity: 'base' });
            });
            lista.innerHTML = "";
            items.forEach(li => lista.appendChild(li));
        });
    };

    ordenarListas();

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const imgFull = document.getElementById('lightbox-img');
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.galeria')) {
                imgFull.src = e.target.src;
                lightbox.style.display = 'flex';
            }
            
            if (e.target.id === 'lightbox' || e.target.classList.contains('close-btn')) {
                lightbox.style.display = 'none';
            }
        });
    }
});