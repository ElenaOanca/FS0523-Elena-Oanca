/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let x=2
let y=5

if(x>y){
    document.write('il n. maggiore e ',x);
}else if(x<y){
    document.write('Il n. maggiore e ', y)
}else {
    document.write('I n. sono uguali')

}
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*{
let x = prompt('inserisci numero')
if(x!=5){
    console.log('notequal')
}
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    let x=25
    if(x % 5 === 0){
        console.log('divisibile per : 5')
    }
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let x=4
let y=4
if(x === 8 || y == 8 || x+y === 8 || x-y === 8 ||y-x === 8){
    console.log('verificato')
}
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let totalShoppingCart = 25
    let shipping = 10
    let totalAmount = totalShoppingCart
    if(totalShoppingCart < 50){
        console.log(totalAmount += shipping)
        
    }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    
    let totalShoppingCart = 25
    totalShoppingCart = totalShoppingCart*20/100
    let shipping = 10
    let totalAmount = totalShoppingCart
    


    if(totalShoppingCart< 50){
        console.log(totalAmount += shipping)
        
    }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let x=2
    let y=5
    let z=8


}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    let x = 9
    console.log( typeof x)
}

{
    let x = 'pippo'
    if ( typeof x === 'number'){
        console.log('number')
    }else{
        console.log('not number')
    }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let x = 21
    if( x %2 == 0 ){
        console.log( x,'e pari')
    }else{
        console.log(x, 'e dispari')
    }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
        console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = 'toronto'
  
  
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  delete me.lastName
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  me.skills.pop()
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  elementi = new Array ()
  elementi[0] = 1
  elementi[1] = 2
  elementi[2] = 3
  elementi[3] = 4
  elementi[4] = 5
  elementi[5] = 6
  elementi[6] = 7
  elementi[7] = 8
  elementi[8] = 9
  elementi[9] = 10

  elementi1 = new Array (1,2,3,4,5,6,7,8,9,10)


  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  elementi[9] = 15

  