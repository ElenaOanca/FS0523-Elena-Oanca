"use strict";
//classe Phone che implementa l'interfaccia Cellular
class Phone {
    constructor(balance, costPerMinute, numcall) {
        this.costPerMinute = 0.20;
        this.balance = balance;
        this.costPerMinute = costPerMinute;
        this.numcall = numcall;
    }
    recharge(euro) {
        this.balance += euro;
        console.log("Il credito residuo è: " + this.balance + "€");
    }
    //metodo che mostra il credito residuo comprenssivo di valuta
    number404() {
        return 'IL credito residuo è' + this.balance + "€";
    }
    //metodo che mi ritorna il numero di chiamate effettuate
    getNumberCall() {
        return this.numcall;
    }
    //metodo call
    call(min) {
        this.balance -= min * this.costPerMinute;
        this.numcall++;
        console.log("Il credito residuo è: " + this.balance + "€");
    }
    //metodo che mi cancella la lista delle chiamate
    deleteCallList() {
        this.numcall = 0;
    }
}
//instanzio 3 cellulari
let phone1 = new Phone(50, 0.20, 9);
let phone2 = new Phone(80, 0.20, 12);
let phone3 = new Phone(150, 0.20, 15);
//ricarico i cellulari
phone1.recharge(10);
phone2.recharge(20);
phone3.recharge(30);
//effettuo le chiamate
phone1.call(5);
phone2.call(10);
phone3.call(15);
//mostro il credito residuo
console.log(phone1.number404());
console.log(phone2.number404());
console.log(phone3.number404());
//mostro il numero di chiamate effettuate
console.log(phone1.getNumberCall());
console.log(phone2.getNumberCall());
console.log(phone3.getNumberCall());
//cancello la lista delle chiamate
phone1.deleteCallList();
phone2.deleteCallList();
phone3.deleteCallList();
//array di oggetti
let callList = [
    { id: 1, duration: 5, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 2, duration: 10, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 3, duration: 15, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 4, duration: 20, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) },
    { id: 5, duration: 25, date: new Date(2020, 10, 10), time: new Date(2020, 10, 10, 10, 10, 10) }
];
//mostro la lista delle chiamate
console.log(callList);
//funzione che mi calcola il costo della chiamata
function costCall(callList, costPerMinute) {
    let cost = 0;
    for (let i = 0; i < callList.length; i++) {
        cost += callList[i].duration * costPerMinute;
    }
    return cost;
}
//mostro il costo della chiamata
console.log(costCall(callList, 0.20));
//funzione che mi cancella la lista delle chiamate
function deleteCall(callList) {
    callList.splice(0, callList.length);
}
//cancello la lista delle chiamate
deleteCall(callList);
//mostro la lista delle chiamate
console.log(callList);
