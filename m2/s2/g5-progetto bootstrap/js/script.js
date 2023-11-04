$(document).ready(function(){
    
    $("#toggleButton").on("click", function() {
      
        $("#navbarSupportedContent").slideToggle();
    });
});

/*
document.addEventListener('DOMContentLoaded', function() {
    // Trova tti 'a'  navbar
    const navLinks = document.querySelectorAll('.navbar-nav a');

    //ciascun click evento
    navLinks.forEach(link => {
        // evento al pass del mouse sopra a
        link.addEventListener('mouseover', function() {
            // Ingrandisci il testo
            link.style.fontSize = '20px';
            
        });

        // evento al passaggio del mouse fuori a
        link.addEventListener('mouseout', function() {
            // Ripristina impost predef
            link.style.fontSize = '';
            link.style.color = '';
        });
    });
});
*/




























