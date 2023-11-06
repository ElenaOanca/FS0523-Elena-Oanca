class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    confrontaEtaAltroUtente(altroUtente) {
      if (this.age > altroUtente.age) {
        return `${this.firstName} è più vecchio di ${altroUtente.firstName}.`;
      } else if (this.age < altroUtente.age) {
        return `${altroUtente.firstName} è più vecchio di ${this.firstName}.`;
      } else {
        return `${this.firstName} e ${altroUtente.firstName} hanno la stessa età.`;
      }
    }
  }
  
  // Esemp
  let utente1 = new User('Marco', 'Rossi', 30, 'Roma');
  let utente2 = new User('Laura', 'Bianchi', 35, 'Milano');
  
  console.log(utente1.confrontaEtaAltroUtente(utente2)); 




  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    stessoProprietarioAltroPet(altroPet) {
      return this.ownerName === altroPet.ownerName;
    }
  }

  function creaPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const nuovoPet = new Pet(petName, ownerName, species, breed);
    aggiungiPetAllaLista(nuovoPet);
  }
  function aggiungiPetAllaLista(pet) {
    const petsList = document.getElementById('petsList');
    const li = document.createElement('li');
    
    //span per il nome proprietario reg css
    const spanOwner = document.createElement('span');
    spanOwner.textContent = pet.ownerName.toUpperCase();
    spanOwner.style.color = 'red';
    
    li.innerHTML = `Nome: ${pet.petName.toUpperCase()}, Proprietario: `;
    li.appendChild(spanOwner);
    li.innerHTML += `<br>Specie: ${pet.species},<br>Razza: ${pet.breed}`;
    
    petsList.appendChild(li);
    
    // separatore (hr) tra ogni elemento 
    const hr = document.createElement('hr');
    hr.style.width = '100%'; // Limita la largh
    hr.style.boxShadow = '2px 2px 4px #888'; // Agg un'ombra
   hr.style.borderColor = 'red';
  
    hr.style.margin = '5px';
    hr.style.textAlign = 'left'; // Allign a sinistra
    petsList.appendChild(hr);
    
    const pets = document.querySelectorAll('li');
    pets.forEach((element, index) => {
      for (let i = 0; i < index; i++) {
        const altriPet = pets[i];
        if (i !== index) {
          if (pet.stessoProprietarioAltroPet(altriPet)) {
            element.innerHTML += `<br> -- Condivide lo stesso proprietario con ${altriPet.querySelector('span').textContent}`;
          }
        }
      }
    });
    
    // Resetta i valori dei campi di input 
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
  }
  
  // Agg modif  bottone dopo il click
  document.querySelector('button').addEventListener('click', function() {
    this.style.border = 'none'; 
    this.style.color = 'white'; 
    this.style.backgroundColor = 'grey';
    
  });
  