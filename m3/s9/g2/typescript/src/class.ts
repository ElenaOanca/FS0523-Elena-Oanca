//faccio una classe per veicolo
class Veicolo {
    marca: string;
    modello: string;
    cilindrata!: number;// il ! serve per dire che è opzionale, quindi non è obbligatorio inserirlo ma spegne gli errori
    anno: number;
    prezzo: number;
    //costruttore
    constructor(_marca:'string', _modello:'string', cilindrata:number, anno:number, _prezzo:number) {
        this.marca =_marca,
        this.modello = _modello,
        this.cilindrata = cilindrata,
        this.anno = anno,
        this.prezzo = _prezzo
    }
  
}