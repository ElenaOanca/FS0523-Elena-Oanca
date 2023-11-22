"use strict";
let pizze = [
    { gusto: 'Margherita',
        prezzo: 5.50,
        disponibile: true },
    { gusto: 'Diavola',
        prezzo: 6.50,
        disponibile: true },
    { gusto: 'Bufalina',
        prezzo: 7.50,
        disponibile: true },
    { gusto: 'Marinara',
        prezzo: 4.50,
        disponibile: true }
];
//aggiungere ad un array
pizze.push({ gusto: '4 formaggi',
    prezzo: 8.50,
    disponibile: true });
//rimuovere da un array il secondo elemento
pizze.splice(1, 1);
//aggiungere un elemento in una posizione specifica
pizze.splice(1, 0, { gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//modificare un elemento
pizze[1].prezzo = 7.50;
//aggiungere un elemento in coda
pizze.push({ gusto: '4 formaggi',
    prezzo: 8.50,
    disponibile: true });
//aggiungere un elemento in testa
pizze.unshift({ gusto: '4 formaggi',
    prezzo: 8.50,
    disponibile: true });
//rimuovere un elemento in coda e restituirlo       
pizze.pop();
//rimuovere un elemento in testa e restituirlo
pizze.shift();
//trovare l'indice di un elemento
pizze.findIndex((pizza) => pizza.gusto == 'Diavola');
//trovare un elemento
pizze.find((pizza) => pizza.gusto == 'Diavola');
//trovare più elementi
pizze.filter((pizza) => pizza.prezzo > 6);
//ordinare un array
pizze.sort((a, b) => a.prezzo - b.prezzo);
//invertire l'ordine di un array
pizze.reverse();
//iterare un array
pizze.forEach((pizza) => console.log(pizza.gusto));
//iterare un array con for of
for (let pizza of pizze) {
    console.log(pizza.gusto);
}
//iterare un array con for in
for (let i in pizze) {
    console.log(pizze[i].gusto);
}
//iterare un array con for
for (let i = 0; i < pizze.length; i++) {
    console.log(pizze[i].gusto);
}
//iterare un array con while
// let i=0;
// while(i<pizze.length){
//     console.log(pizze[i].gusto);
//     i++;
// }
//iterare un array con do while
let i = 0;
do {
    console.log(pizze[i].gusto);
    i++;
} while (i < pizze.length);
//iterare un array con map
pizze.map((pizza) => console.log(pizza.gusto));
//iterare un array con reduce
pizze.reduce((acc, pizza) => acc + pizza.prezzo, 0);
//iterare un array con reduceRight
pizze.reduceRight((acc, pizza) => acc + pizza.prezzo, 0);
//iterare un array con some
pizze.some((pizza) => pizza.prezzo > 6);
//iterare un array con every
pizze.every((pizza) => pizza.prezzo > 6);
//iterare un array con includes
pizze.includes({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//iterare un array con indexOf
pizze.indexOf({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//iterare un array con lastIndexOf
pizze.lastIndexOf({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//iterare un array con findIndex
pizze.findIndex((pizza) => pizza.gusto == 'Diavola');
//iterare un array con find
pizze.find((pizza) => pizza.gusto == 'Diavola');
//iterare un array con filter
pizze.filter((pizza) => pizza.prezzo > 6);
//iterare un array con keys
for (let key of pizze.keys()) {
    console.log(key);
}
//iterare un array con values
for (let value of pizze.values()) {
    console.log(value);
}
//iterare un array con entries
for (let entry of pizze.entries()) {
    console.log(entry);
}
//iterare un array con from
Array.from(pizze, (pizza) => pizza.gusto);
//iterare un array con of
for (let pizza of Array.of(...pizze)) {
    console.log(pizza.gusto);
}
//iterare un array con copyWithin
pizze.copyWithin(1, 0);
//iterare un array con fill
pizze.fill({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true }, 1, 2);
// //iterare un array con flat
// pizze.flat();
// //iterare un array con flatMap
// pizze.flatMap((pizza)=>pizza.gusto);
//iterare un array con includes
pizze.includes({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//iterare un array con indexOf
pizze.indexOf({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//iterare un array con lastIndexOf
pizze.lastIndexOf({ gusto: 'Diavola',
    prezzo: 6.50,
    disponibile: true });
//------------------------------------------------------------------------------------------------------------------------
let paste = [
    {
        id: 1,
        gusto: 'carbonara',
        ingredienti: ['uova', 'guanciale', 'pecorino', 'pepe'],
    },
    {
        id: 2,
        gusto: 'amatriciana',
        ingredienti: ['guanciale', 'pecorino', 'pepe', 'pomodoro'],
    },
    {
        id: 3,
        gusto: 'cacio e pepe',
        ingredienti: ['pecorino', 'pepe'],
    },
    {
        id: 4,
        gusto: 'pomodoro',
        ingredienti: ['pomodoro'],
    },
    {
        id: 5,
        gusto: 'pesto',
        ingredienti: ['pesto'],
    },
];
//cambia un ingrediente dal array paste
paste[0].ingredienti[1] = 'pancetta';
//stampare tutti gli ingredienti del primo elemento
console.log(paste[0].ingredienti);
