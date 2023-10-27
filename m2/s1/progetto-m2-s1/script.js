const header = document.querySelector('.sticky-header');
const section1 = document.querySelector('.section1');

// Ascolta l'evento di scorrimento della pagina
window.addEventListener('scroll', () => {
    const headerHeight = header.getBoundingClientRect().height;
    const section1Top = section1.getBoundingClientRect().top;

    // Calcola la posizione in cui la sezione 1 è scrollata oltre 2/3 sotto l'intestazione
    const scrollThreshold = 2 * headerHeight / 3;

    if (section1Top < scrollThreshold) {
        // La sezione 1 è stata scrollata oltre 2/3 sotto l'intestazione, cambia il colore di sfondo
        header.style.backgroundColor = 'trasparent'; // Sostituisce  il colore 
    } else {
        // Altrimenti, ripristina il colore di sfondo predefinito
        header.style.backgroundColor = '#ffc017';
    }
});