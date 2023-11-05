$(document).ready(function(){
    
    $("#toggleButton").on("click", function() {
      
        $("#navbarSupportedContent").slideToggle();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const carouselItems = document.querySelectorAll('#c2 .carousel-item');

    let currentItemIndex = 0;

    prevButton.addEventListener('click', function() {
        carouselItems[currentItemIndex].classList.remove('active');
        currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentItemIndex].classList.add('active');
    });

    nextButton.addEventListener('click', function() {
        carouselItems[currentItemIndex].classList.remove('active');
        currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
        carouselItems[currentItemIndex].classList.add('active');
    });
});

/*
document.addEventListener("DOMContentLoaded", function() {
    const openFormLink = document.getElementById("openForm");
    const searchForm = document.getElementById("searchForm");

    openFormLink.addEventListener("click", function(event) {
        event.preventDefault();
        searchForm.style.display = "block";
    });
});
*/

































