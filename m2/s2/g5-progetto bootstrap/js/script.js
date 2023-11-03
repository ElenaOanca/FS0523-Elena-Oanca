$(document).ready(function(){
    // Event listener per il click sul bottone Toggle
    $("#toggleButton").on("click", function() {
        // Alterna la visualizzazione del menu
        $("#navbarSupportedContent").slideToggle();
    });
});