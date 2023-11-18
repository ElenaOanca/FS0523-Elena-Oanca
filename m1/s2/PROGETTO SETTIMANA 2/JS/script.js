/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i = 0; i < pets.length; i++) {
    console.log(pets[i])
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const petsSort = pets.sort()
console.log(petsSort);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const petsReverse = pets.reverse()
console.log(petsReverse);
console.log(pets[i]);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPets = pets.shift()
pets.push(firstPets)
console.log(pets[3]);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

for (i = 0; i < cars.length; i++) {
    cars[0].lincensePlate = 'AB 111 CD';
    cars[1].lincensePlate = 'AZ 222 CD';
    cars[2].lincensePlate = 'AJ 333 CD';
    console.log(cars[i]);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
    brand: 'Ferrari' ,
    model: 'Monza' ,
    color: 'Red' ,
    lincensePlate : 'GD 123 TD',
    trims: ['GTS' , 'V12']  ,
}

cars.push(newCar)
console.log(cars[3]);

/*for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(cars[index]);
}*/
for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    cars[index].trims.pop()
    
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let index = 0; index < cars.length; index++) {
    justTrims.push(cars[i].trims[0])
    
}

for (let index = 0; index < justTrims.length; index++) {
    const elementJust = justTrims[index];
    console.log(elementJust);
    
}




/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".*/

for (let i = 0; i < cars.length; i++) {
   
if (cars[i].color.startsWit == 'b') { console.log( 'Fizz');
    
} else { console.log('BUZZ');
    
}
}


for (let i = 0; i < cars.length; i++) {
    if (cars[i].color.startsWit == 'b') console.log('Fizz');
    else console.log('BUZZ');
}




/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105, 3, 67, 21, 1, 9, 0,

]

while ( i < numericArray.length && numericArray[i] !== 32 ) {
    console.log(numericArray[i]);
    i++
    
    
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let alfabeto = 'abcdefghijklmnopqrstuvwxyz' // dichiaro la stringa alfabeto


     let alfabetSplit = alfabeto.split(',') // dichiaro la variabile alfabetSplit che e uguale al metodo split






for (let i = 0; i < alfabetSplit.length; i++) {
   console.log(alfabetSplit[i]);
    
    
}


const alphabetItaliano = 'abcdefghijklmnopqrstuvwxyz'.split(',');

const positions = charactersArray.map(char => {
  switch (char) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    case 'd':
      return 4;
    case 'e':
      return 5;
    case 'f':
      return 6;
    case 'g':
      return 7;
    case 'h':
      return 8;
    case 'i':
      return 9;
    case 'j':
      return 10;
    case 'k':
      return 11;
    case 'l':
      return 12;
    case 'm':
      return 13;
    case 'n':
      return 14;
    case 'o':
      return 15;
    case 'p':
      return 16;
    case 'q':
      return 17;
    case 'r':
      return 18;
    case 's':
      return 19;
    case 't':
      return 20;
    case 'u':
      return 21;
    case 'v':
      return 22;
    case 'w':
      return 23;
    case 'x':
      return 24;
    case 'y':
      return 25;
    case 'z':
      return 26;
    default:
      return 0; // Carattere non trovato nell'alfabeto italiano
  }
});

console.log(positions);