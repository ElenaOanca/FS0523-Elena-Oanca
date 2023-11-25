import "colors";

interface Call {
    calledNumber: string;
    date: Date;
    duration: number;
    cost: number;
}

interface Cellular {
    balance: number;
    costPerMinute: number;
    numcall: number;
    listCall: Call[];
    recharge(euro: number): void;
    number404(): string;
    getNumberCall(): number;
    call(min:number,calledNumber:string): void;
    deleteCallList(): void;


}


//classe Phone che implementa l'interfaccia Cellular
class Phone implements Cellular {
    numcall: number;
    balance: number;
    costPerMinute: number=0.20;
    listCall: Call[]=[];
  
    constructor(balance: number, costPerMinute: number,numcall:number) {
        this.balance = balance;
        this.costPerMinute = costPerMinute;
        this.numcall=numcall;
       
    }
    recharge(euro: number): void {
        this.balance += euro;
      
        
    }
   
    number404(): string {
        return 'IL credito residuo è' + this.balance + "€";
    }

   
    getNumberCall(): number {
        return this.numcall;
    }
   
  
    call(min: number,calledNumber:string): void {
        this.balance -= min * this.costPerMinute;
        this.numcall++;
        let callDate = new Date();
        callDate.setMinutes(0,0)
        callDate.setMilliseconds(0);

        let call: Call = {
            calledNumber: calledNumber,
            date: callDate,
            duration: min,
            cost: min * this.costPerMinute
        };
        this.listCall.push(call);
    }


  
    deleteCallList(): void {
        this.numcall = 0;
        this.listCall = [];
    }

    //filtro chiamate effettuate per data
    filterCallList(date: Date): Call[] {
        return this.listCall.filter(call => {
           
            return call.date.getTime() == date.getTime();
            
            
        });
    }   

    showCallList(): string {
        let result: string = "";
        this.listCall.forEach(call => {
            result += "called number: ".green + call.calledNumber + " date: " + call.date + " duration: " + call.duration + " cost: " + call.cost + "\n";
        });
        return result;

    }

}





//instanzio 3 cell
let phone1: Phone = new Phone(50, 0.20,9);
let phone2: Phone = new Phone(80, 0.20,12);
let phone3: Phone = new Phone(150, 0.20,15);



phone1.recharge(10);
phone2.recharge(20);
phone3.recharge(30);

phone1.call(5, "333333335656533");

phone1.call(10, "55555335656533");
phone2.call(5, "2256533");
phone2.call(10, "1135656533");
phone2.call(10, "32665965656333");
phone3.call(15, "33556566565533");

let callFilter = phone1.filterCallList(new Date(2023,10,25,10,0,0));
// console.log(callFilter);

phone1.showCallList();
console.log(phone1.showCallList());

console.log(phone1.listCall);
console.log(phone2.listCall);
console.log(phone3.listCall);


// mostro residuo

console.log(phone1.number404());
console.log(phone2.number404());
console.log(phone3.number404());

//mostro  effettuate

console.log(phone1.getNumberCall());
console.log(phone2.getNumberCall());
console.log(phone3.getNumberCall());

// cancello chiamate

phone1.deleteCallList();
phone2.deleteCallList();
phone3.deleteCallList();

console.log(phone1.listCall);
console.log(phone2.listCall);
console.log(phone3.listCall);
