


// Creo il programma che descrive e inizializza un oggetto di tipo capo di abbigliamento attraverso il constructor
class Capo {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    // Metodo getSaldoCapo che restituisce il saldo del capo in percentuale
    getSaldoCapo() {
        return this.saldo;
    }

    // Metodo setSaldoCapo che setta il saldo del capo
    setSaldoCapo(saldo: number) {
        this.saldo = saldo;
    }

    // Metodo che restituisce il prezzo finale del capo dopo che abbiamo calcolato il prezzo iniziale meno lo sconto
    getPrezzoFinale() {
        return this.prezzoivainclusa - (this.prezzoivainclusa * this.saldo / 100);
    }
}

// Creo la fetch che mi permette di recuperare i dati dal server locale, dal file abbigliamento.json
const fetchPromise = fetch('Abbigliamento.json');
async function fetchAbbigliamento() {
    const response:Response = await fetchPromise;
    const abbigliamento = await response.json();
    return abbigliamento;}

    // Creo un array di oggetti di tipo capo
    let arrayCapo: Array<Capo> = new Array();

    // Creo una funzione che mi permette di creare un array di oggetti di tipo capo
    async function creaArrayCapo() {
        const abbigliamento = await fetchAbbigliamento();
        for (const capo of abbigliamento) {
            arrayCapo.push(new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo));
        }
    }

    //creo funzione che mi simula la vendita di un capo
    function venditaCapo(id: number, quantita: number) {
        for (const capo of arrayCapo) {
            if (capo.id == id) {
                capo.quantita = capo.quantita - quantita;
            }
        }
    }