
  // Seleziona il link "Home" e il pulsante per il toggle
  const linkHome = document.getElementById('linkHome');
  const toggleButton = document.getElementById('toggleButton');
  const navbarNav = document.getElementById('navbarNav');

  // Gestisci il clic sul link "Home" per schermi di dim sm
  linkHome.addEventListener('click', function(event) {
    if (window.innerWidth <= 576) {
      event.preventDefault(); // Previeni l'azione predefinita del link
      if (navbarNav.classList.contains('show')) {
        navbarNav.classList.remove('show'); // Chiudi 
      } else {
        navbarNav.classList.add('show'); // Apri 
      }
    }
  });

  // Aggiungi un'azione al pulsante per il toggle per schermi di dim picc
  toggleButton.addEventListener('click', function() {
    if (window.innerWidth <= 576) {
      if (navbarNav.classList.contains('show')) {
        navbarNav.classList.remove('show'); // Chiudi
      } else {
        navbarNav.classList.add('show'); // Apri 
      }
    }
  });

  //  gestione  link del menu di nav 
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 576) {
        navbarNav.classList.remove('show'); // Chiudi il menu se  clic su un link
      }
    });
  });


