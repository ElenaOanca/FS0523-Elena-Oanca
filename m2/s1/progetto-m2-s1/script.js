const header = document.querySelector('.sticky-header');
const section1 = document.querySelector('.section1');
const buttonStarted =document.querySelector('.cambia');

window.addEventListener('scroll', () => {
    const headerHeight = header.getBoundingClientRect().height;
    const section1Top = section1.getBoundingClientRect().top;


    const scrollThreshold = 2 * headerHeight / 2;

    if (section1Top < scrollThreshold) {

        header.style.backgroundColor = 'white';// Sostituisce  il colù
        buttonStarted.style.backgroundColor ='green'

    } else {
       
        header.style.backgroundColor = '#ffc017';
        buttonStarted.style.backgroundColor ='#191919'

    }
});




//----------------------------------------------------------------------------------
// Funzione per controllare la larghezza screen
function checkScreenWidth() {
    // Ottieni la lar
    var screenWidth = window.innerWidth;
  
   
    if (screenWidth < 768) {
      // Nascondo footer
      document.querySelector('.footer').style.display = 'none';
      // Mostra .footer2
      document.querySelector('.footer2').style.display = 'block'; 
    } else {
      // Altrimenti, se è maggiore di 768px
      // Mostro il footer
      document.querySelector('.footer').style.display = 'block'; 
      // Nasc .footer2
      document.querySelector('.footer2').style.display = 'none';
    }
  }
  
  
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);














//------------------------------------------------------------

function mostraLetteraM() {

 // Trova tutte le lettere M nell'SVG
 const svg = document.querySelector('.svg');
 const letterMElements = svg.querySelectorAll(' aria-label');

 // Nascondi tutte M inizialmente
 letterMElements.forEach(element => {
     element.style.display = 'none';
 });

 // Mostra M 1 sec
 letterMElements.forEach(element => {
     element.style.display = 'block';
 });

 setTimeout(() => {
     letterMElements.forEach(element => {
         element.style.display = 'none'; 
     });
 }, 1500);}

 mostraLetteraM();



