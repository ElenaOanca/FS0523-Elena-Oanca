"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Creo il programma che descrive e inizializza un oggetto di tipo capo di abbigliamento attraverso il constructor
class Capo {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    setSaldoCapo(saldo) {
        this.saldo = saldo;
    }
    // Metodo che restituisce il prezzo finale del capo dopo che abbiamo calcolato il prezzo iniziale meno lo sconto
    getPrezzoFinale() {
        return this.prezzoivainclusa - (this.prezzoivainclusa * this.saldo / 100);
    }
}
// Creo la fetch che mi permette di recuperare i dati dal server locale, dal file abbigliamento.json
const fetchPromise = fetch('http://127.0.0.1:5500//Abbigliamento.json');
function fetchAbbigliamento() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchPromise;
        const abbigliamento = yield response.json();
        return abbigliamento;
    });
}
// Creo un array di oggetti di tipo capo
let arrayCapo = new Array();
// Creo una funzione che mi permette di creare un array di oggetti di tipo capo
function creaArrayCapo() {
    return __awaiter(this, void 0, void 0, function* () {
        const abbigliamento = yield fetchAbbigliamento();
        for (const capo of abbigliamento) {
            arrayCapo.push(new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo));
        }
    });
}
//creo funzione che mi simula la vendita di un capo
function venditaCapo(id, quantita) {
    for (const capo of arrayCapo) {
        if (capo.id == id) {
            capo.quantita = capo.quantita - quantita;
        }
    }
}
