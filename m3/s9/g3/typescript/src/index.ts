// creo classe  astratta lavoratore che ha nome e cognome, id e salario e un metodo astratto per leggere il salario netto
abstract class Lavoratore {
    nome: string;
    cognome: string;
    id: number;
    salariolordo: number;

    constructor(nome:string, cognome:string, id:number, salariolordo:number) {
        this.nome = nome;
        this.cognome = cognome;
        this.id = id;
        this.salariolordo = salariolordo;
    }

    abstract getSalarioNetto(): number;
}

// creo classe operaio che estende lavoratore tassoInsp tassoIrpef e ha un metodo per leggere il salario netto
class Operaio extends Lavoratore {
    tassoInsp: number;
    tassoIrpef: number;

    constructor(nome:string, cognome:string, id:number, salariolordo:number, tassoInsp:number, tassoIrpef:number) {
        super(nome, cognome, id, salariolordo);
        this.tassoInsp = tassoInsp;
        this.tassoIrpef = tassoIrpef;
    }

    getSalarioNetto(): number {
        return this.salariolordo - (this.salariolordo * this.tassoInsp)-(this.salariolordo * this.tassoIrpef);
    }
}

//creo in istanza di operaio
let operaio = new Operaio('Mario', 'Rossi', 1, 2000, 0.1, 0.2);
//stampo il salario netto
console.log('IL stipendio netto dell operaio è: ' + operaio.getSalarioNetto() + ' euro');

//creo classe impiegato che estende lavoratore tassoInsp tassoIrpef e ha un metodo per leggere il salario netto
class Impiegato extends Lavoratore {
    tassoInsp: number;
    tassoIrpef: number;

    constructor(nome:string, cognome:string, id:number, salariolordo:number, tassoInsp:number, tassoIrpef:number) {
        super(nome, cognome, id, salariolordo);
        this.tassoInsp = tassoInsp;
        this.tassoIrpef = tassoIrpef;
    }

    getSalarioNetto(): number {
        return this.salariolordo - (this.salariolordo * this.tassoInsp)-(this.salariolordo * this.tassoIrpef);
    }
}
//creo in istanza di impiegato
let impiegato = new Impiegato('Mario', 'Rossi', 2, 2500, 0.1, 0.15);
//stampo il salario netto
console.log('IL stipendio netto dell impiegato è: ' + impiegato.getSalarioNetto() + ' euro');

//creo classe dirigente che estende lavoratore tassoInsp tassoIrpef e un bonus e ha un metodo per leggere il salario netto
class Dirigente extends Lavoratore {
    tassoInsp: number;
    tassoIrpef: number;
    bonus: number;

    constructor(nome:string, cognome:string, id:number, salariolordo:number, tassoInsp:number, tassoIrpef:number, bonus:number) {
        super(nome, cognome, id, salariolordo);
        this.tassoInsp = tassoInsp;
        this.tassoIrpef = tassoIrpef;
        this.bonus = bonus;
    }

    getSalarioNetto(): number {
        return this.salariolordo - (this.salariolordo * this.tassoInsp)-(this.salariolordo*this.tassoIrpef) + this.bonus;
    }
}

//creo in istanza di dirigente
let dirigente = new Dirigente('Mario', 'Rossi', 3, 4000, 0.1, 0.2, 400);
//stampo il salario netto
console.log('IL stipendio netto del dirigente è: ' + dirigente.getSalarioNetto() + ' euro');






