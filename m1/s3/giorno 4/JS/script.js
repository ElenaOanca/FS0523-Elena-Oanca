const board = document.getElementById('board');//dichiaro una variabile  div con classe .board che conterrà al suo interno le celle
const drawButton = document.getElementById('drawButton');// faccio variabile che memorizza il bottone
const selectedNumbers = new Set(); // creo variabile per numeri univoci

// Creazione del tabellone con 76 celle
for (let i = 1; i <= 76; i++) {
  const cell = document.createElement('div');//creo il div che conterrà i numeri
  cell.classList.add('cell');//assegno una classe al div .cell
  cell.textContent = i;//assegno un testo al div che sara uguale a i ciclato e ogni volta incrementato di 1
  board.appendChild(cell);// inserisco i div che contiene i numeri nel parent  div.board 
}

// Funzione per estrarre un numero casuale da 1 a 76
function extractNumber() {
  let number;//dichiaro la let numero
  do {// do instruzioni con la classe Math.floor per arrotondare, invoco il metodo Math.random()*76+1 che estrae randomicamente un numero da 1 a 76 e aggiungo 1 perche cosi mi considera il 76, ma potevo scrivere direttamente 77 
    number = Math.floor(Math.random() * 76) + 1;// riassegno il valore di number
  } while (selectedNumbers.has(number));// verifico il numero
  selectedNumbers.add(number);// aggiungo il numero per tener traccia
  return number;}//ritornare il numero

// Funzione per evidenziare una cella sul tabellone
function evidenziaCell(number) {
  const cells = document.querySelectorAll('.cell');// dichiaro la variabile che memorizza le celle con dentro i numeri
  for (let cell of cells) {//ciclo  per ogni cella di celle
    if (parseInt(cell.textContent) === number) { //analizza il contenuto del div .cell se e === a un numero 
      cell.style.backgroundColor = ' rgb(220, 275, 900)';  // do un colore  differente 
      cell.style.borderColor = 'black';  // cambio colore bordo quando selezionato il numero
    /* cell.style.animation =function ruotaElemento() {
        const elemento = document.getElementByClass("cell");
        
        elemento.classList.add("rotate");
      }
     
      const elemento = document.getElementByClass("cell");
      elemento.addEventListener("click", ruotaElemento());*/
    }
  }
}

// Aggiungi un gestore di eventi al bottone di estrazione
drawButton.addEventListener('click', () => { // funzione che al click invoca la funzione extractNumber fatta in precedenza e poi la funzione evidenziaCell 
const number = extractNumber();
 evidenziaCell(number);
});




