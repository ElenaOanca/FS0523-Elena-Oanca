
interface Cellular {
    balance: number;
    costPerMinute: number;
    numcall: number;

    recharge(euro: number): void;
    number404(): string;
    getNumberCall(): number;
    call(min:number): void;
    deleteCallList(): void;
}

//classe Phone che implementa l'interfaccia Cellular
class Phone implements Cellular {
    numcall: number;
    balance: number;
    costPerMinute: number=0.20;
  
    constructor(balance: number, costPerMinute: number,numcall:number) {
        this.balance = balance;
        this.costPerMinute = costPerMinute;
        this.numcall=numcall;
       
    }
    recharge(euro: number): void {
        this.balance += euro;
        console.log("Il credito residuo è: " + this.balance + "€");
        
    }
   
    number404(): string {
        return 'IL credito residuo è' + this.balance + "€";
    }

   
    getNumberCall(): number {
        return this.numcall;
    }
   
  
    call(min: number): void {
        this.balance -= min * this.costPerMinute;
        this.numcall++;
        console.log("Il credito residuo è: " + this.balance + "€");
    }
  
    deleteCallList(): void {
        this.numcall = 0;
    }
}



interface Call {
    calledNumber: string;
    date: Date;
    duration: number;
    cost: number;
}

//instanzio 3 cell
let phone1: Phone = new Phone(50, 0.20,9);
let phone2: Phone = new Phone(80, 0.20,12);
let phone3: Phone = new Phone(150, 0.20,15);



phone1.recharge(10);
phone2.recharge(20);
phone3.recharge(30);

phone1.call(5);
phone2.call(10);
phone3.call(15);

//mostro ù residuo

console.log(phone1.number404());
console.log(phone2.number404());
console.log(phone3.number404());

//mostro  effettuate

console.log(phone1.getNumberCall());
console.log(phone2.getNumberCall());
console.log(phone3.getNumberCall());

//cancello chiamate

phone1.deleteCallList();
phone2.deleteCallList();
phone3.deleteCallList();


//extra------------------------------------------------------------------------------------
interface CallList {
    id: number;
    duration: number;
    date: Date;
    time: Date;
}

//array di oggetti

let callList: CallList[] = [
    { id: 1, duration: 5, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 2, duration: 10, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 3, duration: 15, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 4, duration: 20, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 5, duration: 25, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) }
];

//mostro  lista  chiamate

console.log(callList);

//funz calcola costo  chiamata
function costCall(callList: CallList[], costPerMinute: number): number {
    let cost: number = 0;
    for (let i = 0; i < callList.length; i++) {
        cost += callList[i].duration * costPerMinute;
    }
    return cost;
}

//mostro  costo  chiamata

console.log(costCall(callList, 0.20));

//funzione  cancella  lista/chiamate

function deleteCall(callList: CallList[]): void {
    callList.splice(0, callList.length);

}

//cancello lista chiamate

deleteCall(callList);

//list call

console.log(callList);

//funz cancella  chiamate x id

function deleteCallId(callList: CallList[], id: number): void {
    for (let i = 0; i < callList.length; i++) {
        if (callList[i].id == id) {
            callList.splice(i, 1);
        }
    }
}

//cancello chiamata  id

deleteCallId(callList, 3);

//list call

console.log(callList);

